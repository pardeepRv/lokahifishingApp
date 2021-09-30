import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
//external libraries
import Pdf from 'react-native-pdf';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../assets';
import {Header} from '../../../components/common/Header';
import { strings } from '../../../localization';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

const source = require('./TermsandConditionpdf.pdf');
const TermsandConditions = ({navigation}) => {
  return (
    <SafeAreaView style={styles.content}>
      <Header
        containerStyle={{
          backgroundColor: colors.transparent,
          height: moderateScale(60),
        }}
        title={strings.Terms_and_Conditions}
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
export default TermsandConditions;