// import { launchImageLibrary, launchCamera } from 'react-native-image-picker'
import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../assets';
import Circular from '../../../components/common/Circular';

const LCRRequired = props => {
  console.log(props, 'consoling props ');
  const [weight, setWeight] = useState(0);
  const [date, setDate] = useState(new Date());
  const [image, setImage] = useState('');
  const [fishphoto, setFishphoto] = useState('');
  const [fishInput, setfishInput] = useState('');

  const [transferred, setTransferred] = useState(0);
  const [showDate, setDateStatus] = useState(false);
  const [showTime, setTimeStatus] = useState(false);

  const onChange = (event, selectedDate) => {
    // const currentDate = selectedDate || date
    // setDate(selectedDate)
  };

  const [errors, setErrors] = useState({
    fishphoto: '',
  });

  const name_and_values = [{name: 'fishphoto', value: fishphoto}];

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
      if (value == 'fishphoto') {
        setFishphoto(data);
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
      if (value == 'fishphoto') {
        setFishphoto(data);
      } else if ('fishphoto' === name && value != '') {
        err[name] = 'Confirm password should match';
      }
    });
  }

  const navigateLCROptional = () => {
    navigation.navigate('LCROptional');
  };

  const onSubmit = () => {
    Keyboard.dismiss();
    props.navigation.navigate('FishData');
  };

  return (
    <View style={styles.bg} blurRadius={4}>
      <ScrollView nestedScrollEnabled style={styles.scrollView}>
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
        <View style={styles.section}>
          <Text style={styles.title}>Upload Image</Text>
          <TouchableOpacity
            style={styles.uploadContainer}
            onPress={() => _doOpenOption('fishphoto')}>
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
              <Text style={{fontFamily:fonts.bold}}>Show date</Text>
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
      {/* {photoIsUploading ? <BlurView style={styles.blurView} blurType='light' blurAmount={10} reducedTransparencyFallbackColor='white' /> : null} */}
      {/* <Modal animationType='slide' transparent={true} visible={photoIsUploading}>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<ActivityIndicator size='large' />
						<Text style={{ fontSize: 18, fontWeight: '600', paddingTop: 20 }}>Uploading photo...</Text>
						<Text style={{ fontSize: 16, fontWeight: '400', paddingTop: 10 }}>{transferred}% Uploaded</Text>
					</View>
				</View>
			</Modal> */}
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
shadowRadius: 16.00,
		
		elevation: 30
  },
});
