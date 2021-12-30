import React, { useEffect, useState, useContext, useRef } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { WebView } from 'react-native-webview';
import { fonts, icons } from '../../../../assets';
import { Header } from '../../../components/common';
import { colors } from '../../../utilities/constants';
import { layout } from '../../../utilities/layout';

const FishingWebsite = ({navigation, route}) => {
  console.log(route, 'route>>>>>>>>>>>>.url');

  const {title, url} = route.params;

  console.log(url, 'route>>>>>>>>>>>>.url');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white1,
      }}>
      <Header
        containerStyle={{
          backgroundColor: colors.secondry,
          height: moderateScale(60),
        }}
        title={title}
        titleStyle={{fontFamily: fonts.bold}}
        leftIconSource={icons.ic_back_white}
        leftButtonStyle={{
          tintColor: colors.white1,
        }}
        onLeftPress={() => {
          navigation.goBack();
        }}
      />
      <WebView
        startInLoadingState={true}
        originWhitelist={['*']}
        source={{uri: url}}
        style={{width: layout.size.width, marginBottom: 0}}
      />
    </View>
  );
};
export default FishingWebsite;
