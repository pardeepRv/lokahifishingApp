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
} from 'react-native';
// import Pdf from 'react-native-pdf';
import {moderateScale} from 'react-native-size-matters';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {fonts, icons} from '../../../../assets';
import {Header} from '../../../components/common/Header';
import {strings} from '../../../localization';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

const BoatInfo = () => {
  const [state, setState] = useState({
    iscbradio: '',
  });
  const {iscbradio, password} = state;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white1}}>
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
                  resizeMode="contain"
                  style={{
                    height: moderateScale(100),
                    width: moderateScale(100),
                    left: 10,
                    marginTop: 5,
                    borderRadius: 100/1,

                  }}
                />
                <View style={styles.rowContent2}>
                  <Text style={styles.nameStyle}>{strings.boatmaker}</Text>
                  <View style={{height:1 ,top:5,left :20, backgroundColor:colors.white1 }}></View>

                  <Text style={styles.nameStyle}>{strings.boatlength}</Text>

                </View>
              </View>
            </View>
            <View style={styles.Containertable}>
              <View style={styles.tableRow}>
                <TouchableOpacity style={styles.rowContent3}>
                  <Text style={styles.textstyle}>{strings.homeport}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.Containertable}>
              <View style={styles.tableRow}>
                <TouchableOpacity style={styles.rowContent3}>
                  <Text style={styles.textstyle}>{strings.vhfradio}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.Containertable}>
              <View style={styles.tableRow}>
                <TouchableOpacity style={styles.rowContent3}>
                  <Text style={styles.textstyle}>{strings.cbradio}</Text>
                  <Image
                    source={iscbradio ? icons.ic_donex : icons.ic_not_donex}
                    style={styles.checkIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.Containertable}>
              <View style={styles.tableRow}>
                <TouchableOpacity style={styles.rowContent3}>
                  <Text style={styles.textstyle}>{strings.epirb}</Text>
                  <Image
                    source={iscbradio ? icons.ic_donex : icons.ic_not_donex}
                    style={styles.checkIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.Containertable}>
              <View style={styles.tableRow}>
                <TouchableOpacity style={styles.rowContent3}>
                  <Text style={styles.textstyle}>{strings.liferaft}</Text>
                  <Image
                    source={iscbradio ? icons.ic_donex : icons.ic_not_donex}
                    style={styles.checkIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.Containertable}>
              <View style={styles.tableRow}>
                <TouchableOpacity style={styles.rowContent3}>
                  <Text style={styles.textstyle}>
                    {strings.visualdistressignal}
                  </Text>
                  <Image
                    source={iscbradio ? icons.ic_donex : icons.ic_not_donex}
                    style={styles.checkIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
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
    height: layout.size.height / 6,
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
    flexDirection: 'column',
  },
  rowContent3: {
    flex: 1,
    
  },
  subContainer: {
    paddingHorizontal: moderateScale(15),
  },
  subContentContainer: {
    paddingBottom: moderateScale(40),
  },
  nameStyle: {
    top: 15,
    height: moderateScale(45),
    width: moderateScale(200),
    left: 20,
    fontFamily: fonts.regular,
    fontSize: moderateScale(22),
    color: colors.primary,
    paddingHorizontal: moderateScale(20),
    fontWeight:"bold",
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
    color: colors.white1,
    top: moderateScale(8),
    left: moderateScale(10),
    textAlign: 'left',
    fontWeight:"bold",
    padding: 5,
    backgroundColor: colors.transparent,
  },

  checkIcon: {
    top: moderateScale(-30),
    alignSelf: 'flex-end',
    right: 15,
    borderColor: colors.white1,
    borderWidth: 0,
    borderRadius: 16,
  },
});

export default BoatInfo;
