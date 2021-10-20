import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Share,
  ScrollView,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../../assets';
import {Header} from '../../../../components/common/Header';
import {strings} from '../../../../localization';
import {colors} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';

import styles from './styles';

const LCRDetails = ({navigation}) => {
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
          title={'LCR Detail'}
          titleStyle={{fontFamily: fonts.bold}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.black1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
          onRightPress={() => {
            navigation.navigate('EditLCRDetails');
          }}
          rightIconSource={icons.ic_edit}
          rightIconStyle={{
            height: 20,
            width: 20,
            tintColor: colors.primary,
          }}
        />
        <ScrollView style={{flex: 1}}>
          <View style={styles.line}></View>
          <View style={styles.viewstyle}>
            <View
              style={{
                flexDirection: 'column',
                width: layout.size.width / 2,
              }}>
              <Text style={styles.doubletextstyle}>Submitted By</Text>
              <Text style={styles.style}>Hello</Text>
            </View>
                {/* when click the owner will click naviagte to own my profile screen , 
                when ownwer will select differnt user profile to add or block in friend list then
                navigate to friendprofilescreen */}
            <TouchableOpacity
              style={{
                height: moderateScale(50),
                width: moderateScale(50),
                right: 20,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.4,
                elevation: 3,

                borderRadius: 50,
              }}
              onPress={() =>{
                navigation.navigate('FriendProfileScreen')
              }}>
              <Image
                source={icons.no_image}
                resizeMod="cover"
                style={styles.simage}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.line}></View>
          <View
            style={{
              height: layout.size.height / 3.9,
              width: layout.size.height / 3.9,
              borderRadius: moderateScale(110),
              alignSelf: 'center',
              margin: 10,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.4,
              elevation: 3,
            }}>
            <Image
              resizeMod="contain"
              source={icons.no_image}
              style={styles.bgImg}
            />
          </View>
          <View style={styles.line}></View>
          <View style={styles.viewstylesingle}>
            <Text style={styles.singletextstyle}>{strings.Fishingtype}</Text>
            <Text style={styles.righttextstyle}>{'Whipping'}</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.viewstylesingle}>
            <Text style={styles.singletextstyle}>{strings.Typeoffish}</Text>
            <Text style={styles.righttextstyle}>{'Omilu'}</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.viewstylesingle}>
            <Text style={styles.singletextstyle}>{strings.Fishweight}</Text>
            <Text style={styles.righttextstyle}>{'34'}</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.viewstylesingle}>
            <Text style={styles.singletextstyle}>{strings.Efforts}</Text>
            <Text style={styles.righttextstyle}>{'2.00'}</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.viewstylemap}></View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LCRDetails;
