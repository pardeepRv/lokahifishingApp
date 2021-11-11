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
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../../assets';
import {Header} from '../../../../components/common/Header';
import TextInputComp from '../../../../components/common/TextInputComp';
import {strings} from '../../../../localization';
import {colors} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';
import styles from './styles';

const TagandRealse = ({navigation}) => {
  const [state, setState] = useState({
    isGPS: '',
    title: '',
    Tag:'',
    Fork:'',
    Location:'',
    Species:'',
    isPrivate: '',
  });
  const {isGPS, title, isPrivate , Tag , Fork , Location ,Species} = state;
  const _onChangeText = key => val => {
    setState({...state, [key]: val});
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
          title={'Tag and Release'}
          titleStyle={{fontFamily: fonts.bold}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.black1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
         
        />
        <ScrollView style={{flex: 1}}>
          <View style={styles.line}></View>
          <View style={styles.viewstyle}>
            <View
              style={{
                height: moderateScale(30),
                width: moderateScale(30),
                borderRadius: 20,
                left: moderateScale(15),
                backgroundColor: '#fff',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.4,
                elevation: 3,
              }}>
              <Image
                source={icons.user_placeholder_man_0}
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
              height: layout.size.height / 3.9,
              width: layout.size.height / 3.9,
              borderRadius: moderateScale(110),
              alignSelf: 'center',
              margin: 10,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.4,
              elevation: 3,
            }}>
            <Image
              resizeMod="contain"
              source={icons.uploadImage1}
              style={styles.bgImg}
            />
          </View>
          <View style={styles.line}></View>
          <View style={styles.viewstylesingle}>
            <Text style={styles.singletextstyle}>{strings.Tag}</Text>
            <View style={{alignSelf:'center' ,  height:40, width:layout.size.width/2}}>
            <TextInputComp
                style={styles.input }
                maxLength={15} 
                value={Tag}
                placeholder={strings.entertags  }
                onChangeText={_onChangeText('Tag')}
              />
              </View>
              
          </View>
          <View style={styles.line}></View>
          <View style={styles.viewstylesingle}>
            <Text style={styles.singletextstyle}>{strings.fork}</Text>
            <View style={{alignSelf:'center' ,  height:40, width:layout.size.width/2}}>
            <TextInputComp
                style={styles.input }
                maxLength={15}
                value={Fork}
                placeholder={strings.enterforklength  }
                onChangeText={_onChangeText('Fork')}
              />
              </View>
          </View>
          <View style={styles.line}></View>
          <View style={styles.viewstylesingle}>
            <Text style={styles.singletextstyle}>{strings.Location}</Text>
            <View style={{alignSelf:'center' ,  height:40, width:layout.size.width/2}}>
            <TextInputComp
                style={styles.input }
                maxLength={15}
                value={Location}
                placeholder={strings.enterlocation  }
                onChangeText={_onChangeText('Location')}
              />
              </View>
          </View>
          <View style={styles.line}></View>
          <View style={styles.viewstylesingle}>
            <Text style={styles.singletextstyle}>{strings.Species}</Text>
            <View style={{alignSelf:'center' ,  height:40, width:layout.size.width/2}}>
            <TextInputComp
                style={styles.input }
                maxLength={15}
                value={Species}
                placeholder={strings.enterspecies  }
                onChangeText={_onChangeText('Species')}
              />
              </View>
          </View>
          <View style={styles.line}></View>
          <View style={styles.viewstylemap}></View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default TagandRealse;
