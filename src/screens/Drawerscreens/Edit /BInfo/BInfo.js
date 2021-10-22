import React, {useRef, useState} from 'react';

import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  FlatList,
} from 'react-native';
//ecxternal libraries
import {moderateScale} from 'react-native-size-matters';
import ImagePicker from 'react-native-image-crop-picker';

//internal libraries
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {fonts, icons} from '../../../../../assets';
import {Header} from '../../../../components/common/Header';
import {strings} from '../../../../localization';
import {colors} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';
import TextInputComp from '../../../../components/common/TextInputComp';
import {RFValue} from 'react-native-responsive-fontsize';
import {Button} from '../../../../components/common/Button';

const BInfo = () => {
  let passwordTextInput = useRef(null);

  const [boatmarker, setBoatmarker] = useState('');
  const [boatlength, setBoatlength] = useState('');
  const [homeport, setHomeport] = useState('');
  const [boatphoto, setboatphoto] = useState('');
  const [LifeIcon, setLifeIcon] = useState('');
  const [VHFIcon, setVHFIcon] = useState('');
  const [CbIcon, setCbIcon] = useState('');
  const [EPIRBIcon, setEPIRBIcon] = useState('');
  const [VisualIcon, setVisualIcon] = useState('');

  const [errors, setErrors] = useState({
    boatmarker: '',
    boatlength: '',
    homeport: '',
    LifeIcon: false,
    isLoading: false,
    boatphoto: '',
  });

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
      if (value == 'boatphoto') {
        setboatphoto(data);
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
      if (value == 'boatphoto') {
        setboatphoto(data);
      }
    });
  }
  // const ToogleCheck = () => {
  //   const {LifeIcon} = this.state;

  //   if (LifeIcon == '') {
  //     this.setState({LifeIcon: !LifeIcon});
  //   }
  // };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white1}}>
      <View
        style={{
          flex: 1,
        }}>
        <ImageBackground source={icons.ic_signup_bg} style={styles.image}>
          <ScrollView style={{flex: 1}}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
              style={styles.subContainer}
              contentContainerStyle={styles.subContentContainer}
              keyboardShouldPersistTaps={'always'}
              showsVerticalScrollIndicator={false}>
              <View style={styles.uploadContainer}>
                <Image
                  source={
                    boatphoto != '' ? {uri: boatphoto} : icons.signin_bg_ic
                  }
                  resizeMode={boatphoto != '' ? 'cover' : 'contain'}
                  style={{
                    borderRadius: moderateScale(100),
                    height: boatphoto != '' ? '80%' : '100%',
                    width: boatphoto != '' ? '80%' : '100%',
                  }}
                />
                <View style={styles.uploadContent}>
                  <TouchableOpacity
                    style={[styles.uploadStoreBtn]}
                    onPress={() => _doOpenOption('boatphoto')}>
                    <Image
                      style={styles.logo2}
                      source={icons.ic_cateagory}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  height: 2,
                  left: 20,
                  width: layout.size.width / 1.2,
                  backgroundColor: colors.white1,
                }}></View>
              <View
                style={{
                  marginTop: moderateScale(30),
                }}>
                <View>
                  <TextInputComp
                    label={strings.boatmaker}
                    value={boatmarker}
                    placeholder={strings.marker}
                    labelTextStyle={styles.labelTextStyle}
                    onChangeText={boatmarker => setBoatmarker(boatmarker)}
                  />
                </View>
                <View>
                  <TextInputComp
                    label={strings.boatlength}
                    value={boatlength}
                    placeholder={strings.Length}
                    labelTextStyle={styles.labelTextStyle}
                    onChangeText={boatlength => setBoatlength(boatlength)}
                  />
                </View>
                <View>
                  <TextInputComp
                    label={strings.homeport}
                    value={homeport}
                    placeholder={strings.port}
                    labelTextStyle={styles.labelTextStyle}
                    onChangeText={homeport => setHomeport(homeport)}
                  />
                </View>
              </View>
              <View
                style={{
                  height: 2,
                  top: 5,
                  left: 20,
                  width: layout.size.width / 1.2,
                  backgroundColor: colors.white1,
                }}></View>
              <View style={styles.Containertable}>
                <View style={styles.rowContent}>
                  <Text style={styles.textstyle}>{strings.vhfradio}</Text>
                  <TouchableOpacity
                    style={{
                      alignSelf: 'flex-end',
                      height: moderateScale(40),
                      left: moderateScale(30),
                    }}
                    onPress={() => setVHFIcon(!VHFIcon)}>
                    <Image
                      source={
                        VHFIcon != '' ? icons.ic_donex : icons.ic_not_donex
                      }
                      style={styles.checkIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.Containertable}>
                <View style={styles.rowContent}>
                  <Text style={styles.textstyle}>{strings.cbradio}</Text>
                  <TouchableOpacity
                    style={{
                      alignSelf: 'flex-end',
                      height: moderateScale(40),
                      left: moderateScale(30),
                    }}
                    onPress={() => setCbIcon(!CbIcon)}>
                    <Image
                      source={
                        CbIcon != '' ? icons.ic_donex : icons.ic_not_donex
                      }
                      style={styles.checkIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.Containertable}>
                <View style={styles.rowContent}>
                  <Text style={styles.textstyle}>{strings.epirb}</Text>
                  <TouchableOpacity
                    style={{
                      alignSelf: 'flex-end',
                      height: moderateScale(40),
                      left: moderateScale(30),
                    }}
                    onPress={() => setEPIRBIcon(!EPIRBIcon)}>
                    <Image
                      source={
                        EPIRBIcon != '' ? icons.ic_donex : icons.ic_not_donex
                      }
                      style={styles.checkIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.Containertable}>
                <View style={styles.rowContent}>
                  <Text style={styles.textstyle}>{strings.liferaft}</Text>
                  <TouchableOpacity
                    style={{
                      alignSelf: 'flex-end',
                      height: moderateScale(40),
                      left: moderateScale(30),
                    }}
                    onPress={() => setLifeIcon(!LifeIcon)}>
                    <Image
                      source={
                        LifeIcon != '' ? icons.ic_donex : icons.ic_not_donex
                      }
                      style={styles.checkIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.Containertable}>
                <View style={styles.rowContent}>
                  <Text style={styles.textstyle}>
                    {strings.visualdistressignal}
                  </Text>
                  <TouchableOpacity
                    style={{
                      alignSelf: 'flex-end',
                      height: moderateScale(40),
                      left: moderateScale(30),
                    }}
                    onPress={() => setVisualIcon(!VisualIcon)}>
                    <Image
                      source={
                        VisualIcon != '' ? icons.ic_donex : icons.ic_not_donex
                      }
                      style={styles.checkIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  marginTop: moderateScale(40),
                }}>
                <Button
                  style={{
                    backgroundColor: colors.primary,
                    borderRadius: 20,
                    width: 200,
                    alignSelf: 'center',
                    bottom: moderateScale(20),
                  }}
                  label={strings.save}
                  onPress={() => alert()}
                />
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  subContainer: {
    paddingHorizontal: moderateScale(15),
  },
  subContentContainer: {
    paddingBottom: moderateScale(40),
  },
  uploadContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(200),
    width: moderateScale(200),
    alignSelf: 'center',
    marginTop: moderateScale(20),
    borderRadius: moderateScale(100),
    borderColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    borderWidth: 0.5,
  },
  uploadContent: {
    alignItems: 'center',
    position: 'absolute',
    bottom: moderateScale(50),
    right: 20,
  },
  uploadStoreBtn: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'transparent',
    top: 20,
    // alignItems: 'center',
  },
  logo2: {
    tintColor: colors.primary,
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: 20,
  },
  labelTextStyle: {
    fontFamily: fonts.semiBold,
    fontSize: moderateScale(18),
    color: colors.primary,

    height: moderateScale(25),
  },
  Containertable: {
    marginTop: moderateScale(20),
    height: moderateScale(45),
  },
  tableRow: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowContent: {
    flexDirection: 'row',
  },
  textstyle: {
    fontSize: RFValue(20),
    color: colors.white1,
    width: layout.size.width / 1.5,
    left: moderateScale(10),
    textAlign: 'left',
    fontFamily: fonts.semiBold,
    padding: 5,
    backgroundColor: colors.transparent,
  },
  checkIcon: {
    alignSelf: 'flex-end',
    bottom: moderateScale(7),
    borderColor: colors.white1,
    borderWidth: 0,
    borderRadius: 16,
  },
});

export default BInfo;
