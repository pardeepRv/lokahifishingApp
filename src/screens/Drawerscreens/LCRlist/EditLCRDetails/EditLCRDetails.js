import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ImagePicker from 'react-native-image-crop-picker';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../../assets';
import Circular from '../../../../components/common/Circular';
import {Header} from '../../../../components/common/Header';
import {colors} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';
import styles from './styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const EditLCRDetails = ({navigation}) => {
  const [Profilepic, setProfilepic] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDate, setDateStatus] = useState(false);
  const [showTime, setTimeStatus] = useState(false);

  const [fishTypeState, setFishTypeState] = useState('');
  const [fishWeightState, setFishWeightState] = useState('');
  const [fishingTypeOpen, setFishingTypeOpen] = useState(false);
  const [fishingTypeState, setFishingTypeState] = useState(false);
  const [boatFishingTypeState, setBoatFishingTypeState] = useState(false);
  const [boatFishingTypeOpen, setBoatFishingTypeOpen] = useState(false);

  const [fishingTypeItems, setFishingTypeItems] = useState([
    {label: 'Boat Fishing', value: 'Boat Fishing'},
    {label: 'Shoreline Fishing', value: 'Shoreline Fishing'},
  ]);
  const [defaultFishingTypeItems, setDefaultFishingTypeItems] = useState([
    {label: 'Offshore Fishing', value: 'Offshore Fishing'},
    {label: 'Bottom Fishing', value: 'Bottom Fishing'},
    {label: 'Whipping', value: 'Whipping'},
    {label: 'Baitcasting', value: 'Baitcasting'},
    {label: 'Slide Bait', value: 'Slide Bait'},
  ]);
  const [boatFishingTypeItems, setBoatFishingTypeItems] = useState([
    {label: 'Offshore Fishing', value: 'Offshore Fishing'},
    {label: 'Bottom Fishing', value: 'Bottom Fishing'},
  ]);
  const [shorelineFishingTypeItems, setShorelineFishingTypeItems] = useState([
    {label: 'Whipping', value: 'Whipping'},
    {label: 'Baitcasting', value: 'Baitcasting'},
    {label: 'Slide Bait', value: 'Slide Bait'},
  ]);
  const _onChangeText = key => val => {
    setState({...state, [key]: val});
  };

  const onChange = (event, selectedDate) => {
    // const currentDate = selectedDate || date
    // setDate(selectedDate)
  };

  function _doOpenOption(value) {
    Alert.alert(
      '',
      'Please Select',
      [
        {text: 'Camera', onPress: () => _doOpenCamera(value)},
        {text: 'Gallery', onPress: () => _doOpenGallery(value)},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  }
  function _doOpenCamera(value) {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
      compressImageQuality: 0.2,
    }).then(response => {
      let data = `data:${response.mime};base64,${response.data}`;
      if (value == 'Profilepic') {
        setProfilepic(data);
      }
    });
  }
  function _doOpenGallery(value) {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
      compressImageQuality: 0.2,
    }).then(image => {
      console.log(`images`, image);
      let data = `data:${image.mime};base64,${image.data}`;
      if (value == 'Profilepic') {
        setProfilepic(data);
      }
    });
  }
  const onChangeDate = (event, selectedDate) => {
    setDate(selectedDate);
  };

  const handleEffortChange = v => setEffortHrsState((v * 0.24).toFixed(0));
  return (
    <ImageBackground
      source={icons.LeaderBoard1}
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
          blackTitle
          title={' Edit Catch Report'}
          titleStyle={{fontFamily: fonts.bold}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.black1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
          onRightPress={() => {
            navigation.navigate('LCRDetails');
          }}
          rightIconSource={icons.post}
          rightIconStyle={{
            height: 30,
            width: 30,
            tintColor: colors.green1,
          }}
        />
        <SafeAreaView style={styles.EditLCR}>
          <TouchableOpacity onPress={() => _doOpenOption('Profilepic')}>
            <Image
              source={Profilepic != '' ? {uri: Profilepic} : icons.loginLogo}
              resizeMode="cover"
              style={{
                height: layout.size.height / 6,
                width: layout.size.height / 6,
                borderColor: '#fff',
                borderWidth: 2,
                borderRadius: 7,
              }}
            />
          </TouchableOpacity>
          <Text style={{paddingTop: 5, marginBottom: 10, opacity: 0.6}}>
            Tap photo to change
          </Text>
          <ScrollView style={{flex: 1}}>
            <Text style={[styles.label, {marginTop: 0}]}>Date & Time</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setDateStatus(true);
                  setTimeStatus(false);
                }}>
                <Text>Show date</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setTimeStatus(true);
                  setDateStatus(false);
                }}>
                <Text>Show time</Text>
              </TouchableOpacity>
            </View>
            <View>
              {showDate && Platform.OS == 'android' ? (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={'date'}
                  display="spinner"
                  onChange={onChange}
                  style={{height: windowHeight * 0.2, marginVertical: -10}}
                />
              ) : Platform.OS == 'ios' ? (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={'date'}
                  display="spinner"
                  onChange={onChange}
                  style={{height: windowHeight * 0.2, marginVertical: -10}}
                />
              ) : null}

              {showTime && Platform.OS == 'android' ? (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={'time'}
                  display="spinner"
                  onChange={onChange}
                  style={{
                    height: windowHeight * 0.2,
                    marginTop: -10,
                    marginBottom: -20,
                  }}
                />
              ) : Platform.OS == 'ios' ? (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={'time'}
                  display="spinner"
                  onChange={onChange}
                  style={{
                    height: windowHeight * 0.2,
                    marginTop: -10,
                    marginBottom: -20,
                  }}
                />
              ) : null}
            </View>
            <Text style={styles.label}>Fish Type</Text>
            <TextInput
              style={styles.info}
              value={fishTypeState}
              autoCorrect={false}
              autoCapitalize="words"
              returnKeyType="done"
              onChangeText={text => setFishTypeState(text)}
            />
            <Text style={styles.label}>Fish Weight</Text>
            <TextInput
              style={styles.info}
              value={fishWeightState}
              keyboardType="decimal-pad"
              returnKeyType="done"
              onChangeText={text => setFishWeightState(text)}
            />
            {/* <View style={styles.subsection}>
              <Circular />
            </View> */}

            <Text style={styles.label}>Fishing Type</Text>
            <View>
              <DropDownPicker
                open={fishingTypeOpen}
                value={fishingTypeState}
                items={fishingTypeItems}
                setOpen={setFishingTypeOpen}
                setValue={setFishingTypeState}
                setItems={setFishingTypeItems}
                containerStyle={{width: windowWidth * 0.9}}
                zIndex={1000}
                dropDownDirection={'TOP'}
              />
            </View>
            <Text style={styles.label}>Boat Fishing Type</Text>
            <View>
              <DropDownPicker
                open={boatFishingTypeOpen}
                value={boatFishingTypeState}
                items={
                  fishingTypeState === 'Boat Fishing'
                    ? boatFishingTypeItems
                    : fishingTypeState === 'Shoreline Fishing'
                    ? shorelineFishingTypeItems
                    : defaultFishingTypeItems
                }
                setOpen={setBoatFishingTypeOpen}
                setValue={setBoatFishingTypeState}
                setItems={
                  fishingTypeState === 'Boat Fishing'
                    ? setBoatFishingTypeItems
                    : fishingTypeState === 'Shoreline Fishing'
                    ? setShorelineFishingTypeItems
                    : setDefaultFishingTypeItems
                }
                style={{width: windowWidth * 0.9}}
                containerStyle={{width: windowWidth * 0.9}}
                zIndex={1000}
                dropDownDirection={'TOP'}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default EditLCRDetails;
