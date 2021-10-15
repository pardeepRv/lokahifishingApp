import React, {useEffect, useState, useContext, useRef} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../../assets';
import {Header} from '../../../../components/common/Header';
import {colors} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';
const LeaderBoardType = ({navigation}) => {
  var [isPress, setIsPress] = useState(false);

  var touchProps = {
    activeOpacity: 1,
    underlayColor: colors.primary,
    style: isPress ? styles.btnPress : styles.btnNormal,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log('HELLO'), // <-- "onPress" is apparently required
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white1}}>
      <View style={styles.content}>
        <ImageBackground source={icons.LeaderBoard1} style={styles.bgImg}>
          <Header
            containerStyle={{
              backgroundColor: 'transparent',
              height: moderateScale(60),
            }}
            blackTitle
            title={'Laader Board'}
            titleStyle={{fontFamily: fonts.bold}}
            leftIconSource={icons.ic_back_white}
            leftButtonStyle={{
              tintColor: colors.black1,
            }}
            onLeftPress={() => {
              navigation.goBack();
            }}
          />

          <View
            style={{
              padding: moderateScale(20),
              height: layout.size.height / 11,
              width: layout.size.width / 1,
              flexDirection: 'row',
              justifyContent: 'space-around',

            }}>
            <TouchableHighlight
            {...touchProps}

              >
                
                <Text style={isPress ? styles.buttonText : styles.buttonText1}>hdshgfhsdg</Text>
              </TouchableHighlight>
            <TouchableHighlight
            {...touchProps}
              >
                <Text style={isPress ? styles.buttonText : styles.buttonText1}>hdshgfhsdg</Text>

              </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default LeaderBoardType;

const styles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    position: 'relative',
    top: 0.108,
    flex: 1,
  },
  btnPress: {
    borderColor: colors.black15,
    borderWidth: 1,
    borderRadius:moderateScale(10),
    width: layout.size.width / 3,
    height: moderateScale(40),

    backgroundColor: colors.white1,

  },
  btnNormal: {
    height: moderateScale(40),
                width: layout.size.width / 3,
                backgroundColor: colors.white1,
                borderWidth: 1,
                borderColor: colors.black15,
                borderRadius:moderateScale(10),


  },
  buttonText: {
    color: colors.white1,
    fontFamily: fonts.semiBold,
    fontSize: moderateScale(16),
    alignSelf: 'center',
    fontWeight: 'bold',
    margin:moderateScale(10)

  },
  buttonText1: {
    color: colors.black1,
    fontFamily: fonts.semiBold,
    fontSize: moderateScale(16),
    alignSelf: 'center',
    fontWeight: 'bold',
    margin:moderateScale(10)

  },
});
