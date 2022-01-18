import {Picker} from '@react-native-picker/picker';
import moment from 'moment';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Modal} from 'react-native';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  RefreshControl,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MonthPicker from 'react-native-month-year-picker';
import * as NavigationService from '../../../store/NavigationService';
import {moderateScale} from 'react-native-size-matters';
import TimeAgo from 'react-native-timeago';
import {useDispatch, useSelector} from 'react-redux';
import {fonts, icons} from '../../../../assets';
import {Loader} from '../../../components/common';
import {Header} from '../../../components/common/Header';
import {
  leaderboardfilter,
  leaderboardfishlist,
  leaderboardranking,
} from '../../../store/actions';
import {colors, screenNames} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';
import styles from './styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MONTHLY_OUTPUT_FORMAT = 'MMMM YYYY';
const YEAR_OUTPUT_FORMAT = 'YYYY';

let fishingArr = [
  {
    img: icons.Mahi,
    text: 'Mahi Mahi',
  },
  {
    img: icons.Ono,
    text: 'Ono',
  },
  {
    img: icons.Aku,
    text: 'Aku',
  },
  {
    img: icons.Ulua,
    text: 'Ulua',
  },
  {
    img: icons.omilu,
    text: 'Omilu',
  },
  {
    img: icons.OnagaFish,
    text: 'Onaga',
  },
  {
    img: icons.OpakapakaFish,
    text: 'Opakapaka',
  },
  {
    img: icons.EhuFish,
    text: 'Ehu',
  },
  {
    img: icons.UkuFish,
    text: 'Uku',
  },
  {
    img: icons.OpeluFish,
    text: 'Opelu',
  },
  {
    img: icons.MenpachiFish,
    text: 'Menpachi',
  },
  {
    img: icons.NoFish,
    text: 'No Fish',
  },
  {
    img: icons.BluemarlinFish,
    text: 'Blue Marlin',
  },
  {
    img: icons.StripedMarlinFish,
    text: 'Striped Marlin',
  },
  {
    img: icons.SPEARFISH,
    text: 'Spearfish',
  },
  {
    img: icons.AhiFish,
    text: 'Ahi',
  },
];

let fishID = null;

const LeaderBoard = ({navigation}) => {
  const [fishingList, setfishingList] = useState([]);
  const [fishType, setfishType] = useState('');
  const [annual, setAnnual] = useState(false);
  const [monthly, setMonthly] = useState(false);
  const [dateWiseList, setDateWiseList] = useState([]);
  const [filterWiseList, setfilterWiseList] = useState([]);

  const [fishTypeId, setfishTypeId] = useState(null);
  const [fishId, setfishId] = useState(null);

  const [state, setState] = useState({
    refreshing: false,
  });

  const [selectedItem, setSelectedItem] = useState();

  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);
  console.log(auth, 'auth in leaderboard >>>>>>>>>>>>>>');
  console.log(app, 'app in leaderboard >>>>>>>>>>>>>>');

  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date());

  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const [show, setShow] = useState(false);
  const [showYearOnly, setShowYearOnly] = useState(false);

  const showPicker = useCallback(value => setShow(value), []);
  const month = date.getMonth();
  const year = date.getFullYear();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getleaderboardFishes();
    });
    return unsubscribe;
  }, [navigation]);

  function getleaderboardFishes() {
    let ob = {};
    ob.token = auth && auth?.userDetails?.access_token;
    dispatch(
      leaderboardfishlist(ob, cb => {
        if (cb) {
          console.log(cb, 'in fishing page>>>>>>>>>');
          if (cb?.data?.data) {
            let fishArr = cb?.data?.data?.leaderboardFishListing;

            fishArr.forEach(element => {
              element.imgUrl = cb && cb.data && cb.data.base_url;
            });
            setfishingList(fishArr);
            setfishTypeId(fishArr[0].id);
            getboardranking(fishArr[0].id);
          }
        }
      }),
    );
  }

  const getboardranking = fishid => {
    let obj = {};
    console.log(fishid, '???"""???""???"??"');
    obj.token = auth && auth?.userDetails?.access_token;
    obj.fish_id = fishid;

    dispatch(
      leaderboardranking(obj, cb => {
        console.log(cb, 'in leader card>>>>>>>>>>>>>>>>>>>');
        if (cb) {
          console.log(cb, 'callBack in ranking card card');
          if (cb?.data?.data) {
            let fishArr = cb?.data?.data?.leaderboardRankingAnually;
            fishArr.forEach(element => {
              element.imgUrl = cb && cb.data && cb.data.base_url;
            });
            setDateWiseList(fishArr);
          }
        }
      }),
    );
  };
  const getfilter = (m, y, f_ID) => {
    let obj = {};

    obj.token = auth && auth?.userDetails?.access_token;
    console.log(fishType, 'fishtype name with  id>>>>>>>>>>>>');
    console.log(fishTypeId, 'fishtype name with  id>>>>>>>>>>>>');

    // obj.fish_id = fishTypeId;
    // obj.year = selectedYear;
    // obj.month = selectedMonth;

    obj.fish_id = f_ID;
    obj.year = y;
    obj.month = m;

    console.log(obj, 'sending to api in monhly');

    dispatch(
      leaderboardfilter(obj, cb => {
        console.log(cb, 'in leader month yearcard>>>>>>>>>>>>>>>>>>>');
        if (cb) {
          console.log(cb, 'callBack in card');
          if (cb?.data?.data) {
            let fishArr = cb?.data?.data?.leaderboardRankingAnually;
            fishArr.forEach(element => {
              element.imgUrl = cb && cb.data && cb.data.base_url;
            });
            setDateWiseList(fishArr);
          }
        }
      }),
    );
  };

  const getfilterFromAnnual = selectedItem => {
    let obj = {};

    obj.token = auth && auth?.userDetails?.access_token;
    console.log(fishType, 'fishtype name with  id>>>>>>>>>>>>');
    console.log(fishTypeId, 'fishtype name with  id>>>>>>>>>>>>');

    obj.fish_id = fishTypeId;
    obj.year = selectedItem;

    console.log(obj, 'sending to api in getfilterFromAnnual ');

    dispatch(
      leaderboardfilter(obj, cb => {
        console.log(cb, 'in leader month yearcard>>>>>>>>>>>>>>>>>>>');
        if (cb) {
          console.log(cb, 'callBack in card Annual');
          if (cb?.data?.data) {
            let fishArr = cb?.data?.data?.leaderboardRankingAnually;
            fishArr.forEach(element => {
              element.imgUrl = cb && cb.data && cb.data.base_url;
            });
            setDateWiseList(fishArr);
          }
        }
      }),
    );
  };

  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || date;

      console.log(selectedDate, '>>>>?????');
      console.log(moment(selectedDate).format('L'), 'moment>>>>');
      let finalDate = moment(selectedDate).format('L');

      let valueAre = finalDate.split('/');
      console.log(valueAre, 'console value');
      if (annual == true) {
        setSelectedYear(valueAre[2]);
      } else {
        setSelectedMonth(valueAre[0]);
      }

      showPicker(false);
      setDate(selectedDate);
      _onRefresh(valueAre[0], valueAre[2], fishTypeId);
    },
    [date, showPicker],
  );

  const prevStateRef = useRef();
  useEffect(() => {
    prevStateRef.current = fishTypeId;
  });
  const prevState = prevStateRef.current;
  console.log(prevState, 'prevStateprevState');
  console.log(fishTypeId, 'prevStateprevStatefishTypeId');

  if (prevState != fishTypeId) {
    setTimeout(() => {
      getboardranking(fishTypeId);
      // getfilter(fishTypeId);
    }, 100);
  }

  function _onRefresh(m, y, f_id) {
    console.log(m, y, 'fishtypeif=d');
    // console.log(ID , '??::?:?"?:');
    setState({refreshing: true});
    getfilter(m, y, f_id);
  }
  function onRefresh() {
    setState({refreshing: true});
    getleaderboardFishes();
  }

  //View of flatlist
  const _renderView = ({item, index}) => (
    <View style={styles.listView} activeOpacity={0.8}>
      <TouchableOpacity style={styles.viewStyle}>
        <Image
          source={{
            uri: `${item.imgUrl}${item.image}`,
          }}
          resizeMode="contain"
          style={{
            height: layout.size.height / 10,
            width: layout.size.width / 1.5,
            shadowColor: colors.primary,
            borderRadius: 20,
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
          }}
        />
      </TouchableOpacity>
      <View style={styles.viewStyle}>
        <Text
          style={{
            top: 20,
            fontSize: moderateScale(20),
            fontFamily: fonts.bold,
          }}>
          {item.title}
        </Text>
      </View>
    </View>
  );
  const onViewRef = React.useRef(viewableItems => {
    console.log(viewableItems, 'on scrolling viewwwww>>>>>>>>>>>>>>>>');
    if (
      viewableItems &&
      viewableItems.viewableItems &&
      viewableItems.viewableItems.length > 0
    ) {
      if (viewableItems.viewableItems[0].item.title == 'No Fish') {
        console.log(
          viewableItems.viewableItems[0].item.title,
          'viewableItems.viewableItems[0].item.text',
        );
        setfishType(viewableItems.viewableItems[0].item.title);
      } else {
        setfishType(viewableItems.viewableItems[0].item.title);
        setfishTypeId(viewableItems.viewableItems[0].item.id);
      }
    }
  });

  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});

  //on press annual button
  const toggleAnnual = () => {
    let fishid = app && app.rankinglist[0] && app.rankinglist[0].Fish_id;
    console.log(fishid, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>in toogle annually');
    setAnnual(true);
    showPicker(false);
    setShowYearOnly(true);
    setMonthly(false);
  };

  const toggleMonthly = () => {
    let fishid = app && app.rankinglist[0] && app.rankinglist[0].Fish_id;
    console.log(fishid, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>in toogle monthly');
    setAnnual(false);
    setMonthly(true);
    setShowYearOnly(false);
    showPicker(true);
  };

  // const onValueChange = useCallback(
  //   (event, newDate) => {
  //     const selectedDate = newDate || date;

  //     setShowPicker(false);
  //     setDate(selectedDate);
  //   },
  //   [date, setShowPicker],
  // );

  const _renderDateView = ({item, index}) => (
    <TouchableOpacity style={styles.LCRPost}>
      <View style={styles.content1}>
        <View style={styles.rankingView}>
          <View style={styles.rankCircle}>
            <Text style={styles.rank}># {index + 1}</Text>
          </View>
          <Text style={styles.weight}>{item?.Weight} lb</Text>
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.fullname}>{item?.user?.full_name}</Text>
          <Text style={styles.time}>
            Caught on:
            <TimeAgo time={item?.LCR_Datetime} />
          </Text>
          <Text style={styles.time}>{item?.fish?.title}</Text>
        </View>

        <View style={styles.imgView}>
          <Image
            style={styles.image}
            source={{uri: `${item.imgUrl}${item.image}`}}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <ImageBackground
      source={icons.LeaderBoar1}
      style={{flex: 1, height: '100%'}}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <Header
          containerStyle={{
            backgroundColor: 'transparent',
            height: moderateScale(60),
          }}
          title={'Leader Board- Bigest Fish'}
          blackTitle
          titleStyle={{fontFamily: fonts.bold}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.black1,
          }}
          onLeftPress={() => {
            getleaderboardFishes();
            setAnnual(false);
            setMonthly(false);
            setShow(false);
            NavigationService.resetRoute(screenNames.HomeStack);
            // navigation.goBack();
          }}
        />

        <View style={{flex: 0.4}}>
          {/* {app.fishesArr == true ? (
            <Loader isLoading={app.loading} isAbsolute />
          ) : ( */}
          <FlatList
            extraData={fishingList}
            data={fishingList}
            renderItem={_renderView}
            keyExtractor={(item, index) => 'key' + index}
            horizontal
            pagingEnabled
            // ListEmptyComponent={() =>
            //   !fishingList.length ? (
            //     <Text style={styles.nomatch}>No Match found</Text>
            //   ) : null
            // }
            showsHorizontalScrollIndicator={false}
            indicatorActiveWidth={40}
            contentContainerStyle={{paddingHorizontal: 16}}
            viewabilityConfig={viewConfigRef.current}
            onViewableItemsChanged={onViewRef.current}
          />
          {/* )} */}
        </View>
        <View>
          <View style={{alignItems: 'center', backgroundColor: '#fff'}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={toggleAnnual}
                style={annual === true ? styles.clickedButton : styles.button}>
                <Text
                  style={
                    annual === true
                      ? styles.clickedButtonText
                      : styles.buttonText
                  }>
                  Annual
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={toggleMonthly}
                style={monthly === true ? styles.clickedButton : styles.button}>
                <Text
                  style={
                    monthly === true
                      ? styles.clickedButtonText
                      : styles.buttonText
                  }>
                  Monthly
                </Text>
              </TouchableOpacity>
            </View>
            {/* <Text style={{fontSize: 22, fontWeight: '600', marginBottom: 10}}>
              {monthly === true
                ? moment(date).format(MONTHLY_OUTPUT_FORMAT)
                : moment(date).format(YEAR_OUTPUT_FORMAT)}{' '}
              Leaderboard
            </Text> */}
          </View>
        </View>
        {/* BOTTOM THIRD */}
        <View style={{backgroundColor: '#2c385e', flex: 1}}>
          <FlatList
            extraData={fishTypeId}
            data={dateWiseList}
            renderItem={_renderDateView}
            keyExtractor={(item, index) => 'key' + index}
            ListHeaderComponent={() =>
              !dateWiseList.length ? (
                <Text style={styles.nomatch}>No data found</Text>
              ) : null
            }
            refreshControl={
              <RefreshControl
                // refreshing={state.refreshing}
                refreshing={app.loading}
                onRefresh={_onRefresh.bind(this)}
                title="Pull to refresh"
                tintColor={colors.white1}
                titleColor={colors.white1}
              />
            }
          />
          {show && (
            <View style={{position: 'absolute', bottom: windowHeight * 0.01}}>
              <MonthPicker
                onChange={onValueChange}
                value={date}
                minimumDate={new Date(2017, 0)}
                maximumDate={new Date()}
                locale="en"
                mode="full"
                autoTheme={false}
                okButton="Done"
              />
            </View>
          )}

          {showYearOnly && (
            <View
              style={{
                position: 'absolute',
                bottom: 0,
              }}>
              <Modal
                animationType={'none'}
                transparent={true}
                visible={showYearOnly}
                onRequestClose={() => {
                  setShowYearOnly(false);
                }}>
                <SafeAreaView>
                  <View
                    style={{
                      height: '60%',
                      margin: 20,
                      top: layout.size.height / 3 - 50,
                      justifyContent: 'center',
                      backgroundColor: colors.white1,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity onPress={() => setShowYearOnly(false)}>
                        <Text
                          style={{
                            marginLeft: 20,
                            bottom: 10,
                            fontFamily: fonts.bold,
                          }}>
                          Cancel
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          getfilterFromAnnual(selectedItem),
                            setShowYearOnly(false);
                        }}>
                        <Text
                          style={{
                            marginRight: 20,
                            bottom: 10,
                            fontFamily: fonts.bold,
                          }}>
                          Done
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <Picker
                      selectedValue={selectedItem}
                      onValueChange={(itemValue, itemIndex) =>
                        setSelectedItem(itemValue)
                      }
                      numberOfLines={1}
                      style={{
                        top: 10,
                      }}>
                      <Picker.Item label="2019" value="2019" />
                      <Picker.Item label="2020" value="2020" />
                      <Picker.Item label="2021" value="2021" />
                      <Picker.Item label="2022" value="2022" />
                      <Picker.Item label="2023" value="2023" />
                      <Picker.Item label="2024" value="2024" />
                      <Picker.Item label="2025" value="2025" />
                      <Picker.Item label="2026" value="2026" />
                      <Picker.Item label="2027" value="2027" />
                      <Picker.Item label="2028" value="2028" />
                    </Picker>
                  </View>
                </SafeAreaView>
              </Modal>
            </View>
          )}
        </View>
        <Loader isLoading={app.loading} isAbsolute />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LeaderBoard;
