import React, {useState} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../assets';
import {strings} from '../../../localization';
import {colors} from '../../../utilities/constants';

const {width, height} = Dimensions.get('window');

const dummyImg =
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80';
const data = [
  {
    name: strings.pending_lcr,
    navigate: 'ChangeLanguage',
    img: icons.ic_pending_lcr,
  },
  {
    name: strings.lcr_list,
    navigate: 'aboutUs',
    img: icons.ic_LCR,
  },
  {
    name: strings.Tournament_rules,
    navigate: 'Information',
    img: icons.ic_pending_lcr,
  },
  {
    name: strings.Tag,
    navigate: 'Help',
    img: icons.ic_fisherman,
  },
  {
    name: strings.Video_tips,
    navigate: 'abc',
    img: icons.ic_videoTips,
  },
  {
    name: strings.LCR_filter,
    navigate: 'ChangeLanguage',
    img: icons.ic_filter,
  },
  {
    name: strings.Catch_report,
    navigate: 'aboutUs',
    img: icons.ic_map,
  },
  {
    name: strings.Survey,
    navigate: 'Information',
    img: icons.ic_pending_lcr,
  },
  {
    name: strings.Important_links,
    navigate: 'Help',
    img: icons.ic_Important,
  },
  {
    name: strings.Members,
    navigate: 'abc',
    img: icons.ic_Users,
  },
  {
    name: strings.Friends,
    navigate: 'aboutUs',
    img: icons.ic_Notifications,
  },
  {
    name: strings.Gallery,
    navigate: 'Information',
    img: icons.ic_Gallery,
  },
  {
    name: strings.My_Profile,
    navigate: 'Help',
    img: icons.ic_profile,
  },
  {
    name: strings.About,
    navigate: 'abc',
    img: icons.ic_About,
  },
  {
    name: strings.Privacy,
    navigate: 'Help',
    img: icons.ic_pending_lcr,
  },
  {
    name: strings.Terms,
    navigate: 'abc',
    img: icons.ic_pending_lcr,
  },
  {
    name: strings.Contact,
    navigate: 'Help',
    img: icons.ic_pending_lcr,
  },
  {
    name: strings.Settings,
    navigate: 'abc',
    img: icons.ic_settings,
  },
  {
    name: strings.Logout,
    navigate: 'abc',
    img: icons.ic_logout,
  },
];

const DrawerComp = ({navigation, ...props}) => {
  console.log(navigation, 'navigationnavigation in drwaer');

  const pressHnadler = screen => {
    console.log(screen, 'where we are navigating...');
    navigation.closeDrawer();
    navigation.navigate(screen);
  };
  // const signOut = () => {
  //     store.dispatch(logoutUser())
  // }

  return (
    <ImageBackground source={icons.ic_signup_bg} style={styles.image}>
      <Image
        source={{uri: dummyImg}}
        style={{
          height: moderateScale(140),
          width: moderateScale(140),
          borderRadius: moderateScale(70),
          alignSelf: 'center',
          marginTop: moderateScale(50),
        }}
      />
      <Text
        style={{
          fontFamily: fonts.semiBold,
          fontSize: moderateScale(14),
          color: colors.white1,
          paddingHorizontal: moderateScale(5),
          alignSelf: 'center',
          marginTop: moderateScale(5),
        }}>
        Developer
      </Text>
      <ScrollView style={{...styles.container, marginTop: 10}}>
        {data.map((val, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                flexDirection: 'row',
                margin: 10,
              }}
              onPress={() => alert(index)}>
              <Image
                source={val.img}
                style={{
                  height: moderateScale(25),
                  width: moderateScale(25),
                }}
              />
              <Text
                style={{
                  fontFamily: fonts.semiBold,
                  fontSize: moderateScale(16),
                  color: colors.white1,
                  paddingHorizontal: moderateScale(5),
                }}>
                {val.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '100%',
  },
});

export default DrawerComp;
