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
  KeyboardAvoidingView
} from 'react-native';
// import Pdf from 'react-native-pdf';
import {moderateScale} from 'react-native-size-matters';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {fonts, icons} from '../../../../../assets';
import {Header} from '../../../../components/common/Header';
import {strings} from '../../../../localization';
import {colors} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';

const BInfo = () => {
  const [state, setState] = useState({
    iscbradio: '',
    productPhoto:'',
  });
  const {iscbradio, password , productPhoto} = state;
  const _onChangeText = key => val => {
    setState({...state, [key]: val});
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white1}}>
      <View
        style={{
          flex: 1,
        }}>
        <ImageBackground source={icons.ic_signin_bg} style={styles.image}>
          <ScrollView
            style={{flex:1}}
            >
              <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.subContainer}
              contentContainerStyle={styles.subContentContainer}
              keyboardShouldPersistTaps={'always'}
              showsVerticalScrollIndicator={false}>
              
           
              <View style={styles.uploadContainer}>
                <Image
                  source={ icons.signin_bg_ic}
                  resizeMode="contain"
                  style={{
                    borderRadius: moderateScale(100),
                    height:'100%' ,
                    width: '100%' ,
                  }}
                />
                {/* <View style={styles.uploadContent}>
                  <TouchableOpacity
                    style={[styles.uploadStoreBtn]}
                    onPress={() => _doOpenOption('productPhoto')}>
                    <Image
                      style={styles.logo2}
                      source={icons.ic_cateagory}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View> */}
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
                <View style={styles.rowContent3}>
                  <Text style={styles.textstyle}>{strings.vhfradio}</Text>
                  <Image
                    source={ icons.ic_donex}
                    style={styles.checkIcon}
                  />
                </View>
                
              </View>
            </View>
            <View style={styles.Containertable}>
              <View style={styles.tableRow}>
                <View style={styles.rowContent3}>
                  <Text style={styles.textstyle}>{strings.cbradio}</Text>
                  <Image
                    source={ icons.ic_donex}
                    style={styles.checkIcon}
                  />
                </View>
              </View>
            </View>
            <View style={styles.Containertable}>
              <View style={styles.tableRow}>
                <View style={styles.rowContent3}>
                  <Text style={styles.textstyle}>{strings.epirb}</Text>
                  <Image
 source={ icons.ic_donex}
                    style={styles.checkIcon}
                  />
                </View>
              </View>
            </View>
            
            <View style={styles.Containertable}>
              <View style={styles.tableRow}>
                <View style={styles.rowContent3}>
                  <Text style={styles.textstyle}>{strings.liferaft}</Text>
                  <Image
                    source={iscbradio ? icons.ic_donex : icons.ic_not_donex}
                    style={styles.checkIcon}
                  />
                </View>
              </View>
            </View>
            <View style={styles.Containertable}>
              <View style={styles.tableRow}>
                <View style={styles.rowContent3}>
                  <Text style={styles.textstyle}>
                    {strings.visualdistressignal}
                  </Text>
                  <Image
                    source={iscbradio ? icons.ic_donex : icons.ic_not_donex}
                    style={styles.checkIcon}
                  />
                </View>
              </View>
            </View>
            </KeyboardAvoidingView>
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
  uploadContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(200),
    width: moderateScale(200),
    alignSelf: 'center',
    marginTop: moderateScale(55),
    borderRadius: moderateScale(100),
    borderColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    borderWidth: 0.5,
  },
});

export default BInfo;
