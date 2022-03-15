import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {icons} from '../../../../assets';
import {Header} from '../../../components/common/Header';
import {strings} from '../../../localization';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';
import styles from './styles';

let members = [
  {
    img: icons.BannerRoy,
    title: 'Hobbietat',
    url: 'https://www.hawaiifishingtackle.com/',
  },
  {
    img: icons.BannerShane,
    title: 'POP Fishing&Marine',
    url: 'https://pop-hawaii.com/wp/',
  },
  {
    img: icons.MorrisLuresBanner,
    title: 'MorrisLures',
    url: 'https://morrislures.com/',
  },
  {
    img: icons.PacificRim,
    title: 'Pacific Rim',
    url: 'https://pacific-rim-fishing-tackle.shoplightspeed.com/',
  },
  {
    img: icons.Nitta,
    title: 'Nitta',
    url: 'https://nittafishing.com/',
  },
  {
    img: icons.NicosLogo,
    title: 'Nicos',
    url: 'https://nicospier38.com/',
  },
  {
    img: icons.STokunaga,
    title: 'Stokunaga',
    url: 'https://stokunagastore.com/',
  },
  {
    img: icons.ARCLogo,
    title: 'ARC',
    url: 'https://www.e-arc.com/location/Honolulu/',
  },
  {
    img: icons.ahieps,
    title: 'TSUTOMU',
    url: 'https://tsutomulures.com/',
  },
  {
    img: icons.gotakulogoredo,
    title: 'GYOTAKU',
    url: 'https://gyotaku.com/',
  },
];

const DataFeeds = ({navigation}) => {
  const [active, setActive] = useState(0);
  const [carousel, setCarousel] = useState('');
  const [ad, setAd] = useState('');
  const [membersList, setMembersList] = useState(members);

  const _renderView = ({item, index}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Webviewer', {title: item.title, url: item.url})
      }>
      <Image
        style={{ 
          width: layout.size.width,
          flex: 1,
          marginTop: layout.size.height / 9,
          backgroundColor: colors.transparent,
          marginBottom: moderateScale(-25),
        }}
        source={item.img}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
  return (
    <ImageBackground
      source={icons.ic_signup_bg}
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
          title={'Tides and Weather'}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Webviewer', {
              url: 'https://tides4fishing.com/us/hawaii/honolulu',
              title: 'Tide',
            })
          }
          style={[
            styles.listView,
            {
              backgroundColor: colors.lightpurple,
            },
          ]}>
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
          onPress={() =>
            navigation.navigate('Webviewer', {
              url: 'http://www.pacioos.hawaii.edu/water/model-temperature-hawaii/',
              title: 'Sea Surface Temperature',
            })
          }
          style={[
            styles.listView,
            {
              backgroundColor: colors.darkpurple,
            },
          ]}>
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
          onPress={() =>
            navigation.navigate('Webviewer', {
              url: 'https://www.windy.com/? {latitude} , {longitude} , 5',
              title: 'Wind',
            })
          }
          style={[
            styles.listView,
            {
              backgroundColor: colors.lightpurple,
            },
          ]}>
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
          onPress={() =>
            navigation.navigate('Webviewer', {
              url: 'http://www.pacioos.hawaii.edu/currents/model-hawaii/',
              title: 'Current',
            })
          }
          style={[
            styles.listView,
            {
              backgroundColor: colors.darkpurple,
            },
          ]}>
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
          onPress={() =>
            navigation.navigate('Webviewer', {
              url: 'https://capeweather.com/hawaii-doppler-radar.html',
              title: 'Radar',
            })
          }
          style={[
            styles.listView,
            {
              backgroundColor: colors.lightpurple,
            },
          ]}>
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
          onPress={() =>
            navigation.navigate('Webviewer', {
              url: 'https://www.weather.gov/hfo/',
              title: 'Weather',
            })
          }
          style={[
            styles.listView,
            {
              backgroundColor: colors.darkpurple,
            },
          ]}>
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
