import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {icons} from '../../../../../assets';
import {layout} from '../../../../utilities/layout';

const FriendLCR = () => {
  return (
    <ImageBackground
      source={icons.ic_signup_bg}
      style={styles.image}></ImageBackground>
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
    height: '100%',
  },
  contentcontainer: {
    height: layout.size.height / 2.5,
    // marginTop: layout.size.height / 4,
    // backgroundColor:'#000'
  },
});

export default FriendLCR;
