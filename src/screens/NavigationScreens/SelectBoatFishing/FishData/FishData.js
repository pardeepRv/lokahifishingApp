import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import {useDispatch, useSelector} from 'react-redux';

import GetLocation from 'react-native-get-location';
import MapView, {PROVIDER_GOOGLE, PROVIDER_DEFAULT} from 'react-native-maps';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../../assets';
import {Header} from '../../../../components/common/Header';
import * as NavigationService from '../../../../store/NavigationService';
import {colors, screenNames} from '../../../../utilities/constants';
import styles from './styles';
import {savelcrreport} from '../../../../store/actions';
import {Loader} from '../../../../components/common';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FishData = ({navigation, route}) => {
  const {previousScreen} = route && route.params;

  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);

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
  ]);

  const [selectedSignArr, setselectedSignArr] = useState([]);
  const [positionarr, setpositionarr] = useState([]);
  const [weateherArr, setWeatherAr] = useState([]);
  const [baitUI, setBaitForUI] = useState([]);
  const [lureUI, setlureForUI] = useState([]);

  const [weateherArrNeedsToSendApi, setWeateherArrNeedsToSendApi] = useState(
    [],
  );

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
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
    // I set this so that the region could update as we move the map around and it seems to break the map. Setting the actual <MapView> region to this seems to work but then the pin only stays at the users current location. Maybe the map will be good if they make the post at the spot of location and use the other method if it is created later.
  }, []);

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

  const getHrs = v => {
    console.log(v, ' in parnt hrs');
    if (v > 0) {
      setPrice(v);
    }
  };

  //hit api
  const _postCatchReport = () => {
    console.log(previousScreen, 'previousScreen data');
    let selectedSigns = [];
    let selectedPosition = [];
    let user_os = '';

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
    console.log(price, 'efforts');
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

    let formData = new FormData();

    formData.append('fish_id', previousScreen && previousScreen.selectedFish);
    formData.append('image', previousScreen && previousScreen.fishphoto);

    // formData.append('image', {
    //   uri: previousScreen && previousScreen.fishphoto,
    //   type: 'image/jpeg',
    //   name: 'profilePic',
    // });

    formData.append('fish_weight', previousScreen && previousScreen.weight);
    formData.append('lcr_date_time', previousScreen && previousScreen.date);
    formData.append('effort', price);
    formData.append(
      'lat',
      location && location.latitude ? location.latitude : 0.0,
    );
    formData.append(
      'long',
      location && location.longitude ? location.longitude : 0.0,
    );
    formData.append('description', additionalNotes);

    // formData.append('sign_id', selectedSigns);
    // formData.append('method_id', weateherArrNeedsToSendApi);
    // formData.append('weather_id', []);
    // formData.append('position_id', selectedPosition);

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

    formData.append('method_id[0]', 1);
    formData.append('weather_id', weateherArrNeedsToSendApi);
    // formData.append('position_id[0]', 3);

    formData.append('user_os', user_os);
    formData.append('is_private', isEnabled);

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
        rightIconSource={icons.post}
        rightIconStyle={{
          height: 30,
          width: 30,
          tintColor: colors.green1,
        }}
      />
      <SafeAreaView style={styles.safeAreaView}>
        <KeyboardAvoidingView>
          <ScrollView>
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
            <View style={styles.textSection}>
              <Text
                style={styles.title}
                onPress={() =>
                  navigation.navigate('ModalListComponent', {
                    value: 1,
                    name: 'Sign',
                    getSelectedSigns: getSelectedSigns,
                  })
                }>
                Sign(optional)
              </Text>
              <View style={{flex: 0.5}}>
                {selectedSignArr && selectedSignArr.length > 0 ? (
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
                  })
                ) : (
                  <Text
                    style={{
                      fontFamily: fonts.semiBold,
                    }}
                    onPress={() =>
                      navigation.navigate('ModalListComponent', {
                        value: 1,
                        name: 'Sign',
                        getSelectedSigns: getSelectedSigns,
                      })
                    }>
                    Select sign
                  </Text>
                )}
              </View>
            </View>
            <View style={styles.textSection}>
              <Text
                style={styles.title}
                onPress={() =>
                  navigation.navigate('ModalListComponent', {
                    value: 2,
                    name: 'Method',
                    getSelectedBaits: getSelectedBaits,
                    getSelectedLures: getSelectedLures,
                  })
                }>
                Method(optional)
              </Text>
              <View style={{flex: 0.5}}>
                {baitUI.map((val, index) => {
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
                {lureUI.length == 0 && baitUI.length == 0 ? (
                  <Text
                    style={{
                      fontFamily: fonts.semiBold,
                    }}
                    onPress={() =>
                      navigation.navigate('ModalListComponent', {
                        value: 2,
                        name: 'Method',
                        getSelectedBaits: getSelectedBaits,
                        getSelectedLures: getSelectedLures,
                      })
                    }>
                    Select Method
                  </Text>
                ) : null}
              </View>
            </View>
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
            <View style={styles.textSection}>
              <Text
                style={styles.title}
                onPress={() =>
                  navigation.navigate('ModalListComponent', {
                    value: 4,
                    name: 'Position',
                    getSelectedposition: getSelectedposition,
                  })
                }>
                Position(optional)
              </Text>

              <View style={{flex: 0.5}}>
                {positionarr && positionarr.length > 0 ? (
                  positionarr.map((val, index) => {
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
                ) : (
                  <Text
                    style={{
                      fontFamily: fonts.semiBold,
                    }}
                    onPress={() =>
                      navigation.navigate('ModalListComponent', {
                        value: 4,
                        name: 'position',
                        getSelectedposition: getSelectedposition,
                      })
                    }>
                    Select position
                  </Text>
                )}
              </View>
            </View>
            <View style={styles.textSection}>
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
            </View>

            <View style={styles.textSection}>
              <Text style={styles.title}>Location</Text>
            </View>
            <View style={styles.mapContainer}>
              <MapView
                provider={
                  Platform.OS == 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT
                } // remove if not using Google Maps
                style={styles.map}
                region={{
                  latitude:
                    location && location.latitude ? location.latitude : 31.9311,
                  longitude:
                    location && location.longitude
                      ? location.longitude
                      : 75.8941,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}>
                <MapView.Marker
                  coordinate={{
                    latitude:
                      location && location.latitude
                        ? location.latitude
                        : 31.9311,
                    longitude:
                      location && location.longitude
                        ? location.longitude
                        : 75.8941,
                  }}
                />
              </MapView>
            </View>
            {location ? (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  paddingHorizontal: 10,
                }}>
                <TextInput
                  returnKeyType="done"
                  blurOnSubmit={true}
                  onSubmitEditing={() => {
                    Keyboard.dismiss();
                  }}
                  style={styles.locationTextInput}
                  placeholder={location?.latitude?.toString()}
                  onChangeText={text => onChangeLatitude(text)}
                  keyboardType={
                    Platform.OS === 'ios'
                      ? 'numbers-and-punctuation'
                      : 'default'
                  }
                  // value={location?.latitude?.toString()}
                />
                <Text style={{fontSize: 16, marginRight: 10, paddingBottom: 2}}>
                  latitude
                </Text>
                <TextInput
                  style={{fontSize: 16}}
                  returnKeyType="done"
                  blurOnSubmit={true}
                  onSubmitEditing={() => {
                    Keyboard.dismiss();
                  }}
                  style={styles.locationTextInput}
                  placeholder={location?.longitude?.toString()}
                  onChangeText={text => onChangeLongitude(text)}
                  keyboardType={
                    Platform.OS === 'ios'
                      ? 'numbers-and-punctuation'
                      : 'default'
                  }
                  // value={location?.longitude?.toString()}
                />
                <Text style={{fontSize: 16, paddingBottom: 2}}>longitude</Text>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  paddingHorizontal: 10,
                }}>
                <ActivityIndicator />
                <Text style={{fontSize: 16, marginLeft: 10}}>
                  getting location...
                </Text>
              </View>
            )}
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
              <View style={{zIndex: 1}}>
                <DropDownPicker
                  style={{backgroundColor: '#fafafa'}}
                  theme="LIGHT"
                  containerStyle={{width: '50%', marginVertical: 10}}
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
                  setValue={setHarbor}
                  setItems={setHarborItems}
                  placeholder={'Choose Harbor'}
                  dropDownDirection="AUTO"
                />
              </View>
            </View>
            <TextInput
              placeholder="Add any additional notes you would like"
              autoCapitalize="sentences"
              style={{
                fontSize: 16,
                paddingHorizontal: 10,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: 'lightgray',
                paddingTop: 15,
                paddingBottom: 15,
                height: windowHeight * 0.25,
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
          </ScrollView>
        </KeyboardAvoidingView>
        <Loader isLoading={app.loading} isAbsolute />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default FishData;
