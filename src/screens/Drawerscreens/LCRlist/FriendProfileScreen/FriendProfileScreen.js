import React, {useEffect, useState, useContext, useRef} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
} from 'react-native';
// internal libraries
import {fonts, icons} from '../../../../../assets';

import EmergencyContacts from './FriendEmergencyContacts';
import LCR from './FriendLCR';
import styles from './styles';
import {Header} from '../../../../components/common';
import {colors} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';
import {strings} from '../../../../localization';
// ecternal libraries
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {moderateScale} from 'react-native-size-matters';
import FriendBoatInfo from './FriendBoatInfo';

const Tab = createMaterialTopTabNavigator();

const FriendProfileScreen = ({navigation}) => {
  const [state, setState] = useState({
    color: {
      box1: colors.primary,
      box2: colors.primary,
      // text1:colors.white1,
      // text2:colors.black1,
    },
  });
  const {color, membersList} = state;
  function onButtonPressed(value) {
    // box1 pressed.

    if (value === true) {
      // Change box1 to red, and box2 to blue
      setState({
        color: {box1: colors.green1, box2: colors.primary},
      });
    } else {
      // box2 pressed
      // Change box1 to blue, and box2 to blue
      setState({
        color: {box1: colors.primary, box2: colors.red1},
      });
    }
  }
  return (
    <ImageBackground source={icons.ic_signup_bg} style={styles.image}>
      <SafeAreaView style={styles.content}>
        <Header
          containerStyle={{
            backgroundColor: colors.transparent,
            height: moderateScale(60),
          }}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
          onRightPress={() => {
            navigation.navigate('Edit');
          }}
          rightIconSource={icons.location}
          rightIconStyle={{
            tintColor: colors.white1,
            position: 'absolute',
          }}
        />
        <ScrollView style={{flex: 1}}>
          <View style={styles.contentcontainer}>
            <View style={styles.uploadContainer}>
              <Image
                source={icons.inactivetestimonial}
                resizeMode="contain"
                style={{
                  borderRadius: moderateScale(100),
                  height: layout.size.height/4.2,
      width: layout.size.height/4.2,
                  tintColor: colors.primary,
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
            <Text style={styles.nameStyle}>hello</Text>
            <Text style={styles.nameStyle}>KC</Text>
            <View
              style={{
                flexDirection: 'column',
                height: layout.size.height / 11,
                width: layout.size.width / 1,
                padding: moderateScale(5),
              }}>
              <Text style={styles.nameStyle1}>{strings.memberssince}</Text>
              <View
                style={{
                  padding: moderateScale(5),
                  height: layout.size.height / 11,
                  width: layout.size.width / 1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <TouchableHighlight
                  style={{
                    backgroundColor: state.color.box1,
                    borderColor: colors.black15,
                    borderRadius: moderateScale(10),
                    width: layout.size.width / 3,
                    height: moderateScale(40),
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.4,
                    elevation: 3,
                  }}
                  underlayColor={colors.green1}
                  onPress={() => onButtonPressed(true)}>
                  {state.color.box1 === colors.primary ? (
                    <Text
                      style={{
                        color: colors.white1,
                        fontFamily: fonts.bold,
                        fontSize: moderateScale(16),
                        alignSelf: 'center',
                        fontWeight: 'bold',
                        margin: moderateScale(10),
                      }}>
                      {strings.add}
                    </Text>
                  ) : (
                    <Text
                      style={{
                        color: colors.black1,
                        fontFamily: fonts.bold,
                        fontSize: moderateScale(16),
                        alignSelf: 'center',
                        fontWeight: 'bold',
                        margin: moderateScale(10),
                      }}>
                      {strings.add}
                    </Text>
                  )}
                </TouchableHighlight>
                <TouchableHighlight
                  style={{
                    backgroundColor: state.color.box2,
                    borderColor: colors.black15,
                    borderRadius: moderateScale(10),
                    width: layout.size.width / 3,
                    height: moderateScale(40),
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.4,
                    elevation: 3,
                  }}
                  underlayColor={colors.red1}
                  onPress={() => onButtonPressed(false)}>
                  {state.color.box2 === colors.primary ? (
                    <Text
                      style={{
                        color: colors.white1,
                        fontFamily: fonts.bold,
                        fontSize: moderateScale(16),
                        alignSelf: 'center',
                        fontWeight: 'bold',
                        margin: moderateScale(10),
                      }}>
                      {strings.block}
                    </Text>
                  ) : (
                    <Text
                      style={{
                        color: colors.black1,
                        fontFamily: fonts.bold,
                        fontSize: moderateScale(16),
                        alignSelf: 'center',
                        fontWeight: 'bold',
                        margin: moderateScale(10),
                      }}>
                      {strings.block}
                    </Text>
                  )}
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </ScrollView>

        <Tab.Navigator
          tabBarOptions={{
            style: {
              backgroundColor: colors.secondry,
            },
            allowFontScaling: false,
            labelStyle: {
              color: colors.white1,
              fontWeight: '700',
              shadowColor: colors.black1,
              shadowOffset: {width: 1, height: 1},
              shadowOpacity: 1,
              shadowRadius: 0,
              textTransform: 'none',
              fontSize: 14,
            },
            indicatorStyle: {
              backgroundColor: colors.white1,
            },
          }}>
          <Tab.Screen name="Boat Info" component={FriendBoatInfo} />
          <Tab.Screen name="Emergency Contact" component={EmergencyContacts} />
          <Tab.Screen name="LCR" component={LCR} />
        </Tab.Navigator>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default FriendProfileScreen;
