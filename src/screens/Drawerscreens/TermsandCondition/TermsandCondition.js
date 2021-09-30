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

const source = require('./TermsandConditionpdf.pdf');
const TermsandConditions = () => {
  return (
    <SafeAreaView style={styles.content}>
			<Pdf 
			source={source} 
			style={styles.pdf}
			loading='Loading PDF...'
			 />
    </SafeAreaView>
  );
};

export default TermsandConditions;

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
  },
});
