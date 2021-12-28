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
  Modal,
  TouchableOpacity,
} from 'react-native';
// internal libraries


import EmergencyContacts from './FriendEmergencyContacts';
import LCR from './FriendLCR';
import styles from './styles';

// ecternal libraries
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {moderateScale} from 'react-native-size-matters';
import FriendBoatInfo from './FriendBoatInfo';
import { Header } from '../../../components/common';
import { fonts, icons } from '../../../../assets';
import { colors } from '../../../utilities/constants';
import { strings } from '../../../localization';
import { layout } from '../../../utilities/layout';
import { useSelector } from 'react-redux';
import TimeAgo from 'react-native-timeago';

const Tab = createMaterialTopTabNavigator();

const FriendProfileScreen = ({navigation , route}) => {
  const { item } = route.params;
  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);

  console.log(app, 'appp in friendprofile   page>>>>>>>>>>');
  console.log(auth, 'auth in friendprofile page >>>>>>>>>>');
  console.log(item, 'memberlist on friendprofile screen  >>>>>>>>>>');
  const [state, setState] = useState({
    color: {
      box1: colors.primary,
      box2: colors.primary,
      // text1:colors.white1,
      // text2:colors.black1,
    },
  });
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const {color, membersList} = state;
  function onButtonPressed(value) {
    // box1 pressed.

    if (value === true) {
      // Change box1 to red, and box2 to blue
      setState({
        color: {box1: colors.primary},
        onPress: setModalVisible1(true),
      });
      if (value === true) {
      setTimeout(() => {
        setModalVisible1(false)
        setState({
          color : {box1 : colors.green1}
        })
      }, 1000);
    }
    }
    //  else {
    //   // box2 pressed
    //   // Change box1 to blue, and box2 to blue
    //   setState({
    //     color: {box1: colors.primary, box2: colors.red1},
       
    //   });
    // }
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
          // onRightPress={() => {
          //   navigation.navigate('Edit');
          // }}
          // rightIconSource={icons.location}
          // rightIconStyle={{
          //   tintColor: colors.white1,
          //   position: 'absolute',
          // }}
        />
        <ScrollView style={{flex: 1}}>
          <View style={styles.contentcontainer}>
            <View style={styles.uploadContainer}>
              <Image
                source={{uri: item.profile_picture}}
                resizeMode="cover"
                style={styles.big}
              />
            </View>
            <Text style={styles.nameStyle}>{item.full_name}</Text>
            <Text style={styles.nameStyle}>{item.user_name}</Text>
            
              <View
              style={styles.buttonView}>
                <Text style={styles.nameStyle1}>MembersSince :
                <TimeAgo
                time={item.created_at}
              />
                  </Text>
                <View
                  style={styles.buttonviewstyle}>
                    {onButtonPressed !== true ? ( <TouchableHighlight
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
                       requested
                      </Text>
                    )}
                  </TouchableHighlight>) : null }
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
        <Modal
          animationType={'none'}
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {}}>
          <SafeAreaView>
            <View style={styles.modalcontent}>
              <View style={styles.modalcontainer}>
                <Text style={styles.modaltextlogo}>Lokahi</Text>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={styles.modaltextstyle}>
                  {strings.areyouwant}
                </Text>
                <View style={styles.modalbuttonviewstyle}>
                  {/* <TouchableOpacity
                    style={styles.modalbuttonstyle}
                    underlayColor={colors.white1}
                    // onPress={() => onButtonPressed(true)}
                    onPress={() => {
                      setModalVisible1(false);
                    }}>
                    <Text style={styles.modalbuttontextstyle}>Add</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalbuttonstyle}
                    underlayColor={colors.white1}
                    // onPress={() => onButtonPressed(false)}
                    onPress={() => {
                      setModalVisible1(false);
                    }}>
                    <Text style={styles.modalbuttontextstyle}>cancel</Text>
                  </TouchableOpacity> */}
                </View>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
        <Modal
          animationType={'none'}
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {}}>
          <SafeAreaView>
            <View style={styles.modalcontent}>
              <View style={styles.modalcontainer}>
                <Text style={styles.modaltextlogo}>Lokahi</Text>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={styles.modaltextstyle}>
                  {strings.areyouwanttounlock}
                </Text>
                <View style={styles.modalbuttonviewstyle}>
                  <TouchableOpacity
                    style={styles.modalbuttonstyle}
                    underlayColor={colors.white1}
                    // onPress={() => onButtonPressed(true)}
                    onPress={() => {
                      setModalVisible2(false);
                    }}>
                    <Text style={styles.modalbuttontextstyle}>Unblock</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalbuttonstyle}
                    underlayColor={colors.white1}
                    // onPress={() => onButtonPressed(false)}
                    onPress={() => {
                      setModalVisible2(false);
                    }}>
                    <Text style={styles.modalbuttontextstyle}>cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default FriendProfileScreen;
