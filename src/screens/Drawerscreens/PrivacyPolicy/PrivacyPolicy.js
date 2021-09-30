import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Pdf from 'react-native-pdf';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../assets';
import {Header} from '../../../components/common/Header';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

const PrivacyPolicy = ({navigation}) => {
  return (
    <SafeAreaView style={styles.content}>
      <Header
        containerStyle={{
          backgroundColor: 'transparent',
          height: moderateScale(60),
        }}
        title={'Privacy Policy'}
        titleStyle={{fontFamily: fonts.bold}}
        leftIconSource={icons.ic_back_white}
        leftButtonStyle={{
          tintColor: colors.white1,
        }}
        onLeftPress={() => {
          navigation.goBack();
        }}
      />
      <Pdf
        source={require('./privacyPolicypdf.pdf')}
        style={styles.pdf}
        loading="Loading PDF..."
      />
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
    height: layout.size.height,
  },
});
export default PrivacyPolicy;
