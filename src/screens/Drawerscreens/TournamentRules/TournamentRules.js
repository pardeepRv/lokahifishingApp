import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Pdf from 'react-native-pdf';
import { moderateScale } from 'react-native-size-matters';
import { fonts, icons } from '../../../../assets';
import { Header } from '../../../components/common/Header';
import { strings } from '../../../localization';
import { colors } from '../../../utilities/constants';

const Tab = createMaterialTopTabNavigator();

const PDFOffshore = () => {
  return (
    <Pdf
      source={require('./LokahiRules&Regulations.docx.pdf')}
      style={styles.pdf}
      loading="Loading PDF..."
    />
  );
};

const PDFShoreline = () => {
  return (
    <Pdf
      source={require('./Rules_&_Regulations_Shorleing_2020.docx.pdf')}
      style={styles.pdf}
      loading="Loading PDF..."
    />
  );
};

const PDFBottomFish = () => {
  return (
    <Pdf
      source={require('./Rules_&_Regulations_Bottomfish_2020.docx.pdf')}
      style={styles.pdf}
      loading="Loading PDF..."
    />
  );
};

const TournamentRules = ({navigation}) => {
  return (
    <SafeAreaView style={styles.content}>
      <Header
        containerStyle={{
          backgroundColor: colors.transparent,
          height: moderateScale(60),
        }}
        title={strings.Tournament_Rules}
        titleStyle={{fontFamily: fonts.bold}}
        leftIconSource={icons.ic_back_white}
        leftButtonStyle={{
          tintColor: colors.white1,
        }}
        onLeftPress={() => {
          navigation.goBack();
        }}
      />
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: colors.secondry,
          },
          allowFontScaling: false,
          labelStyle: {
            color: colors.white1,
            fontWeight: '700',
            shadowColor: colors.black1,
            shadowOffset: {width: 1, height: 1},
            shadowOpacity: 1,
            shadowRadius: 0,
            textTransform: 'none',
            fontSize: 14,
          },
          indicatorStyle: {
            backgroundColor: colors.white1,
          },
        }}>
        <Tab.Screen name="Offshore" component={PDFOffshore} />
        <Tab.Screen name="Shoreline" component={PDFShoreline} />
        <Tab.Screen name="Deep Fish" component={PDFBottomFish} />
      </Tab.Navigator>
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
    width: '100%',
  },
});

export default TournamentRules;
