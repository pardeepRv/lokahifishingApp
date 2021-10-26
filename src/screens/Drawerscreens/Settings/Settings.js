import React, {useState} from 'react';
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// internal lijbraries
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../assets';
import {Header} from '../../../components/common/Header';
import {strings} from '../../../localization';
import {colors} from '../../../utilities/constants';
import styles from './styles';

const Settings = ({navigation}) => {
  const [state, setState] = useState({
    isContact: '',
  });
  const {isContact, password} = state;

  const _onChangeText = key => val => {
    setState({...state, [key]: val});
  };

  return (
    <ImageBackground source={icons.ic_signin_bg} style={styles.image}>
      <SafeAreaView style={styles.content}>
        <Header
          containerStyle={{
            backgroundColor: 'transparent',
            height: moderateScale(60),
          }}
          title={'Settings'}
          titleStyle={{fontFamily: fonts.bold}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.contentcontainer}>
          <View style={styles.Container}>
         
              <View style={styles.rowContent}>
                <Text style={styles.textstyle}>
                  {strings.enablenotification}
                </Text>
                <Switch
                  value={isContact}
                  onValueChange={isContact =>
                    setState({isContact}, () => updateSwitch(isContact))
                  }
                  trackColor={{
                    true: colors.primary,
                    false:
                      Platform.OS == 'android' ? '#d3d3d3' : colors.primary,
                  }}
                  style={styles.contactSwitch}
                />
              </View>
            
          </View>
          <TouchableOpacity
            style={styles.Container}
            onPress={() => navigation.navigate('ChangePassword')}>
            <Text style={styles.textstyle}>{strings.changepassword}</Text>
          </TouchableOpacity>
          <View style={styles.Container}>
        
              <View style={styles.rowContent}>
                <Text style={styles.textstyle}>{strings.appversion}</Text>
                <Text style={styles.text}>{strings.version}</Text>
              </View>
            </View>
        
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Settings;
