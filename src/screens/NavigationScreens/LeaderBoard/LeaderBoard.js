import React, {useState , useCallback} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../assets';
import {Header} from '../../../components/common/Header';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';
import styles from './styles';

import MonthPicker from 'react-native-month-year-picker';
import moment from 'moment';
import LeaderboardCard from './leaderboardCard';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

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

const LeaderBoard = ({navigation}) => {
  const [fishingList, setfishingList] = useState(fishingArr);
  const [fishType, setFishType] = useState('Blue Marlin');
  const [carousel, setCarousel] = useState('');
  const [annual, setAnnual] = useState(true);
  const [monthly, setMonthly] = useState(false);
  const [lcrData, setLCRData] = useState([]);
  // const [date, setDate] = useState(new Date());
  // const [showPicker, setShowPicker] = useState(false);

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const showPicker = useCallback((value) => setShow(value), []);
  const [ lcrList, imgModalVisible, setImgModalVisible, modalImg, setModalImg ] = useState('')

  const month = date.getMonth();
  const year = date.getFullYear();
  //View of flatlist
  const _renderView = ({item, index}) => (
    <View style={styles.listView} activeOpacity={0.8}>
      <TouchableOpacity style={styles.viewStyle}>
        <Image
          source={item.img}
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

            elevation: 10,
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
          {item.text}
        </Text>
      </View>
    </View>
  );

  console.log(
    'lcrData.length',
    lcrData.length,
    'lcrList.length',
    lcrList.length,
  );

  // useFocusEffect(
  //   React.useCallback(() => {
  //     let active = true;
  //     (async () => {
  //       try {
  //         if (active) {
  //           const ref = firestore()
  //             .collection('LCRPosts')
  //             .orderBy('postedAt', 'desc');
  //           return ref.onSnapshot(querySnapshot => {
  //             const lcrs = [];
  //             querySnapshot.forEach(doc => {
  //               lcrs.push({
  //                 id: doc.id,
  //                 ...doc.data(),
  //               });
  //             });

  //             const lcrListArr = [];
  //             lcrs.map((lcr, index) => {
  //               // console.log('lcr', lcr)

  //               const {postedAt} = lcr;
  //               const {createdAt} = lcr.requiredInfo;
  //               const createdDate = createdAt
  //                 ? createdAt.toDate()
  //                 : postedAt.toDate();
  //               const typeOfFish = lcr.requiredInfo.fishType;
  //               const lcrMonth = createdDate.getMonth();
  //               const lcrYear = createdDate.getFullYear();

  //               // console.log('createdAt', createdAt)
  //               // console.log('postedAt', postedAt)
  //               // console.log('createdDate', createdDate)
  //               // console.log('month', month, typeof month)
  //               // console.log('lcrMonth', lcrMonth, typeof lcrMonth)
  //               // console.log('year', year)
  //               // console.log('lcrYear', lcrYear)

  //               // console.log('typeOfFish', typeOfFish)
  //               // console.log('fishType', fishType)

  //               if (typeOfFish.includes(fishType)) {
  //                 // console.log(typeOfFish, 'includes', fishType)
  //                 // console.log('year', year, typeof year)
  //                 // console.log('lcrYear', lcrYear, typeof lcrYear)
  //                 // console.log('annual:', annual, 'monthly:', monthly)
  //                 if (annual && !monthly) {
  //                   // console.log('year', year, typeof year)
  //                   // console.log('lcrYear', lcrYear, typeof lcrYear)
  //                   // console.log('annual:', annual, 'monthly:', monthly)
  //                   if (year === lcrYear) {
  //                     lcrListArr.push({...lcr});
  //                     // console.log(typeOfFish, 'includes', fishType)
  //                     // console.log('annual:', annual, 'monthly:', monthly)
  //                     // console.log(year, '===', lcrYear)
  //                   }
  //                   // 	// console.log('annual')
  //                 } else {
  //                   // console.log(typeOfFish, 'includes', fishType)
  //                   // console.log('annual:', annual, 'monthly:', monthly)
  //                   // if (year === lcrYear) {
  //                   // 	console.log(typeOfFish, 'includes', fishType)
  //                   // 	console.log('annual:', annual, 'monthly:', monthly)
  //                   // 	console.log(year, '===', lcrYear)
  //                   // 	console.log('month:', month, 'lcrMonth:', lcrMonth)

  //                   // 	// if (month === lcrMonth) {
  //                   // 	// 	console.log(month, '===', lcrMonth)
  //                   // 	// }
  //                   // }
  //                   if (month === lcrMonth && year === lcrYear) {
  //                     lcrListArr.push({...lcr});
  //                     // console.log(month, '===', lcrMonth, '&&', year, '===', lcrYear)
  //                   }
  //                   // 	// console.log('monthly')
  //                 }
  //               }
  //             });

  //             lcrListArr.sort((a, b) =>
  //               parseFloat(a.requiredInfo.fishWeight) >
  //               parseFloat(b.requiredInfo.fishWeight)
  //                 ? -1
  //                 : 1,
  //             );

  //             // console.log('lcrListArr', lcrListArr)

  //             setLCRData(lcrListArr);
  //             // setLCRData(lcrs)
  //           });
  //         }
  //       } catch (e) {
  //         console.log('this is an error', e);
  //       }
  //     })();

  //     return () => {
  //       active = false;
  //     };
  //   }, [annual, monthly, fishType, month, year]),
  // );

  // useEffect(() => {
  // 	const lcrListArr = []
  // 	lcrList.map((lcr, index) => {
  // 		console.log('lcr', lcr)

  // 		const { postedAt } = lcr
  // 		const { createdAt } = lcr.requiredInfo
  // 		const createdDate = createdAt ? createdAt.toDate() : postedAt.toDate()
  // 		const typeOfFish = lcr.requiredInfo.fishType
  // 		const month = date.getMonth()
  // 		const lcrMonth = createdDate.getMonth()
  // 		const year = date.getFullYear()
  // 		const lcrYear = createdDate.getFullYear()

  // 		if (typeOfFish.includes(fishType)) {
  // 			if (annual && !monthly) {
  // 				if (year === lcrYear) {
  // 					lcrListArr.push({ ...lcr })
  // 				}
  // 			} else if (!annual && monthly) {
  // 				if (month === lcrMonth && year === lcrYear) {
  // 					lcrListArr.push({ ...lcr })
  // 				}
  // 			}
  // 		}
  // 	})

  // 	lcrListArr.sort((a, b) => (parseFloat(a.requiredInfo.fishWeight) > parseFloat(b.requiredInfo.fishWeight) ? -1 : 1))
  // 	setLCRData(lcrListArr)
  // }, [lcrList, fishType, annual, monthly, date])

  const toggleAnnual = () => {
    setAnnual(true);
    setMonthly(false);
    showPicker(true);
  };

  const toggleMonthly = () => {
    setAnnual(false);
    setMonthly(true);
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
  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || date;

      showPicker(false);
      setDate(selectedDate);
    },
    [date, showPicker],
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
            navigation.goBack();
          }}
        />
        <View style={{flex: 0.38 }}>
          <FlatList
            extraData={fishingList}
            data={fishingList}
            renderItem={_renderView}
            keyExtractor={(item, index) => 'key' + index}
            horizontal
            pagingEnabled={true}
            ListEmptyComponent={() =>
              !fishingList.length ? (
                <Text style={styles.nomatch}>No Match found</Text>
              ) : null
            }
            showsHorizontalScrollIndicator={false}
            indicatorActiveWidth={40}
            contentContainerStyle={{paddingHorizontal: 16}}

          />
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
            <Text style={{fontSize: 22, fontWeight: '600', marginBottom: 10}}>
              {monthly === true
                ? moment(date).format(MONTHLY_OUTPUT_FORMAT)
                : moment(date).format(YEAR_OUTPUT_FORMAT)}{' '}
              Leaderboard
            </Text>
          </View>
        </View>
        {/* BOTTOM THIRD */}
        <View style={{backgroundColor: '#2c385e', flex: 1}}>
          {/* {lcrData.length !== 0 && lcrList.length !== 0 ? (
            <FlatList
              data={lcrData}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <LeaderboardCard post={item} rank={index + 1} />
              )}
              style={{marginTop: 5}}
            />
          ) : lcrData.length === 0 && lcrList.length !== 0 ? (
            <View
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 24,
                  color: '#fafafa',
                  textAlign: 'center',
                  marginBottom: windowHeight * 0.5,
                  paddingHorizontal: windowWidth * 0.1,
                }}>
                No catches for this fish type and time period
              </Text>
            </View>
          ) : (
            lcrData.length === 0 &&
            lcrList.length === 0
            (
                <ActivityIndicator
                  size="large"
                  style={{marginTop: windowHeight * 0.2}}
                />,
              )
          )} */}
          <LeaderboardCard 
          navigation={navigation}/>
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
          ) }
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LeaderBoard;
