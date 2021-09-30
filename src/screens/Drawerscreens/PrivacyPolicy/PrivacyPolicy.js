import React from 'react';
import { SafeAreaView, StyleSheet, Text, ImageBackground, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';
import { layout } from '../../../utilities/layout';

const PrivacyPolicy = () => {
	return (
		<SafeAreaView style={styles.content}>
			<Pdf source={require('./privacyPolicypdf.pdf')} style={styles.pdf} loading='Loading PDF...' />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	content: {
		height: '100%',
		width: '100%',
		flex: 1,
		backgroundColor: '#2c385e',
	},
	pdf: {
		flex: 1,
		width:layout.size.width,
		height:layout.size.height,
	},
});
export default PrivacyPolicy;


