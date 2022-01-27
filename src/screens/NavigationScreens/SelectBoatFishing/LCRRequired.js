// import { launchImageLibrary, launchCamera } from 'react-native-image-picker'
import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Keyboard,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../assets';
var moment = require('moment');

const LCRRequired = props => {
  console.log(props, 'consoling props in lcr requires');
  console.log(props.selectedFish, 'selectedFish is <<<<<<<');

  const [weight, setWeight] = useState(0);
  const [date, setDate] = useState(new Date());

  // const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [time, setTime] = useState(new Date());

  const [fishphoto, setFishphoto] = useState('');
  const [fishInput, setfishInput] = useState('');

  const [showDate, setDateStatus] = useState(false);
  const [showTime, setTimeStatus] = useState(false);

  const onChange = (event, selectedDate) => {
    console.log(event, selectedDate);
    // let dateIs = moment(selectedDate).format('YYYY-MM-DD');
    // console.log(dateIs, '<>><><><><');

    // const currentDate = selectedDate || date
    setDate(selectedDate);
  };

  const onTimeChange = (event, newTime) => {
    console.log(event, newTime);
    // setTime(moment(newTime, 'MM/DD/YYYY h:mmA'));
    // console.log(time,'time>>>>>>>>>');
  };

  const [errors, setErrors] = useState({
    fishphoto: '',
  });

  const name_and_values = [{name: 'fishphoto', value: fishphoto}];

  function _doOpenOption() {
    Alert.alert(
      '',
      'Please Select',
      [
        {text: 'Camera', onPress: () => _doOpenCamera()},
        {text: 'Gallery', onPress: () => _doOpenGallery()},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  }

  function _doOpenCamera() {
    ImagePicker.openCamera({
      width: 200,
      height: 200,
      cropping: true,
      includeBase64: true,
      compressImageQuality: 0.2,
    }).then(response => {
      console.log(`ress`, response);
      setFishphoto(`data:${response.mime};base64,${response.data}`);

      // if (Platform.OS == 'ios') {
      //   console.log(`data:${response.mime};base64,${response.data}`);
      //   setFishphoto(response.path);
      // } else {
      //   setFishphoto(response.path);
      // }
    });
  }

  function _doOpenGallery() {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      compressImageQuality: 0.2,
      includeBase64: true,
    }).then(image => {
      console.log(`images`, image);
      setFishphoto(`data:${image.mime};base64,${image.data}`);
      // if (Platform.OS == 'ios') {
      //   console.log(`data:${image.mime};base64,${image.data}`, 'jgcyrc');

      //   setFishphoto(image.sourceURL);
      // } else {
      //   setFishphoto(image.path);
      // }
    });
  }

  const navigateLCROptional = () => {
    navigation.navigate('LCROptional');
  };

  const onSubmit = () => {
    Keyboard.dismiss();

    let selectedDate = moment(date).format('YYYY-MM-DD');
    let selectedTime = new Date().toLocaleTimeString();
    let dataTobeSendOnNext = {};
    dataTobeSendOnNext.selectedFish = props.selectedFish;
    dataTobeSendOnNext.weight = weight;
    dataTobeSendOnNext.fishphoto = fishphoto;
    dataTobeSendOnNext.date = selectedDate;
    dataTobeSendOnNext.selectedTime = selectedTime;

    console.log(dataTobeSendOnNext, 'dataTobeSendOnNext');

    props.navigation.navigate('FishData', {previousScreen: dataTobeSendOnNext});
  };

  return (
    <View style={styles.bg} blurRadius={4}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        style={styles.scrollView}>
        {props.fishType === 'Multiple' ? (
          <View style={{zIndex: 1, paddingHorizontal: 20, width: '100%'}}>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: 'lightgray',
                borderRadius: 7,
                padding: 5,
                fontSize: 16,
                color: '#000',
                fontWeight: '500',
                marginTop: 20,
              }}
              onChangeText={text => setfishInput(text)}
              multiline={true}
              placeholder="Enter multiple fish catches"
              placeholderTextColor="lightgray"
              value={fishInput}
            />
          </View>
        ) : null}
        {props.fishType === 'Other' ? (
          <View style={{zIndex: 1, paddingHorizontal: 20, width: '100%'}}>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: 'lightgray',
                borderRadius: 7,
                padding: 5,
                fontSize: 16,
                color: '#000',
                fontWeight: '500',
                marginTop: 20,
              }}
              onChangeText={text => setfishInput(text)}
              multiline={true}
              placeholder="Enter other fish type"
              placeholderTextColor="lightgray"
              value={fishInput}
            />
          </View>
        ) : null}
        {props.fishType != 'No Fish' ? (
          <View style={styles.section}>
            <Text style={styles.title}>Enter Fish Weight</Text>
            <TextInput
              style={styles.weightInput}
              onChangeText={setWeight}
              keyboardType="numeric"
              value={weight}
              placeholder="Enter fish weight here"
              placeholderTextColor="lightgray"
            />
          </View>
        ) : null}
        <View style={styles.section}>
          <Text style={styles.title}>Upload Image</Text>
          <TouchableOpacity
            style={styles.uploadContainer}
            onPress={() => _doOpenOption()}>
            <Image
              source={fishphoto != '' ? {uri: fishphoto} : icons.uploadImage1}
              resizeMode="cover"
              style={{
                top: 2,
                borderRadius: moderateScale(100),
                height: fishphoto != '' ? '100%' : '115%',
                width: fishphoto != '' ? '100%' : '155%',
              }}
            />
          </TouchableOpacity>
        </View>
        {/* <View style={styles.section}>
          <View style={styles.effortTitle}>
            <Text style={[styles.title, {marginBottom: 0}]}>Effort</Text>
            <Text style={styles.effortSubtext}>
              (fishing time only, not travel time)
            </Text>
          </View>
          <View style={styles.subsection}>
            <Circular />
          </View>
        </View> */}
        <View style={styles.section}>
          <Text style={styles.title}>Date & Time</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDateStatus(true);
                setTimeStatus(false);
              }}>
              <Text style={{fontFamily: fonts.bold}}>Show date</Text>
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
                // minimumDate={new Date("01-01-1990")}
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
                // minimumDate={new Date("01-01-1990")}
                maximumDate={new Date()}
                style={{height: windowHeight * 0.2, marginVertical: -10}}
              />
            ) : null}

            {showTime && Platform.OS == 'android' ? (
              <DateTimePicker
                testID="dateTimePicker"
                value={time}
                mode={'time'}
                display="spinner"
                onChange={onTimeChange}
                style={{
                  height: windowHeight * 0.2,
                  marginTop: -10,
                  marginBottom: -20,
                }}
              />
            ) : Platform.OS == 'ios' ? (
              <DateTimePicker
                testID="dateTimePicker"
                value={time}
                mode={'time'}
                display="spinner"
                onChange={onTimeChange}
                style={{
                  height: windowHeight * 0.2,
                  marginTop: -10,
                  marginBottom: -20,
                }}
              />
            ) : null}
          </View>
        </View>
        <View
          style={[
            styles.section,
            {justifyContent: 'center', alignItems: 'center'},
          ]}>
          <TouchableOpacity onPress={onSubmit} style={styles.confirmBtn}>
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LCRRequired;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    width: windowWidth,
    height: windowHeight,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.75,
    shadowRadius: 4,
  },
  modalView: {
    padding: 20,
    backgroundColor: '#fafafa',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    elevation: 5,
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  scrollView: {
    width: windowWidth,
    paddingHorizontal: 20,
  },
  section: {
    marginVertical: 15,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 10,
  },
  weightInput: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 7,
    padding: 5,
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  imgView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.15,
    resizeMode: 'contain',
  },
  subsection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  effortTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  effortSubtext: {
    marginLeft: 5,
  },
  confirmBtn: {
    backgroundColor: '#2c385e',
    borderRadius: 7,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    marginTop: 10,
  },
  confirmText: {
    fontSize: 16,
    color: '#fafafa',
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  uploadContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(200),
    width: moderateScale(200),
    alignSelf: 'center',
    marginTop: moderateScale(5),
    borderRadius: moderateScale(100),
    borderColor: 'transparent',

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 30,
  },
});
