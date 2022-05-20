import React, {useEffect, useRef, useState} from 'react';
import {
  findNodeHandle,
  PixelRatio,
  Platform,
  SafeAreaView,
  UIManager,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../../assets';
import {Header} from '../../../../components/common/Header';
import {MyViewManager} from '../../../../components/common/MyViewManager';
import {colors} from '../../../../utilities/constants';

const createFragment = viewId =>
  UIManager.dispatchViewManagerCommand(
    viewId,
    // we are calling the 'create' command
    UIManager.MyViewManager.Commands.create.toString(),
    [viewId],
  );

const AndroidMap = ({navigation}) => {
  const ref = useRef(null);
  useEffect(() => {
    if (Platform.OS === 'android') {
      const viewId = findNodeHandle(ref.current);
      createFragment(viewId);
    }
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white1}}>
      <Header
        containerStyle={{
          backgroundColor: colors.secondry,
          height: moderateScale(60),
        }}
        title={'Map'}
        titleStyle={{fontFamily: fonts.bold}}
        leftIconSource={icons.ic_back_white}
        leftButtonStyle={{
          tintColor: colors.white1,
        }}
        onLeftPress={() => {
          navigation.goBack();
        }}
      />
      <View style={{
          marginTop:50
      }}>
      <MyViewManager
        style={{
          height: PixelRatio.getPixelSizeForLayoutSize(400),
          width: PixelRatio.getPixelSizeForLayoutSize(430),
        }}
        ref={ref}
      />
      </View>
     
    </SafeAreaView>
  );
};

export default AndroidMap;
