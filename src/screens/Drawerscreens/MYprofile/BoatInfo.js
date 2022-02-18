import React, { useState, useEffect } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import Pdf from 'react-native-pdf';
import { moderateScale } from 'react-native-size-matters';
import { fonts, icons } from '../../../../assets';
import { Loader } from '../../../components/common/Loader';
import { strings } from '../../../localization';
import { colors } from '../../../utilities/constants';
import { layout } from '../../../utilities/layout';
import { useDispatch, useSelector } from 'react-redux';

const BoatInfo = ({ navigation }) => {
  // console.log(props, 'datadata in emememeenekebev');
  let auth = useSelector(state => state.auth);
  console.log(auth, 'auth in boatinfo  page>>>>>>>>>>');
  const [state, setState] = useState({
    iscbradio: '',
  });

  const { iscbradio, password } = state;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white1 }}>
      <View
        style={{
          flex: 1,
        }}>
        <ImageBackground source={icons.ic_signup_bg} style={styles.image}>
          <ScrollView
            style={styles.subContainer}
            contentContainerStyle={styles.subContentContainer}
            keyboardShouldPersistTaps={'always'}
            showsVerticalScrollIndicator={false}>
            <View style={styles.Container}>
              <View style={styles.rowContent}>
                <Image
                  source={icons.signin_bg_ic}
                  source={
                    auth && auth.userAllData && auth.userAllData.boat_info && auth.userAllData.boat_info.length > 0 ?
                      { uri: auth && auth.userAllData && auth.userAllData.boat_info[0].boat_image }
                      : icons.loginLogo
                  }
                  resizeMode="cover"
                  style={{
                    height: moderateScale(90),
                    width: moderateScale(90),
                    left: 10,
                    marginTop: 5,
                    borderRadius: 50,
                  }}
                />
                <View style={styles.rowContent2}>
                  <Text style={styles.nameStyle}>
                    {auth && auth.userAllData && auth.userAllData.boat_info && auth.userAllData.boat_info.length > 0 ?
                      auth && auth.userAllData && auth.userAllData.boat_info[0].boat_maker
                      : strings.boatmaker}
                  </Text>
                  <Text
                    style={{
                      height: moderateScale(2),
                      width: layout.size.width / 1.8,
                      backgroundColor: colors.white1,
                    }}></Text>

                  <Text style={styles.nameStyle}>
                    {auth && auth.userAllData && auth.userAllData.boat_info && auth.userAllData.boat_info.length > 0 ?
                      auth && auth.userAllData && auth.userAllData.boat_info[0].boat_length
                      : strings.boatlength}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.Containertable}>
              <TouchableOpacity style={styles.rowContent3}>
                <Text style={styles.texthomeport}>
                  {strings.homeport}
                </Text>
                <Text style={styles.textstyle}>
                  {auth && auth.userAllData && auth.userAllData.boat_info && auth.userAllData.boat_info.length > 0 && auth.userAllData.boat_info[0].home_port}
                  {/* {auth?.userAllData?.boat_info?.home_port} */}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Containertable}>
              <View style={styles.rowContent3}>
                <Text style={styles.textstyle}>{strings.vhfradio}</Text>
                <Image
                  source={
                    // auth?.userAllData?.boat_info?.VHF_Radio
                    auth && auth.userAllData && auth.userAllData.boat_info && auth.userAllData.boat_info.length > 0 && auth.userAllData.boat_info[0].VHF_Radio
                      ? icons.ic_donex
                      : icons.ic_not_donex
                  }
                  style={styles.checkIcon}
                />
              </View>
            </View>
            <View style={styles.Containertable}>
              <View style={styles.rowContent3}>
                <Text style={styles.textstyle}>{strings.cbradio}</Text>
                <Image
                  source={
                    // auth?.userAllData?.boat_info?.CB_Radio
                    auth && auth.userAllData && auth.userAllData.boat_info && auth.userAllData.boat_info.length > 0 && auth.userAllData.boat_info[0].CB_Radio

                      ? icons.ic_donex
                      : icons.ic_not_donex
                  }
                  style={styles.checkIcon}
                />
              </View>
            </View>
            <View style={styles.Containertable}>
              <View style={styles.rowContent3}>
                <Text style={styles.textstyle}>{strings.epirb}</Text>
                <Image
                  source={
                    // auth?.userAllData?.boat_info?.EPIRB
                    auth && auth.userAllData && auth.userAllData.boat_info && auth.userAllData.boat_info.length > 0 && auth.userAllData.boat_info[0].EPIRB
                      ? icons.ic_donex
                      : icons.ic_not_donex
                  }
                  style={styles.checkIcon}
                />
              </View>
            </View>

            <View style={styles.Containertable}>
              <View style={styles.rowContent3}>
                <Text style={styles.textstyle}>{strings.liferaft}</Text>
                <Image
                  source={
                    // auth?.userAllData?.boat_info?.Life_Raft
                    auth && auth.userAllData && auth.userAllData.boat_info && auth.userAllData.boat_info.length > 0 && auth.userAllData.boat_info[0].Life_Raft
                      ? icons.ic_donex
                      : icons.ic_not_donex
                  }
                  style={styles.checkIcon}
                />
              </View>
            </View>
            <View style={styles.Containertable}>
              <View style={styles.rowContent3}>
                <Text style={styles.textstyle}>
                  {strings.visualdistressignal}
                </Text>
                <Image
                  source={
                    // auth?.userAllData?.boat_info?.Visual_Distress_Signals
                    auth && auth.userAllData && auth.userAllData.boat_info && auth.userAllData.boat_info.length > 0 && auth.userAllData.boat_info[0].Visual_Distress_Signals
                      ? icons.ic_donex
                      : icons.ic_not_donex
                  }
                  style={styles.checkIcon}
                />
              </View>
            </View>
          </ScrollView>
          <Loader isLoading={auth.loading} isAbsolute />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    position: 'relative',
    display: 'flex',
    flex: 1,
  },
  pdf: {
    width: '100%',
    height: layout.size.height / 2.5,
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  contentcontainer: {
    height: layout.size.height / 2.5,
  },
  viewStyle: {
    flexDirection: 'row',
    flex: 0.9,
  },
  Container: {
    backgroundColor: colors.lightTransparent,
    marginTop: moderateScale(15),
    height: moderateScale(100),
  },
  Containertable: {
    backgroundColor: colors.lightTransparent,
    marginTop: moderateScale(15),
    height: moderateScale(50),
  },
  tableRow: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  rowContent: {
    flexDirection: 'row',
  },
  rowContent2: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
  },
  rowContent3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer: {
    paddingHorizontal: moderateScale(15),
  },
  subContentContainer: {
    paddingBottom: moderateScale(40),
  },
  nameStyle: {
    height: moderateScale(35),
    width: layout.size.width / 2,
    top: 2,
    fontFamily: fonts.bold,
    fontSize: moderateScale(22),
    color: colors.primary,
    paddingHorizontal: moderateScale(10),
  },
  dateStyle: {
    top: 10,
    height: moderateScale(45),
    width: moderateScale(200),
    left: 20,
    fontFamily: fonts.regular,
    fontSize: moderateScale(22),
    color: colors.white1,
    paddingHorizontal: moderateScale(20),
  },
  textstyle: {
    fontSize: 22,
    width: layout.size.width / 1.5,
    color: colors.white1,
    top: moderateScale(8),
    left: moderateScale(10),
    textAlign: 'left',
    fontWeight: 'bold',
    padding: 5,
    backgroundColor: colors.transparent,
  },
  texthomeport: {
    fontSize: 22,
    width: layout.size.width / 3,
    color: colors.white1,
    top: moderateScale(8),
    left: moderateScale(10),
    textAlign: 'left',
    fontWeight: 'bold',
    padding: 5,
    backgroundColor: colors.transparent,
  },

  checkIcon: {
    right: 15,
    borderColor: colors.white1,
    borderWidth: 0,
    borderRadius: 16,
    top: moderateScale(2),
  },
});

export default BoatInfo;
