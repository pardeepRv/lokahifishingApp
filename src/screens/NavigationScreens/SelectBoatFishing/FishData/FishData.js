import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
// import { AuthContext } from '../../../../context/authProvider'
import GetLocation from 'react-native-get-location';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../../assets';
import {Header} from '../../../../components/common/Header';
import * as NavigationService from '../../../../store/NavigationService';
import {colors, screenNames} from '../../../../utilities/constants';
import styles from './styles';

// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { LCRContext } from '../../../../context/LCRContext/lcrProvider'
// import { BlurView } from '@react-native-community/blur'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FishData = ({navigation}) => {
  const [state, setState] = useState({
    isGPS: '',
    title: '',
    isPrivate: '',
  });
  const {isGPS, title, isPrivate} = state;
  const _onChangeText = key => val => {
    setState({...state, [key]: val});
  };

  const {user, setUser} = useState('');
  const [
    LCRPostOptional,
    setLCRPostOptional,
    postToPhotos,
    setPostToPhotos,
    LCRIsPosting,
    LCRPostRequired,
  ] = useState('');

  const [price, setPrice] = useState(0);
  const [sign, setSign] = useState('');
  const [method, setMethod] = useState('');
  const [weather, setWeather] = useState('');
  const [position, setposition] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [degrees, setDegrees] = useState('');
  const [miles, setMiles] = useState('');
  const [harbor, setHarbor] = useState('');
  const [open, setOpen] = useState(false);
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


  useEffect(() => {
    setLCRPostOptional({
      sign: sign,
      method: method,
      weather: weather,
      position: position,
      additionalNotes: additionalNotes,
      hawaiiLocation: {
        degrees: degrees,
        miles: miles,
        harbor: harbor,
      },
      gpsLocation: location,
    });
  }, [
    sign,
    method,
    weather,
    position,
    additionalNotes,
    degrees,
    miles,
    harbor,
    location,
  ]);

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      //I'm not sure what is best for the timeout to be set as. Some more testing could be beneficial here
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
    console.log('coming in parent>>>>>>', val);
    if (val && val.length > 0) {
      setWeatherAr(val);
    }
  };
  const getHrs = v => {
    console.log(v, ' in parnt hrs');
    if (v > 0) {
      setPrice(v);
    }
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
        onRightPress={() => {
          NavigationService.resetRoute(screenNames.HomeStack);
        }}
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
            {/* <View style={styles.profileInfo}>
					<Text style={{ marginRight: 10, fontWeight: '600', fontSize: 18 }}>{user.dbData.fullname}</Text>
					<FastImage style={styles.profilePic} source={{ uri: user.dbData.User_Image }} />
				</View> */}
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
                // onValueChange={() => setPostToPhotos(!isGPS)}
                onValueChange={isGPS =>
                  setState({isGPS}, () => setPostToPhotos(isGPS))
                }
                value={isGPS}
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
                Sign
              </Text>
              {/* <TextInput
                placeholder="Add sign info (optional)"
                autoCapitalize="sentences"
                style={{fontSize: 16}}
                returnKeyType="done"
                blurOnSubmit={true}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                onChangeText={text => setSign(text)}
              /> */}
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
                    Select sign here
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
                  })
                }>
                Method
              </Text>
              <TextInput
                placeholder="Add info about method (optional)"
                autoCapitalize="sentences"
                style={{fontSize: 16}}
                returnKeyType="done"
                blurOnSubmit={true}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                onChangeText={text => setMethod(text)}
              />
            </View>
            <View style={styles.textSection}>
              <Text
                style={styles.title}
                onPress={() =>
                  navigation.navigate('ModalListComponent', {
                    value: 3,
                    name: 'Weather',
                    getSelectedweather: getSelectedweather ,
                  })
                }>
                Weather
              </Text>
              {/* <TextInput
                placeholder="Add weather info (optional)"
                autoCapitalize="sentences"
                style={{fontSize: 16}}
                returnKeyType="done"
                blurOnSubmit={true}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                onChangeText={text => setWeather(text)}
              /> */}
              <View style={{flex: 0.5}}>
                {weateherArr && weateherArr.length > 0 ? (
                  weateherArr.map((val, index) => {
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
                        value: 3,
                        name: 'weather',
                        getSelectedweather: getSelectedweather,
                      })
                    }>
                    Select weather here
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
                Position
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
                    Select position here
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
              {/* <MapView
							style={styles.map}
							provider={PROVIDER_GOOGLE}
							region={{
								latitude: location?.latitude,
								longitude: location?.longitude,
								latitudeDelta: 0.009,
								longitudeDelta: 0.009,
							}}
							// onRegionChangeComplete={region => setRegion(region)}
						>
							<Marker coordinate={{ latitude: location?.latitude, longitude: location?.longitude }} />
						</MapView> */}
              <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
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
            {/* <View style={{ borderTopWidth: 1, borderColor: 'lightgray', paddingTop: 15, paddingBottom: 15, height: windowHeight * 0.25 }}> */}
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
              onChangeText={text => setAdditionalNotes(text)}
            />
            {/* </View> */}
            {/* <View style={{ borderTopWidth: 1, borderColor: 'lightgray', paddingTop: 5, paddingBottom: 15 }} />
				<View style={{ flex: 1 }} /> */}
          </ScrollView>

          {/* </KeyboardAvoidingView> */}
        </KeyboardAvoidingView>
        {/* {LCRIsPosting ? <BlurView style={styles.blurView} blurType='light' blurAmount={10} reducedTransparencyFallbackColor='white' /> : null}
			<Modal animationType='slide' transparent={true} visible={LCRIsPosting}>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<ActivityIndicator size='large' />
						<Text style={{ fontSize: 18, fontWeight: '600', paddingTop: 20 }}>Posting catch report...</Text>
					</View>
				</View>
			</Modal> */}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default FishData;
