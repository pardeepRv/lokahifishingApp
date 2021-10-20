import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Share,
  ScrollView,
  Switch
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../../assets';
import {Header} from '../../../../components/common/Header';
import TextInputComp from '../../../../components/common/TextInputComp';
import {strings} from '../../../../localization';
import {colors, screenNames} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';
import * as NavigationService from '../../../../store/NavigationService';

import styles from './styles';

const EditLCRDetails = ({navigation}) => {
  const [state, setState] = useState({
    isGPS: '',
    title:'',
    isPrivate:'',
  });
  const {isGPS, title , isPrivate} = state;
  const _onChangeText = key => val => {
    setState({ ...state, [key]: val });
  };

  return (
    <ImageBackground
      source={icons.LeaderBoard1}
      style={{flex: 1, height: '100%'}}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <Header
          containerStyle={{
            backgroundColor: 'transparent',
            height: moderateScale(60),
          }}
          blackTitle
          title={'Catch Report'}
          titleStyle={{fontFamily: fonts.bold}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.black1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
          onRightPress={() => {
            NavigationService.resetRoute(screenNames.LCRlist);
          }}
          rightIconSource={icons.post}
          rightIconStyle={{
            height: 30,
            width: 30,
            tintColor: colors.green1,
          }}
        />
        <ScrollView style={{flex: 1}}>
          <View style={styles.line}></View>
          <View style={styles.viewstyle}>
            <View
              style={{
                height: moderateScale(30),
                width: moderateScale(30),
                borderRadius:20,
                left: moderateScale(15),
                backgroundColor:'#fff',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.4,
                elevation: 3,
              }}>
              <Image
                source={icons.no_image}
                resizeMod="cover"
                style={styles.simage}></Image>
            </View>
            <View
              style={{
                flexDirection: 'column',
                width: layout.size.width / 2,
              }}>
              <Text style={styles.doubletextstyle}>Hello</Text>
            </View>
          </View>
          <View style={styles.line}></View>
          <View
            style={{
              height: layout.size.height / 6,
              margin: moderateScale(10),
              flexDirection: 'row',
              alignItems:'center',
              justifyContent:'space-between'
            }}>
            <TouchableOpacity
             onPress={() => {
              navigation.navigate('UploadImage');
            }}
              style={{
                height: layout.size.height / 6,
                width: layout.size.height / 6,
                borderRadius: moderateScale(100),
                backgroundColor:'#fff',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.2,
                elevation: 3,
              }}>
              <Image
                resizeMod="contain"
                source={icons.no_image}
                style={styles.bgImg}
              />
            </TouchableOpacity>
            <View style={[
              styles.listView,
              {
                // backgroundColor: colors.primary,
              },
            ]}
            activeOpacity={0.8}>
                <TextInputComp
                  style={styles.input}
                  multiline
                  numberOfLines={6}
                  value={title}
                  placeholder={strings.describeyourCatchHere}
                  labelTextStyle={styles.labelTextStyle}
                  onChangeText={_onChangeText('title')}
                />
            </View>
          </View>
          <View style={styles.line}></View>
          <View style={styles.viewstylesingle}>
            <Text style={styles.singletextstyle}>{strings.Fishingtype}</Text>
            <Text style={styles.righttextstyle}>{'Whipping'}</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.viewstylesingle}>
            <Text style={styles.singletextstyle}>{strings.Typeoffish}</Text>
            <Text style={styles.righttextstyle}>{'Omilu'}</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.viewstylesingle}>
            <Text style={styles.singletextstyle}>{strings.Fishweight}</Text>
            <Text style={styles.righttextstyle}>{'34'}</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.viewstylesingle}>
            <Text style={styles.singletextstyle}>{strings.Efforts}</Text>
            <Text style={styles.righttextstyle}>{'2.00'}</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.viewstylesingle}>
            <Text style={styles.singletextstyle}>{strings.includegpsinlcr}</Text>
            <Switch
                  value={isGPS}
                  onValueChange={isGPS =>
                    setState({isGPS}, () => updateSwitch(isGPS))
                  }
                  trackColor={{
                    true: colors.primary,
                    false:
                      Platform.OS == 'android' ? '#d3d3d3' : colors.primary,
                  }}
                  style={styles.contactSwitch}
                />
          </View>
          <View style={styles.line}></View>
          <View style={styles.viewstylesingle}>
            <Text style={styles.singletextstyle}>{strings.private}</Text>
            <Switch
                  value={isPrivate}
                  onValueChange={isPrivate =>
                    setState({isPrivate}, () => updateSwitch(isPrivate))
                  }
                  trackColor={{
                    true: colors.primary,
                    false:
                      Platform.OS == 'android' ? '#d3d3d3' : colors.primary,
                  }}
                  style={styles.contactSwitch}
                />
          </View>
          <View style={styles.line}></View>
          <View style={styles.viewstylemap}></View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default EditLCRDetails;
