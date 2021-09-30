import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {layout} from '../../../utilities/layout';
import {moderateScale} from 'react-native-size-matters';
//external libraries
import Pdf from 'react-native-pdf';
import { Header } from '../../../components/common/Header';
import { fonts, icons } from '../../../../assets';
import { colors } from '../../../utilities/constants';

const source = require('./TermsandConditionpdf.pdf');
const TermsandConditions = ({navigation}) => {
  return (
    <SafeAreaView style={styles.content}>
      <Header
        containerStyle={{
          backgroundColor: 'transparent',
          height: moderateScale(60),
        }}
        title={'Terms and Conditions'}
        titleStyle={{fontFamily: fonts.bold}}
        leftIconSource={icons.ic_back_white}
        leftButtonStyle={{
          tintColor: colors.white1,
        }}
        onLeftPress={() => {
          navigation.goBack();
        }}
      />
      <Pdf source={source} style={styles.pdf} loading="Loading PDF..." />
    </SafeAreaView>
  );
};

export default TermsandConditions;

const styles = StyleSheet.create({
  content: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: colors.secondry,
  },
  pdf: {
    flex: 1,
    width: layout.size.width,
  },
});
