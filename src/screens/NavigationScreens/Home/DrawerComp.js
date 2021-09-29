import {CommonActions} from '@react-navigation/routers';
import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../assets';
import {strings} from '../../../localization';
import {colors, data} from '../../../utilities/constants';

const {width, height} = Dimensions.get('window');

const dummyImg =
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80';

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

  const reset = () => {
    return navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'authStack'}],
      }),
    );
  };
  return (
    <ImageBackground source={icons.ic_signup_bg} style={styles.image}>
      <Image source={{uri: dummyImg}} style={styles.bgImg} />
      <Text style={styles.username}>Developer</Text>
      <ScrollView style={{...styles.container, marginTop: 10}}>
        {data.map((val, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                flexDirection: 'row',
                margin: 10,
              }}
              onPress={() => (strings.Logout ? reset() : console.log(index))}>
              <Image source={val.img} style={styles.imgStyle} />
              <Text style={styles.nameStyle}>{val.name}</Text>
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
  bgImg: {
    height: moderateScale(140),
    width: moderateScale(140),
    borderRadius: moderateScale(70),
    alignSelf: 'center',
    marginTop: moderateScale(50),
  },
  username: {
    fontFamily: fonts.semiBold,
    fontSize: moderateScale(14),
    color: colors.white1,
    paddingHorizontal: moderateScale(5),
    alignSelf: 'center',
    marginTop: moderateScale(5),
  },
  imgStyle: {
    height: moderateScale(25),
    width: moderateScale(25),
  },
  nameStyle: {
    fontFamily: fonts.semiBold,
    fontSize: moderateScale(16),
    color: colors.white1,
    paddingHorizontal: moderateScale(5),
  },
});

export default DrawerComp;
