import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text
} from 'react-native';
// internal libraries
import {fonts, icons} from '../../../../assets';
import {Header} from '../../../components/common/Header';
import {strings} from '../../../localization';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';
import BoatInfo from './BoatInfo';
import EmergencyContacts from './EmergencyContacts';
import LCR from './LCR';
import styles from './styles';

// ecternal libraries
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {moderateScale} from 'react-native-size-matters';

const Tab = createMaterialTopTabNavigator();

const MYprofile = ({navigation}) => {
  return (
    <ImageBackground source={icons.ic_signup_bg} style={styles.image}>
      <SafeAreaView style={styles.content}>
        <Header
          containerStyle={{
            backgroundColor: colors.transparent,
            height: moderateScale(60),
          }}
          title={strings.My_Profile}
          titleStyle={{fontFamily: fonts.bold}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />
<ScrollView style={{flex:1}}>
        <View style={styles.contentcontainer}>
          <View style={styles.uploadContainer}>
            <Image
              source={icons.signin_bg_ic}
              resizeMode="contain"
              style={{
                borderRadius: moderateScale(100),
                height:  layout.size.height/4,
                width:  layout.size.height/4,
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
          <Text style={styles.nameStyle}>phonen numvber</Text>
          <Text style={styles.nameStyle}>CM Holder: no</Text>
          <Text style={styles.nameStyle}>city: mohali</Text>

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
          <Tab.Screen name="Boat Info" component={BoatInfo} />
          <Tab.Screen name="Emergency Contact" component={EmergencyContacts} />
          <Tab.Screen name="LCR" component={LCR} />
        </Tab.Navigator>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default MYprofile;
