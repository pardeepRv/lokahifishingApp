import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState, useRef} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  Keyboard,
  Modal,
  Platform,
  requireNativeComponent,
  SafeAreaView,
  ScrollView,
  Switch,
  NativeModules,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  UIManager,
  findNodeHandle,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import GetLocation from 'react-native-get-location';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MapView, {PROVIDER_DEFAULT, PROVIDER_GOOGLE} from 'react-native-maps';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {fonts, icons} from '../../../../../assets';
import {Loader} from '../../../../components/common';
import {Header} from '../../../../components/common/Header';
import TextInputComp from '../../../../components/common/TextInputComp';
import {strings} from '../../../../localization';
import {savelcrreport} from '../../../../store/actions';
import * as NavigationService from '../../../../store/NavigationService';
import {
  actionTypes,
  colors,
  screenNames,
} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';
import styles from './styles';
import {MyViewManager} from '../../../../components/common/MyViewManager';
import store from '../../../../store';

const createFragment = viewId =>
  UIManager.dispatchViewManagerCommand(
    viewId,
    // we are calling the 'create' command
    UIManager.MyViewManager.Commands.create.toString(),
    [viewId],
  );

const {ActivityStarterModule} = NativeModules;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ApplmapNoaa = requireNativeComponent('Switch');
const FishData = ({navigation, route}) => {
  const ref = useRef(null);
  const {previousScreen} = route && route.params;
  const [modalVisible1, setModalVisible1] = useState(false);
  const [email, setEmail] = useState('');
  console.log('email :>> ', email);
  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);
  const isFocused = useIsFocused();
  console.log(auth, 'auth fish page');

  const dispatch = useDispatch();

  const [state, setState] = useState({
    isGPS: '',
    title: '',
    isPrivate: '',
  });
  const {isGPS, title, isPrivate} = state;

  const _onChangeText = key => val => {
    setState({...state, [key]: val});
  };

  const setText = t => {
    console.log(t, 'hvuvdw');
    setEmail(t);
  };

  const [price, setPrice] = useState(0);

  const [additionalNotes, setAdditionalNotes] = useState('');
  const [degrees, setDegrees] = useState('');
  const [miles, setMiles] = useState('');
  const [harbor, setHarbor] = useState('');
  const [open, setOpen] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const [location, setLocation] = useState({
    latitude: '',
    longitude: '',
  });
  const [harborItems, setHarborItems] = useState([
    {label: 'Hawaii Kai', value: 'Hawaii Kai'},
    {label: 'Keehi', value: 'Keehi'},
    {label: 'Kaneohe', value: 'Kaneohe'},
    {label: 'Haleiwa', value: 'Haleiwa'},
    {label: 'Waianae', value: 'Waianae'},
    {label: 'Other', value: 'Other'},
  ]);

  const [selectedSignArr, setselectedSignArr] = useState([]);
  const [enteredOtherSign, setOtherSign] = useState('');
  const [enteredOtherPosition, setOtherPosition] = useState('');

  const [positionarr, setpositionarr] = useState([]);
  const [weateherArr, setWeatherAr] = useState([]);
  const [baitUI, setBaitForUI] = useState([]);
  const [lureUI, setlureForUI] = useState([]);
  const [otherUI, setOtherUI] = useState('');

  // methods other
  const [otherLure1, setOtherLure1] = useState('');
  const [otherLure2, setOtherLure2] = useState('');
  const [otherLure3, setOtherLure3] = useState('');

  console.log(otherLure1, 'otherLure1121');
  console.log(otherLure2, 'otherLure2otherLure212121');
  console.log(otherLure3, 'otherLure3otherLure3222');

  const [weateherArrNeedsToSendApi, setWeateherArrNeedsToSendApi] = useState(
    [],
  );

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  console.log(harbor, 'harborharborharbor');
  useEffect(() => {
    if (Platform.OS === 'android') {
      const viewId = findNodeHandle(ref.current);
      createFragment(viewId);
    } else {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        //I'm not sure what is best for the timeout to be set as. Some more testing could be beneficial
        timeout: 15000,
      })
        .then(location => {
          console.log('getting locationn >>>>>>>>>>>>>', location);

          setLocation(location);
        })
        .catch(error => {
          const {code, message} = error;
          console.log(code, message);
        });
    }
    load();

    //   if(isFocused){
    //     setModalVisible1(true);
    // }
    // I set this so that the region could update as we move the map around and it seems to break the map. Setting the actual <MapView> region to this seems to work but then the pin only stays at the users current location. Maybe the map will be good if they make the post at the spot of location and use the other method if it is created later.
    // }, [isFocused]);
  }, []);

  const setHarborVal = v => {
    console.log(v, ' on selcet');
    //  setModalVisible1(true)
    setHarbor(v);
  };
  const load = async () => {
    AsyncStorage.getItem('FirstTime').then(result => {
      console.log(result, 'geeting from local');
      if (result == null) {
        alert(
          'Make sure your mobile battery is sufficient Since map is downloading.It will take 20 to 30 minutes',
        );
      }
    });
    await AsyncStorage.setItem('FirstTime', JSON.stringify({key: 1}));
  };

  const [region, setRegion] = useState({
    latitude: location?.latitude,
    longitude: location?.longitude,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  });

  const onChangeLatitude = text => {
    console.log(text, 'coming in thisss');
    setLocation({...location, latitude: text === '-' ? 1 : parseFloat(text)});
  };

  const onChangeLongitude = text => {
    setLocation({
      ...location,
      longitude: text === '-' ? 1 : parseFloat(text),
    });
  };

  const getEnteredSignVal = val => {
    console.log(val, 'coming in val190');
    setOtherSign(val);
  };

  const getEnteredPositionVal = val => {
    console.log(val, 'coming in val195');
    setOtherPosition(val);
  };

  const getSelectedSigns = val => {
    console.log('coming in parent>>>>>>', val);
    if (val && val.length > 0) {
      setselectedSignArr(val);
    }
  };
  const getSelectedposition = val => {
    console.log('coming in parent>>>>>>', val);
    if (val && val.length > 0) {
      setpositionarr(val);
    }
  };
  const getSelectedweather = val => {
    console.log('coming in parent selected values>>>>>>', val);
    if (val && val.length > 0) {
      setWeatherAr(val);
    }
  };

  const getWeatherSendToApi = data => {
    console.log('data getWeatherSendToApi', data);
    if (data && data.length > 0) {
      setWeateherArrNeedsToSendApi(data);
    }
  };

  const getSelectedBaits = data => {
    console.log('data getSelectedBaits me', data);
    if (data && data.length > 0) {
      setBaitForUI(data);
    }
  };

  const getSelectedLures = data => {
    console.log('data getSelectedLures me', data);
    if (data && data.length > 0) {
      setlureForUI(data);
    }
  };
  const getother = data => {
    console.log('data getother me', data);

    setOtherUI(data);
  };

  //set All other selected in method list
  const setSelectedLure1 = data => {
    setOtherLure1(data);
  };
  const setSelectedLure2 = data => {
    setOtherLure2(data);
  };
  const setSelectedLure3 = data => {
    setOtherLure3(data);
  };

  const getHrs = v => {
    console.log(v, ' in parnt hrs');
    if (v > 0) {
      setPrice(v);
    }
  };

  //hit api
  const _postCatchReport = () => {
    let updteArrForMethod = [];
    let selectedSigns = [];
    let selectedPosition = [];
    let user_os = '';

    // merging 2 arrays for method start
    console.log(baitUI, lureUI, 'dataaaaa');
    let methodarray = [...baitUI, ...lureUI];
    console.log('methdoarray :>> ', methodarray);

    jsonObject = methodarray.map(JSON.stringify);

    console.log(jsonObject);
    uniqueSet = new Set(jsonObject);
    uniqueArray = Array.from(uniqueSet).map(JSON.parse);

    uniqueArray.forEach(ev => {
      console.log(ev, 'ev to be console');
      updteArrForMethod.push({ids: [ev.category_id, ev.subcategory_id, ev.id]});
    });
    console.log(updteArrForMethod, 'updteArrForMethodupdteArrForMethod');

    // merging 2 arrays for method end
    console.log(previousScreen, 'previousScreen data');

    if (selectedSignArr && selectedSignArr.length > 0) {
      console.log(selectedSignArr, 'selectedSignArr');
      selectedSignArr.forEach(element => {
        selectedSigns.push(element.id);
      });
    }

    if (positionarr && positionarr.length > 0) {
      console.log(positionarr, 'positionarr');
      positionarr.forEach(element => {
        selectedPosition.push(element.id);
      });
    }

    console.log(isEnabled, 'isEnabled');

    console.log(selectedSigns, 'selectedSigns');
    console.log(selectedPosition, 'selectedPosition');
    // console.log(price, 'efforts');
    console.log(
      location && location.latitude ? location.latitude : 0.0,
      'latitude',
    );
    console.log(
      location && location.longitude ? location.longitude : 0.0,
      'longitude',
    );

    console.log(additionalNotes, 'additionalNotes');
    // is_private
    // user_os

    if (Platform.OS == 'ios') {
      user_os = 'ios';
    }
    if (Platform.OS == 'android') {
      user_os = 'android';
    }
    let obj = {};
    obj.ids = [47, 1];

    let formData = new FormData();

    formData.append('fish_id', previousScreen && previousScreen.selectedFish);
    formData.append('image', previousScreen && previousScreen.fishphoto);
    formData.append('fish_weight', previousScreen && previousScreen.weight);
    formData.append('lcr_date_time', previousScreen && previousScreen.date);
    formData.append('effort', previousScreen && previousScreen.efforts);
    formData.append(
      'lat',
      location && location.latitude ? location.latitude : 0.0,
    );
    formData.append(
      'long',
      location && location.longitude ? location.longitude : 0.0,
    );
    formData.append('description', additionalNotes);

    for (let i = 0; i < selectedSigns.length; i++) {
      console.log(selectedSigns[i], 'selectedSigns[i]');
      let index = selectedSigns[i];
      formData.append(`sign_id[${i}]`, index);
    }

    for (let i = 0; i < selectedPosition.length; i++) {
      console.log(selectedPosition[i], 'selectedPosition[i]');
      let index = selectedPosition[i];
      formData.append(`position_id[${i}]`, index);
    }

    formData.append('method_id', JSON.stringify(updteArrForMethod));
    formData.append('weather_id', JSON.stringify(weateherArrNeedsToSendApi));

    formData.append('user_os', user_os);
    formData.append('is_private', isEnabled);
    formData.append('other_method', otherUI);

    formData.append('sign_alt', enteredOtherSign);
    formData.append('position_alt', enteredOtherPosition);
    formData.append(
      'method_alt[0]',
      JSON.stringify([{lure_maker_other: otherLure2}]),
    );
    formData.append(
      'method_alt[1]',
      JSON.stringify([{Color_other: otherLure3}]),
    );
    formData.append(
      'method_alt[2]',
      JSON.stringify([{Type_other: otherLure1}]),
    );

    console.log(formData, 'consoling formadta');
    let token = auth && auth.userDetails.access_token;

    dispatch(savelcrreport(formData, token));

    return;
    NavigationService.resetRoute(screenNames.HomeStack);
  };

  return (
    <ImageBackground
      source={icons.LeaderBoard1}
      style={{flex: 1, height: '100%'}}>
      <Header
        containerStyle={{
          backgroundColor: 'transparent',
          height: moderateScale(60),
        }}
        blackTitle
        title={'Catch Report'}
        titleStyle={{fontFamily: fonts.bold}}
        leftIconSource={icons.ic_back_white}
        leftButtonStyle={{
          tintColor: colors.black1,
        }}
        onLeftPress={() => {
          navigation.goBack();
        }}
        onRightPress={_postCatchReport}
        rightIconSource={icons.post1}
        rightIconStyle={{
          height: 35,
          width: 35,
          tintColor: colors.green1,
        }}
      />

      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView
          nestedScrollEnabled
          style={{flex: 1}}
          onScroll={e =>
            console.log(e.nativeEvent.contentOffset.y, 'scroll pos')
          }>
          <KeyboardAwareScrollView
            nestedScrollEnabled
            enableOnAndroid={true}
            style={styles.subContainer}
            contentContainerStyle={styles.subContentContainer}
            keyboardShouldPersistTaps={'always'}
            showsVerticalScrollIndicator={false}>
            <View style={[styles.textSection, {justifyContent: 'center'}]}>
              <Text>Info below is optional & will be private to user only</Text>
            </View>
            <View
              style={[
                styles.textSection,
                {
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  paddingVertical: 5,
                },
              ]}>
              <Text>Post Catch Report to Photo Sharing?</Text>
              <Switch
                trackColor={{false: '#767577', true: '#34C759'}}
                thumbColor={'#f4f3f4'}
                ios_backgroundColor="#767577"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <TouchableOpacity
              style={styles.textSection}
              onPress={() =>
                navigation.navigate('ModalListComponent', {
                  value: 1,
                  name: 'Sign',
                  getSelectedSigns: getSelectedSigns,
                  getEnteredSignVal: getEnteredSignVal,
                })
              }>
              <Text
                style={styles.title}
                onPress={() =>
                  navigation.navigate('ModalListComponent', {
                    value: 1,
                    name: 'Sign',
                    getSelectedSigns: getSelectedSigns,
                    getEnteredSignVal: getEnteredSignVal,
                  })
                }>
                Sign(optional)
              </Text>
              <View style={{flex: 0.5}}>
                {
                  enteredOtherSign != '' && (
                    <Text
                      style={{
                        fontFamily: fonts.semiBold,
                      }}>
                      {enteredOtherSign}
                    </Text>
                  )
                  // : null
                  // <Text
                  //   style={{
                  //     fontFamily: fonts.semiBold,
                  //   }}>
                  //   Select sign
                  // </Text>
                }
                {selectedSignArr &&
                  selectedSignArr.length > 0 &&
                  selectedSignArr.map((val, index) => {
                    return (
                      <Text
                        key={index}
                        style={{
                          fontFamily: fonts.semiBold,
                        }}>
                        {val.name}
                      </Text>
                    );
                  })}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ModalListComponent', {
                  value: 2,
                  name: 'Method',
                  getSelectedBaits: getSelectedBaits,
                  getSelectedLures: getSelectedLures,
                  getother: getother,
                  otherLure1: setSelectedLure1,
                  otherLure2: setSelectedLure2,
                  otherLure3: setSelectedLure3,
                })
              }
              style={styles.textSection}>
              <Text
                style={styles.title}
                // onPress={() =>
                //   navigation.navigate('ModalListComponent', {
                //     value: 2,
                //     name: 'Method',
                //     getSelectedBaits: getSelectedBaits,
                //     getSelectedLures: getSelectedLures,
                //     getother: getother,
                //   })
                // }
              >
                Method(optional)
              </Text>
              <View style={{flex: 0.5}}>
                {otherLure1 != '' && (
                  <Text
                    style={{
                      fontFamily: fonts.semiBold,
                    }}>
                    {otherLure1}
                  </Text>
                )}
                {otherLure2 != '' && (
                  <Text
                    style={{
                      fontFamily: fonts.semiBold,
                    }}>
                    {otherLure2}
                  </Text>
                )}
                {otherLure3 != '' && (
                  <Text
                    style={{
                      fontFamily: fonts.semiBold,
                    }}>
                    {otherLure3}
                  </Text>
                )}

                {baitUI.map((val, index) => {
                  console.log('val :>> ', val);
                  return (
                    <Text
                      key={index}
                      style={{
                        fontFamily: fonts.semiBold,
                      }}>
                      {val.method_name}
                    </Text>
                  );
                })}
                {lureUI.map((val, index) => {
                  return (
                    <Text
                      key={index}
                      style={{
                        fontFamily: fonts.semiBold,
                      }}>
                      {val.method_name}
                    </Text>
                  );
                })}
                {otherUI ? (
                  <Text
                    style={{
                      fontFamily: fonts.semiBold,
                    }}>
                    {otherUI}
                  </Text>
                ) : null}
                {lureUI.length == 0 && baitUI.length == 0 && otherUI == 0 ? (
                  <Text
                    style={{
                      fontFamily: fonts.semiBold,
                    }}>
                    Select Method
                  </Text>
                ) : null}
              </View>
            </TouchableOpacity>
            <View style={styles.textSection}>
              <Text
                style={styles.title}
                onPress={() =>
                  navigation.navigate('ModalListComponent', {
                    value: 3,
                    name: 'Weather',
                    getSelectedweather: getSelectedweather,
                    getWeatherSendToApi: getWeatherSendToApi,
                  })
                }>
                Weather(optional)
              </Text>
              <View style={{flex: 0.5}}>
                {weateherArr && weateherArr.length > 0 ? (
                  weateherArr.map((val, index) => {
                    return (
                      <Text
                        key={index}
                        style={{
                          fontFamily: fonts.semiBold,
                        }}>
                        {/* {val.weather_type} : */}
                        {val.value}
                      </Text>
                    );
                  })
                ) : (
                  <Text
                    style={{
                      fontFamily: fonts.semiBold,
                    }}
                    onPress={() =>
                      navigation.navigate('ModalListComponent', {
                        value: 3,
                        name: 'weather',
                        getSelectedweather: getSelectedweather,
                        getWeatherSendToApi: getWeatherSendToApi,
                      })
                    }>
                    Select weather
                  </Text>
                )}
              </View>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ModalListComponent', {
                  value: 4,
                  name: 'Position',
                  getSelectedposition: getSelectedposition,
                  getEnteredPositionVal: getEnteredPositionVal,
                })
              }
              style={styles.textSection}>
              <Text style={styles.title}>Position(optional)</Text>

              <View style={{flex: 0.5}}>
                {enteredOtherPosition != '' ? (
                  <Text
                    style={{
                      fontFamily: fonts.semiBold,
                    }}>
                    {enteredOtherPosition}
                  </Text>
                ) : null}

                {
                  positionarr && positionarr.length > 0
                    ? positionarr.map((val, index) => {
                        return (
                          <Text
                            key={index}
                            style={{
                              fontFamily: fonts.semiBold,
                            }}>
                            {val.name}
                          </Text>
                        );
                      })
                    : null
                  // <Text
                  //   style={{
                  //     fontFamily: fonts.semiBold,
                  //   }}
                  //   onPress={() =>
                  //     navigation.navigate('ModalListComponent', {
                  //       value: 4,
                  //       name: 'position',
                  //       getSelectedposition: getSelectedposition,
                  //       getEnteredPositionVal: getEnteredPositionVal,
                  //     })
                  //   }>
                  //   Select position
                  // </Text>
                }
              </View>
            </TouchableOpacity>
            {/* <View style={styles.textSection}>
              <Text
                style={styles.title}
                onPress={() =>
                  navigation.navigate('Circular', {
                    value: 5,
                    getHrs: getHrs,
                  })
                }>
                Efforts
              </Text>
              {price > 0 && (
                <Text
                  onPress={() =>
                    navigation.navigate('Circular', {
                      value: 5,
                      getHrs: getHrs,
                    })
                  }
                  style={styles.title}>
                  {price} hrs.
                </Text>
              )}
            </View> */}

            <View style={styles.textSection}>
              <Text style={styles.title}>Location</Text>
            </View>
            <View style={styles.mapContainer}>
              {Platform.OS === 'ios' ? (
                <ApplmapNoaa
                  style={{
                    height: 325,
                    width: windowWidth,
                    backgroundColor: 'black',
                  }}
                />
              ) : (
                <MyViewManager
                  style={{
                    // converts dpi to px, provide desired height
                    height: PixelRatio.getPixelSizeForLayoutSize(400),
                    // converts dpi to px, provide desired width
                    width: PixelRatio.getPixelSizeForLayoutSize(430),
                  }}
                  ref={ref}
                />
              )}
            </View>

            <Text style={styles.or}>OR</Text>
            <View style={{zIndex: 1, paddingHorizontal: 10}}>
              <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <TextInput
                  returnKeyType="done"
                  blurOnSubmit={true}
                  onSubmitEditing={() => {
                    Keyboard.dismiss();
                  }}
                  style={styles.degreesTextInput}
                  placeholder="#"
                  onChangeText={text => setDegrees(text)}
                  keyboardType="decimal-pad"
                />
                <Text style={{fontSize: 16, marginRight: 5, paddingBottom: 2}}>
                  {' '}
                  degree(s) and{' '}
                </Text>
                <TextInput
                  returnKeyType="done"
                  blurOnSubmit={true}
                  onSubmitEditing={() => {
                    Keyboard.dismiss();
                  }}
                  style={styles.degreesTextInput}
                  placeholder="#"
                  onChangeText={text => setMiles(text)}
                  keyboardType="decimal-pad"
                />
                <Text style={{fontSize: 16, paddingBottom: 2}}>
                  {' '}
                  miles from:{' '}
                </Text>
              </View>
              <View
                style={{
                  zIndex: 1,
                  height: open ? 300 : 100,
                }}>
                <DropDownPicker
                  // nestedScrollEnabled
                  style={{backgroundColor: '#fafafa'}}
                  theme="LIGHT"
                  containerStyle={{
                    width: '50%',
                    marginVertical: 5,
                    flex: 1,
                  }}
                  labelStyle={{
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}
                  textStyle={{
                    fontSize: 16,
                  }}
                  dropDownContainerStyle={{
                    backgroundColor: '#fafafa',
                  }}
                  zIndex={1000}
                  open={open}
                  value={harbor}
                  items={harborItems}
                  setOpen={setOpen}
                  onChangeValue={value => {
                    console.log(value, 'onChangeValue');
                    if (value == 'Other') {
                      setModalVisible1(true);
                    } else {
                      setModalVisible1(false);
                    }
                  }}
                  setValue={setHarbor}
                  setItems={setHarborItems}
                  placeholder={'Choose Harbor'}
                  dropDownDirection="DEFAULT"
                  listMode="SCROLLVIEW"
                />
              </View>
            </View>
            <View
              style={{
                height: layout.size.height / 3,
                // bottom:20,
                width: layout.size.width,
                margin: 0,
              }}>
              <TextInput
                placeholder="Add any additional notes you would like"
                autoCapitalize="sentences"
                style={{
                  height: windowHeight * 0.35,
                  padding: 9,
                  borderTopWidth: 1,
                  fontSize: 16,
                  borderColor: 'lightgray',
                  top: 5,
                  paddingHorizontal: 10,
                }}
                returnKeyType="done"
                multiline={true}
                blurOnSubmit={true}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                value={additionalNotes}
                onChangeText={text => setAdditionalNotes(text)}
              />
            </View>
          </KeyboardAwareScrollView>
        </ScrollView>

        <Loader isLoading={app.loading} isAbsolute />
      </SafeAreaView>
      {harbor == 'Other' && modalVisible1 && (
        <Modal
          animationType={'none'}
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {}}>
          <SafeAreaView>
            <View style={styles.modalcontent}>
              <View style={styles.modalcontainer}>
                <View>
                  <Text style={styles.modaltextlogo}>
                    Please enter the other option
                  </Text>
                </View>
                <View
                  style={{
                    top: 13,
                    flex: 1,
                    width: layout.size.width / 2,
                  }}>
                  <TextInputComp
                    value={email}
                    placeholder={'Enter other'}
                    labelTextStyle={styles.labelTextStyle}
                    onChangeText={email => setText(email)}
                  />
                </View>
                <View style={styles.modalbuttonviewstyle}>
                  <TouchableOpacity
                    style={styles.modalbuttonstyle}
                    underlayColor={colors.white1}
                    // onPress={() => onButtonPressed(true)}
                    onPress={() => {
                      setModalVisible1(false);
                      harborItems.unshift({label: email, value: email});
                      setHarborItems(harborItems);
                      setEmail('');
                    }}>
                    <Text style={styles.modalbuttontextstyle}>OK</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      )}
    </ImageBackground>
  );
};

export default FishData;
