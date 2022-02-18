import React, {useRef, useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {RFValue} from 'react-native-responsive-fontsize';
//ecxternal libraries
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {fonts, icons} from '../../../../../assets';
import {Button} from '../../../../components/common/Button';
import {Loader} from '../../../../components/common/Loader';
import TextInputComp from '../../../../components/common/TextInputComp';
import {strings} from '../../../../localization';
import {updateBoatInfo} from '../../../../store/actions';
import {colors} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';

const BInfo = () => {
  let passwordTextInput = useRef(null);
  let auth = useSelector(state => state.auth);
  console.log(auth, 'auth in editBoat page>>>>>>>>>>');

  const dispatch = useDispatch();

  const [boatmarker, setBoatmarker] = useState(
    auth?.userAllData?.boat_info[0]?.boat_maker,
  );
  const [boatlength, setBoatlength] = useState(
    auth?.userAllData?.boat_info[0]?.boat_length,
  );
  const [homeport, setHomeport] = useState(
    auth?.userAllData?.boat_info[0]?.home_port,
  );
  const [boatphoto, setboatphoto] = useState(
    auth?.userAllData?.boat_info[0]?.boat_image
      ? auth?.userAllData?.boat_info[0]?.boat_image
      : '',
  );
  const [LifeIcon, setLifeIcon] = useState(
    auth?.userAllData?.boat_info[0]?.Life_Raft
      ? auth?.userAllData?.boat_info[0]?.Life_Raft
      : false,
  );
  const [VHFIcon, setVHFIcon] = useState(
    auth?.userAllData?.boat_info[0]?.VHF_Radio
      ? auth?.userAllData?.boat_info[0]?.VHF_Radio
      : false,
  );
  const [CbIcon, setCbIcon] = useState(
    auth?.userAllData?.boat_info[0]?.CB_Radio
      ? auth?.userAllData?.boat_info[0]?.CB_Radio
      : false,
  );
  const [EPIRBIcon, setEPIRBIcon] = useState(
    auth?.userAllData?.boat_info[0]?.EPIRB
      ? auth?.userAllData?.boat_info[0]?.EPIRB
      : false,
  );
  const [VisualIcon, setVisualIcon] = useState(
    auth?.userAllData?.boat_info[0]?.Visual_Distress_Signals
      ? auth?.userAllData?.boat_info[0]?.Visual_Distress_Signals
      : false,
  );
  const [sendingProfile, setSendingProfile] = useState(false);
  const [errors, setErrors] = useState({
    boatmarker: '',
    boatlength: '',
    homeport: '',
    LifeIcon: false,
    isLoading: false,
    boatphoto: '',
  });
  const name_and_values = [
    {name: 'boatmarker', value: boatmarker},
    {name: 'boatlength', value: boatlength},
    {name: 'homeport', value: homeport},
  ];

  function _doOpenOption(value) {
    setSendingProfile(true)
    Alert.alert(
      '',
      'Please Select',
      [
        {text: 'Camera', onPress: () => _doOpenCamera(value)},
        {text: 'Gallery', onPress: () => _doOpenGallery(value)},
        {
          text: 'Cancel',
          onPress: () => console.log('err'), //setSendingProfile(false),
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
      compressImageQuality: 0.2,
    })
      .then(res => {
        console.log(`ress`, res);
        // res && res.assets && res.assets.length > 0 && res.assets[0].uri,
        if (Platform.OS == 'ios') {
          setboatphoto(res.sourceURL);
        } else {
          setboatphoto(res.path);
        }
      })
      .catch(err => {
        setSendingProfile(false);
      });
  }
  function _doOpenGallery(value) {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      compressImageQuality: 0.2,
    })
      .then(res => {
        console.log(`ress`, res);
        // res && res.assets && res.assets.length > 0 && res.assets[0].uri,
        if (Platform.OS == 'ios') {
          setboatphoto(res.sourceURL);
        } else {
          setboatphoto(res.path);
        }
      })
      .catch(err => {
        setSendingProfile(false);
        console.log(err, 'err in image picker');
      });
  }
  // const ToogleCheck = () => {
  //   const {LifeIcon} = this.state;

  //   if (LifeIcon == '') {
  //     this.setState({LifeIcon: !LifeIcon});
  //   }
  // };

  function Save() {
    Keyboard.dismiss();
    let err = {};
    //email error
    name_and_values.forEach(data => {
      let name = data.name;
      let value = data.value;
      if (!value) {
        err[name] = 'Should not be empty';
      }
    });
    setErrors(err);
    if (Object.keys(err).length == 0) {
      let formData = new FormData();

      if (sendingProfile) {
        formData.append('boat_image', {
          uri: boatphoto,
          type: 'image/jpeg', // or photo.type
          name: 'boat_image',
        });
      }
      formData.append('boat_maker', boatmarker);
      formData.append('boat_length', boatlength);
      formData.append('home_port', homeport);
      formData.append('vhf_Radio', VHFIcon ? 1 : 0);
      formData.append('cb_radio', CbIcon ? 1 : 0);
      formData.append('visual_distress_signals', VisualIcon ? 1 : 0);
      formData.append('epirb', EPIRBIcon ? 1 : 0);
      formData.append('life_raft', LifeIcon ? 1 : 0);

        console.log(formData, 'sending to aApi');
      dispatch(updateBoatInfo(formData));

      setSendingProfile(false);
    }
  }

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
                      source={VHFIcon ? icons.ic_donex : icons.ic_not_donex}
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
                      source={CbIcon ? icons.ic_donex : icons.ic_not_donex}
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
                      source={EPIRBIcon ? icons.ic_donex : icons.ic_not_donex}
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
                      source={LifeIcon ? icons.ic_donex : icons.ic_not_donex}
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
                      source={VisualIcon ? icons.ic_donex : icons.ic_not_donex}
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
                  onPress={() => Save()}
                  // onPress={() => alert()}
                />
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
          <Loader isLoading={auth.loading} isAbsolute />
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
