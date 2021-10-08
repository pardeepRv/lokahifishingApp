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

let members = [

  {
    img: icons.BannerRoy,
  },
  {
    img: icons.MorrisLuresBanner,
  },
  {
    img: icons.ic_LokahiLogo,
  },
  {
    img: icons.BannerRoy,
  },
];

const DataFeeds = ({ navigation }) => {
  const [active, setActive] = useState(0);
  const [carousel, setCarousel] = useState('');
  const [ad, setAd] = useState('');
  const [membersList, setMembersList] = useState(members);

  const _renderView = ({ item, index }) => (
    <TouchableOpacity>
      <Image
        style={{
          width: layout.size.width,
          flex: 1,
          marginTop: layout.size.height / 7,
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
      source={icons.ic_signin_bg}
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
          title={'Data Feeds'}
          titleStyle={{ fontFamily: fonts.bold }}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />


        <TouchableOpacity
          onPress={() => navigation.navigate('Tide')}
          style={[
            styles.listView,
            {
              backgroundColor: colors.lightTransparent,

            },
          ]}>
            <Image
          source={icons.Tidesunmoon}
          resizeMode='contain'
          style={{
            height: 50,
            width: 50,
            borderRadius:50,
       backgroundColor:colors.primary,
       tintColor:colors.white1
          }}
        />
          <View style={styles.viewStyle}>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Text style={styles.nameStyle}>{strings.tide}</Text>
            </View>
          </View>
          <Image source={icons.ic_rightArrow} style={styles.rightArrow} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SeaTemp')}

          style={[
            styles.listView,
            {
              backgroundColor: colors.lightTransparent,
            },
          ]}>
             <Image
          source={icons.SST}
          resizeMode='contain'
          style={{
            height: 50,
            width: 50,
            borderRadius:50,
       backgroundColor:colors.primary,
       tintColor:colors.white1
          }}
        />
          <View style={styles.viewStyle}>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Text style={styles.nameStyle}>{strings.sst}</Text>
            </View>
          </View>
          <Image source={icons.ic_rightArrow} style={styles.rightArrow} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Wind')}

          style={[
            styles.listView,
            {
              backgroundColor: colors.lightTransparent,
            },
          ]}>
             <Image
          source={icons.Wind}
          resizeMode='contain'
          style={{
            height: 50,
            width: 50,
            borderRadius:50,
       backgroundColor:colors.primary,
       tintColor:colors.white1
          }}
        />
          <View style={styles.viewStyle}>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Text style={styles.nameStyle}>{strings.wind}</Text>
            </View>
          </View>
          <Image source={icons.ic_rightArrow} style={styles.rightArrow} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Current')}

          style={[
            styles.listView,
            {
              backgroundColor: colors.lightTransparent,
            },
          ]}>
             <Image
          source={icons.cloud}
          resizeMode='contain'
          style={{
            height: 50,
            width: 50,
            borderRadius:50,
       backgroundColor:colors.primary,
       tintColor:colors.white1
          }}
        />
          <View style={styles.viewStyle}>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Text style={styles.nameStyle}>{strings.cureent}</Text>
            </View>
          </View>
          <Image source={icons.ic_rightArrow} style={styles.rightArrow} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Radar')}

          style={[
            styles.listView,
            {
              backgroundColor: colors.lightTransparent,
            },
          ]}>
             <Image
          source={icons.range}
          resizeMode='contain'
          style={{
            height: 50,
            width: 50,
            borderRadius:50,
       backgroundColor:colors.primary,
       tintColor:colors.white1
          }}
        />
          <View style={styles.viewStyle}>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Text style={styles.nameStyle}>{strings.radar}</Text>
            </View>
          </View>
          <Image source={icons.ic_rightArrow} style={styles.rightArrow} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Weather')}

          style={[
            styles.listView,
            {
              backgroundColor: colors.lightTransparent,
            },
          ]}>
             <Image
          source={icons.cloud}
          resizeMode='contain'
          style={{
            height: 50,
            width: 50,
            borderRadius:50,
       backgroundColor:colors.primary,
       tintColor:colors.white1
          }}
        />
          <View style={styles.viewStyle}>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Text style={styles.nameStyle}>{strings.weather}</Text>
            </View>
          </View>
          <Image source={icons.ic_rightArrow} style={styles.rightArrow} />
        </TouchableOpacity>
        <FlatList
          extraData={membersList}
          data={membersList}
          renderItem={_renderView}
          pagingEnabled
          keyExtractor={(item, index) => 'key' + index}
          ListHeaderComponent={() =>
            !membersList.length ? (
              <Text style={styles.nomatch}>No Match found</Text>
            ) : null
          }
          horizontal={true}
        />


      </SafeAreaView>


    </ImageBackground>
  );
};

export default DataFeeds;


