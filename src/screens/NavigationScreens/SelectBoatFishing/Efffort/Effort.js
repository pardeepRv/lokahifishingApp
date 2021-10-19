import React, {useEffect, useState, useContext, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {fonts, icons} from '../../../../../assets';
import {Button} from '../../../../components/common';
import Circular from '../../../../components/common/Circular';
import {Header} from '../../../../components/common/Header';
import TextInputComp from '../../../../components/common/TextInputComp';
import {strings} from '../../../../localization';
import {colors} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';
import styles from './styles';

const Effort = ({navigation}) => {
  const [timeEffort, settimeEffort] = useState('');

  const [errors, setErrors] = useState({
    timeEffort: '',
  });

  const name_and_values = [{name: 'timeEffort', value: timeEffort}];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white1}}>
      <ImageBackground source={icons.ic_signup_bg} style={styles.bgImg}>
        <Header
          containerStyle={{
            backgroundColor: 'transparent',
            height: moderateScale(60),
          }}
          title={'Time Effort'}
          titleStyle={{fontFamily: fonts.bold}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.subContainer}
          contentContainerStyle={styles.subContentContainer}
          keyboardShouldPersistTaps={'always'}
          showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={styles.section}>
              <View style={styles.effortTitle}>
                <Text style={[styles.title, {marginBottom: 0}]}>Effort</Text>
                <Text style={styles.effortSubtext}>
                  (fishing time only, not travel time)
                </Text>
              </View>
              <View
                style={{
                  marginTop: moderateScale(20),
                  marginBottom: moderateScale(20),
                }}>
                <TextInputComp
                  label={strings.enterefforttime}
                  value={timeEffort}
                  placeholder={strings.entertime}
                  labelTextStyle={styles.labelTextStyle}
                  onChangeText={timeEffort => settimeEffort(timeEffort)}
                  onFocus={() =>
                    setErrors({
                      ...errors,
                      timeEffort: '',
                    })
                  }
                />
                {errors.timeEffort ? (
                  <Text transparent style={{color: colors.primary, bottom: 14}}>
                    {errors.timeEffort}
                  </Text>
                ) : null}
              </View>
              <View style={styles.effortTitle}>
                <Text style={[styles.labelTextStyle, {marginBottom: 0}]}>
                  Use This , If Time Less Then 24 hrs
                </Text>
                {/* <Text style={styles.effortSubtext}>(Use this , if time less then 24 hrs)</Text> */}
              </View>
              <View style={styles.subsection}>
                <Circular />
              </View>
              <View
                style={{
                  marginTop: layout.size.height / 20,
                }}>
                <Button
                  style={{
                    backgroundColor: colors.primary,
                    borderRadius: 20,
                    width: layout.size.width - 100,
                    alignSelf: 'center',
                  }}
                  labelStyle={{fontSize: 20, fontFamily: fonts.bold}}
                  label={strings.save}
                  onPress={() => {
                    navigation.navigate('FishData')
                 }}
                  
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Effort;

