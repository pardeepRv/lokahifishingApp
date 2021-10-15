import React, { useEffect, useState, useContext, useRef } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { fonts, icons } from '../../../../../assets';
import { Header } from '../../../../components/common/Header';
import { colors } from '../../../../utilities/constants';
const OffShoreFishing = ({ navigation }) => {


	
	return (
    <ImageBackground source={icons.LeaderBoard} style={styles.bgImg}>
    <Header
       containerStyle={{
         backgroundColor: 'transparent',
         height: moderateScale(60),
       }}
       blackTitle
       title={'Select Fish Type'}
       titleStyle={{fontFamily: fonts.bold}}
       leftIconSource={icons.ic_back_white}
       leftButtonStyle={{
         tintColor: colors.black1,
       }}
       onLeftPress={() => {
         navigation.goBack();
       }}
     />
			
		</ImageBackground>
	);
};

export default OffShoreFishing;



const styles = StyleSheet.create({
	bgImg: {
		width: '100%',
		height: '100%',
		flexDirection: 'column',
		alignItems: 'center',
	},
	
});
