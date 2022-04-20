import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  LayoutAnimation,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  UIManager,
  View,
  Modal,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {fonts, icons} from '../../../../../assets';
import {Button, Loader} from '../../../../components/common';
import Circular from '../../../../components/common/Circular';
import {Header} from '../../../../components/common/Header';
import TextInputComp from '../../../../components/common/TextInputComp';
import {strings} from '../../../../localization';
import {
  getMethod,
  getposition,
  getsigns,
  getWeather,
} from '../../../../store/actions';
import {colors} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';
import Accordian from './Accordian';
import Method from './Method';
import styles from './styles.js';

const ModalListComponent = props => {
  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);

  const [modalVisible, setModalVisible] = useState(false);

  console.log(auth, 'auth>>>>>>>>>>>>', app, 'app>>>>>>>>>>>>>>>>');
  console.log(props, 'props in modal>>>>>>>.');

  const dispatch = useDispatch();
  const {navigation, route} = props;
  const {value, name, getSelectedSigns, getEnteredSignVal} = route?.params;
  const {getSelectedposition, getEnteredPositionVal} = route?.params;
  const {
    getSelectedweather,
    getWeatherSendToApi,
    getSelectedBaits,
    getSelectedLures,
    getother,
    otherLure1,
    otherLure2,
    otherLure3,
  } = route?.params;

  const [weateherArr, setWeatherAr] = useState(app && app.weatherarray);
  const [methodarr, setmethodarr] = useState(app && app.methodarray);
  const [open, setopen] = useState(false);
  const [signs, setSignArr] = useState(app && app.signarray);
  const [position, setpositionarr] = useState(app && app.positionarray);
  const [text, settext] = useState('');

  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  const onPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setopen(!open);
  };
  console.log(value, 'valuevaluevalue in modal');
  console.log(name, 'namenamename in modal');

  ///toggeling
  const toggleCml = (index, val) => {
    console.log(index, val, 'to be console>>>>>>>');
    let array = [];
    if (val == 1) {
      array = signs.map(v => {
        const newItem = Object.assign({}, v);
        return newItem;
      });
      array[index].isSelected = !array[index].isSelected;
      setSignArr(array);
      return;
    } else if (val == 4) {
      array = position.map(v => {
        const newItem = Object.assign({}, v);
        newItem.isSelected = false;
        return newItem;
      });
      array[index].isSelected = !array[index].isSelected;
      setpositionarr(array);
    } else if (val == 3) {
      array = weateherArr.map(v => {
        const newItem = Object.assign({}, v);
        newItem.isSelected = false;
        return newItem;
      });
      array[index].isSelected = !array[index].isSelected;
      setWeatherAr(array);
    } else if (val == 2) {
      array = methodarr.map(v => {
        const newItem = Object.assign({}, v);
        newItem.isSelected = false;
        return newItem;
      });
      array[index].isSelected = !array[index].isSelected;
      setmethodarr(array);
    }
  };

  //getting slected baits from metohod
  const getBaitMethod = vals => {
    console.log(vals, 'vals in parant class');

    if (vals && vals.length > 0) {
      getSelectedBaits(vals);
    }
  };

  //getting slected lure from metohod
  const getLureMethod = vals => {
    console.log(vals, 'vals in parant class lure');

    if (vals && vals.length > 0) {
      getSelectedLures(vals);
    }
  };

  const getothermethod = vals => {
    console.log(vals, 'vals in parant class lure');

    if (vals && vals.length > 0) {
      getother(vals);
    }
  };

  //settings all others from method
  const setLure1 = vals => {
    console.log(vals, 'val at 145');
    otherLure1(vals);
  };

  const setLure2 = vals => {
    console.log(vals, 'val at 150');
    otherLure2(vals);
  };

  const setLure3 = vals => {
    console.log(vals, 'val at 155');
    otherLure3(vals);
  };

  const sendSelectedValues = () => {
    let arr = [];

    signs.forEach(element => {
      if (element.isSelected) {
        arr.push(element);
      }
    });
    getSelectedSigns(arr);
    if (value == 1) {
      getEnteredSignVal(text);
    }
    navigation.goBack();
  };

  const sendSelectposition = () => {
    let arr = [];

    position.forEach(element => {
      if (element.isSelected) {
        arr.push(element);
      }
    });
    getSelectedposition(arr);
    if (value == 4) {
      getEnteredPositionVal(text);
    }
    navigation.goBack();
  };

  useEffect(() => {
    console.log('in useEfectof modallistComponent >>>>>>>>>>>.');
    const unsubscribe = navigation.addListener('focus', () => {
      if (value == 1) {
        signFun();
      } else if (value == 4) {
        positionfun();
      } else if (value == 3) {
        weatherfun();
      } else if (value == 2) {
        methodfun();
      }
    });
    return unsubscribe;
  }, [navigation, signs]);

  function signFun() {
    let token = auth && auth?.userDetails?.access_token;
    dispatch(
      getsigns(token, cb => {
        if (cb) {
          console.log(cb, ';cb in sign');
          if (cb?.data?.data) {
            setSignArr(cb?.data?.data?.sign);
          }
        }
      }),
    );
  }
  function positionfun() {
    let token = auth && auth?.userDetails?.access_token;
    dispatch(
      getposition(token, cb => {
        if (cb) {
          console.log(cb, ';cb in poosition');
          if (cb?.data?.data) {
            setpositionarr(cb?.data?.data?.position);
          }
        }
      }),
    );
  }
  function weatherfun() {
    let token = auth && auth?.userDetails?.access_token;
    dispatch(
      getWeather(token, cb => {
        if (cb) {
          console.log(cb, 'callback weather>>>>>>>>>>');
          // if (cb?.data) {
          //   setWeatherAr(cb?.data);
          // }
          let newArr = cb && cb.data && cb.data.data && cb.data.data.weather;

          newArr.forEach((val, index) => {
            val.selected = false;
            let arr = val && val.weather_type;

            if (arr.length > 0) {
              arr.forEach((v, i) => {
                v.isSelected = false;
              });
            }
          });

          console.log(newArr, 'updated Arr is');
          if (cb?.data?.data) {
            setWeatherAr(cb?.data?.data?.weather);
          }
        }
      }),
    );
  }
  function methodfun() {
    let token = auth && auth?.userDetails?.access_token;
    dispatch(
      getMethod(token, cb => {
        if (cb) {
          console.log(cb, 'callback setmethodarr>>>>>>>>>>');
          if (cb?.data?.data) {
            setmethodarr(cb?.data?.data?.category);
          }
        }
      }),
    );
  }

  const _renderView = ({item, index}) => (
    <TouchableOpacity
      style={[
        styles.listItem,
        {
          backgroundColor: colors.white1,
        },
      ]}
      activeOpacity={0.8}
      onPress={() => {
        if (
          (item.name == 'Other' && value === 1) ||
          (item.name == 'Other' && value === 4)
        ) {
          console.log('open modal here/...');
          setModalVisible(true);
        } else {
          toggleCml(index, value);
        }
      }}>
      <Text>
        {item.name == 'Other' && text != '' ? (
          <Text>
            {item.name} ({text})
          </Text>
        ) : (
          item.name
        )}
      </Text>

      {item && item.isSelected ? (
        <Image
          source={icons.ic_done}
          style={{
            tintColor: colors.secondry,
          }}
        />
      ) : (
        <Image source={icons.ic_not_done} />
      )}
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={icons.ic_signup_bg}
      style={{flex: 1, height: '100%'}}>
      <SafeAreaView style={styles.content}>
        <Header
          containerStyle={{
            backgroundColor: colors.secondry,
            height: moderateScale(60),
          }}
          title={name}
          titleStyle={{fontFamily: fonts.bold}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />
        {value == 1 && (
          <FlatList
            extraData={signs}
            data={signs}
            showsVerticalScrollIndicator={false}
            renderItem={_renderView}
            contentInset={{bottom: 20}}
            keyExtractor={(item, index) => 'key' + index}
            ListEmptyComponent={() =>
              signs >= 0 && (
                <Text
                  style={{
                    alignSelf: 'center',
                    marginTop: 20,
                    color: colors.white1,
                    fontFamily: fonts.semiBold,
                  }}>
                  No Data Found
                </Text>
              )
            }
            ListFooterComponent={() => (
              <View
                style={{
                  marginTop: moderateScale(10),
                }}>
                <Button
                  style={styles.btnStyles}
                  label={strings.submit}
                  onPress={() => sendSelectedValues()}
                />
              </View>
            )}
          />
        )}

        {value == 2 && methodarr && methodarr.length > 0 ? (
          <Method
            navigation={navigation}
            methodarr={methodarr}
            baiArr={getBaitMethod}
            lureArr={getLureMethod}
            other={getothermethod}
            otherLure1={setLure1}
            otherLure2={setLure2}
            otherLure3={setLure3}
          />
        ) : null}
        {value == 3 && weateherArr && weateherArr.length > 0 ? (
          <Accordian
            weateherArr={weateherArr}
            navigation={navigation}
            getSelectedweather={getSelectedweather}
            getWeatherSendToApi={getWeatherSendToApi}
          />
        ) : null}

        {value == 4 && (
          <FlatList
            extraData={position}
            data={position}
            showsVerticalScrollIndicator={false}
            renderItem={_renderView}
            contentInset={{bottom: 20}}
            keyExtractor={(item, index) => 'key' + index}
            ListEmptyComponent={() =>
              position >= 0 && (
                <Text
                  style={{
                    alignSelf: 'center',
                    marginTop: 20,
                    color: colors.white1,
                    fontFamily: fonts.semiBold,
                  }}>
                  No data found
                </Text>
              )
            }
            ListFooterComponent={() => (
              <View
                style={{
                  marginTop: moderateScale(10),
                }}>
                <Button
                  style={styles.btnStyles}
                  label={strings.submit}
                  onPress={() => sendSelectposition()}
                />
              </View>
            )}
          />
        )}
        {value == 5 && <Circular />}

        <Modal
          animationType={'slide'}
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {}}>
          <SafeAreaView style={styles.modal}>
            <View
              style={[
                styles.backBtnView,
                {flexDirection: 'row', justifyContent: 'space-between'},
              ]}>
              <TouchableOpacity
                style={{width: 100}}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Image
                  source={icons.ic_back_white}
                  style={{
                    top: 15,
                    left: 10,
                    tintColor: colors.secondry,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.modalcontainer}>
              <TextInputComp
                value={text}
                placeholder={strings.enterother}
                labelTextStyle={styles.labelTextStyle}
                onChangeText={text => settext(text)}
              />
            </View>

            <Button
              style={styles.btnStyles}
              label={'Ok'}
              onPress={() => {
                setModalVisible(false);

                return;
                if (value == 1) {
                  getEnteredSignVal(text);
                }
                if (value == 4) {
                  getEnteredPositionVal(text);
                }
                navigation.goBack();
              }}
            />
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
      <Loader isLoading={app.loading} isAbsolute />
    </ImageBackground>
  );
};

export default ModalListComponent;
