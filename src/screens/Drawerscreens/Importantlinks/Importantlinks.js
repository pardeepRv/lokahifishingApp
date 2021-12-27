import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  FlatList,
  Dimensions,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';

import { moderateScale } from 'react-native-size-matters';
// import Carousel from 'react-native-snap-carousel';
import { fonts, icons } from '../../../../assets';
import { Button } from '../../../components/common/Button';
import { Header } from '../../../components/common/Header';
import { strings } from '../../../localization';
import { colors } from '../../../utilities/constants';
import { layout } from '../../../utilities/layout';
import styles from './styles';



const Importantlinks = ({ navigation }) => {
  const [active, setActive] = useState(0);
  const [carousel, setCarousel] = useState('');
  const [ad, setAd] = useState('');


  const _renderView = ({ item, index }) => (
    <TouchableOpacity
    onPress={() => navigation.navigate(item.navigate)}>
      <Image
        style={{
          width: layout.size.width,
          flex: 1,
          marginTop: layout.size.height / 9,
          backgroundColor: colors.transparent,
          marginBottom: moderateScale(-25)
        }}

        source={item.img}
        resizeMode='contain'
      />
    </TouchableOpacity>
  );
  return (
    <ImageBackground
      source={icons.ic_signup_bg}
      style={{ flex: 1, height: '100%' }}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <Header
          containerStyle={{
            backgroundColor: 'transparent',
            height: moderateScale(60),
          }}
          title={'Important links'}
          titleStyle={{ fontFamily: fonts.bold }}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />

<ScrollView style={{flex:1}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('FishingWebsite')}
          style={[
            styles.listView,
            {
              backgroundColor: colors.white1,
            },
          ]}>
          <View style={styles.viewStyle}>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Text style={styles.nameStyle}>{strings.HawaiState}</Text>
              <Text style={styles.dateStyle}>{strings.HawaiLegislature}</Text>
            </View>
          </View>

        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('HawaiiLegislatureWebsite')}
          style={[
            styles.listView,
            {
              backgroundColor: colors.white1,
            },
          ]}>
         <View style={styles.viewStyle}>
            <View
              style={{
                justifyContent: 'center',

              }}>
              <Text style={styles.nameStyle}>{strings.LokhaiWebsite}</Text>
              <Text style={styles.dateStyle}>{strings.LokhaiUrl}</Text>
            </View>
          </View>
        </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Importantlinks;


