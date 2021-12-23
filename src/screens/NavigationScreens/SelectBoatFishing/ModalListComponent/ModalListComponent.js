import React, { useEffect, useState } from 'react';
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
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import { fonts, icons } from '../../../../../assets';
import { Button, Loader } from '../../../../components/common';
import Circular from '../../../../components/common/Circular';
import { Header } from '../../../../components/common/Header';
import { strings } from '../../../../localization';
import {
  getMethod,
  getposition,
  getsigns,
  getWeather,
} from '../../../../store/actions';
import { colors } from '../../../../utilities/constants';
import Accordian from './Accordian';
import Method from './Method';
import styles from './styles.js';

const ModalListComponent = props => {
  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);

  console.log(auth, 'auth>>>>>>>>>>>>', app, 'app>>>>>>>>>>>>>>>>');
  console.log(props, 'props in modal>>>>>>>.');

  const dispatch = useDispatch();
  const { navigation, route } = props;
  const { value, name, getSelectedSigns } = route?.params;
  const { getSelectedposition } = route?.params;
  const { getSelectedweather } = route?.params;


  const [weateherArr, setWeatherAr] = useState(app && app.weatherarray);
  const [methodarr, setmethodarr] = useState([]);

  const [open, setopen] = useState(false);
  const [signs, setSignArr] = useState(app && app.signarray);
  const [position, setpositionarr] = useState(app && app.positionarray);

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
    }
  };

  const sendSelectedValues = () => {
    let arr = [];

    signs.forEach(element => {
      if (element.isSelected) {
        arr.push(element);
      }
    });
    getSelectedSigns(arr);
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
                v.isSelected = false
              })
            }
          })

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

  const _renderView = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.listItem,
        {
          backgroundColor: colors.white1,
        },
      ]}
      activeOpacity={0.8}
      onPress={() => toggleCml(index, value)}>
      <Text>{item.name}</Text>

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
      style={{ flex: 1, height: '100%' }}>
      <SafeAreaView style={styles.content}>
        <Header
          containerStyle={{
            backgroundColor: colors.secondry,
            height: moderateScale(60),
          }}
          title={name}
          titleStyle={{ fontFamily: fonts.bold }}
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
            contentInset={{ bottom: 20 }}
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

        {value == 2 && <Method navigation={navigation} />}
        {value == 3 && weateherArr && weateherArr.length > 0 ? (
          <Accordian weateherArr={weateherArr} navigation={navigation} getSelectedweather={getSelectedweather} />
        ) : null}

        {value == 4 && (
          <FlatList
            extraData={position}
            data={position}
            showsVerticalScrollIndicator={false}
            renderItem={_renderView}
            contentInset={{ bottom: 20 }}
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
      </SafeAreaView>
      <Loader isLoading={app.loading} isAbsolute />
    </ImageBackground>
  );
};

export default ModalListComponent;
