import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import WebView from 'react-native-webview';
import {fonts, icons} from '../../../../assets';
import { Button } from '../../../components/common/Button';
import {Header} from '../../../components/common/Header';
import {strings} from '../../../localization';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

const Survey = ({navigation}) => {
  return (
    <ImageBackground source={icons.ic_signin_bg} style={styles.image}>
      <SafeAreaView style={styles.content}>
        <Header
          containerStyle={{
            backgroundColor: colors.transparent,
            height: moderateScale(60),
          }}
          title={strings.LokhaiSurvey}
          titleStyle={{fontFamily: fonts.bold}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />
        <View
          style={{
            marginTop: 10,
           
            backgroundColor: colors.lightTransparent,
            height: layout.size.height / 1.7,
          }}>
          <WebView
            automaticallyAdjustContentInsets={false}
            javaScriptEnabled={true}
            source={{
              uri: 'http://192.168.1.61/LokahiFishing_API/CML_1.pdf',
            }}
            domStorageEnabled={true}
          />
        </View>
        <View
              style={{
                marginTop: moderateScale(50),
              }}>
              <Button
                style={{
                  backgroundColor: colors.primary,
                  borderRadius: 20,
                  width: layout.size.width - 90,
                  alignSelf: 'center',
                }}
                labelStyle={{fontFamily:fonts.bold }}
                label={strings.submitsurvey}
                onPress={() => navigation.navigate('QuestionAnswer')}
              />
              
            </View>
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
