import React from 'react';
import { SafeAreaView, StyleSheet, Text, ImageBackground, Dimensions } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { fonts, icons } from '../../../../assets';
import { Header } from '../../../components/common/Header';
import { strings } from '../../../localization';
import { colors } from '../../../utilities/constants';

const Survey = ({navigation}) => {
	return (
		<ImageBackground source={icons.ic_signin_bg} style={styles.image}>
			<SafeAreaView style={styles.content}>
      <Header
            containerStyle={{
              backgroundColor: colors.transparent,
              height: moderateScale(60),
            }}
            title={strings.Survey}
            titleStyle={{fontFamily: fonts.bold}}
            leftIconSource={icons.ic_back_white}
			leftButtonStyle={{
				tintColor:colors.white1
			}}
            onLeftPress={() => {
              navigation.goBack();
            }}
          />
				
			</SafeAreaView>
		</ImageBackground>
	);
};

export default Survey;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	
    image: {
      flex: 1,
      height: '100%',
    },
	
  content: {
    position: 'relative',
    display: 'flex',
    flex: 1,
  },
});
