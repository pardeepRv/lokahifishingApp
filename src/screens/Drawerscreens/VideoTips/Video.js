import React from 'react';
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
import YoutubePlayer from 'react-native-youtube-iframe';
import {fonts, icons} from '../../../../assets';
import {Header} from '../../../components/common/Header';
import {colors} from '../../../utilities/constants';
import styles from './styles';

const DATA = [
  {
    title: 'Navigation your Lokhai App ',
    data: [
      'Setting up you profile',
      'Adding Friends',
      'Posting a Catch report',
      'Using Data Feeds',
      'Using Photo Sharing',
      'News and Video Tips',
      'Lokahi Intro Video',
    ],
  },
  {
    title: 'Rod and Reel',
    data: ['Mounting the Reel'],
  },
  {
    title: 'Lures',
    data: ['Lure Head Selection', 'Lure Skirt Selection', 'Hook Selection'],
  },
  {
    title: 'Terminal Rigging',
    data: ['Creating a Double Line With a Bimini Twist'],
  },
  {
    title: 'Angling',
    data: ['Angling from the Chair Part 1', 'Angling from the Chair Part 2'],
  },
  {
    title: 'Leadering',
    data: ['Lokhai NothernLights Leadring'],
  },
  {
    title: 'Gaffing',
    data: ['Lokhai Kona Gaffing'],
  },
  {
    title: 'Check out our YouTube Channels',
    data: ['Angel Coach 123-Tim Tucker', 'Reel Adventures Hawaii'],
  },
];

const videoArr = [
  {videoId: 'iee2TATGMyI', title: 'Posting a Catch report'},
  {videoId: 'JmSXo0XdWoA', title: 'Lokhai Kona Gaffing'},
  {videoId: 'wop3B3bsSx8', title: 'Lokhai NothernLights Leadring'},
];

const Item = ({title}) => (
  <TouchableOpacity style={styles.item}>
    <Image source={icons.ic_photoVideoPlayBT} />
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const Video = ({navigation}) => {
  const _renderView = ({item, index}) => (
    <TouchableOpacity
    // style={styles.item}
    // onPress={() => navigation.navigate('VideoTips', {videoId: item.videoId})}
    >
      <View
        style={{
          flexDirection: 'row',
          padding: 5,
          justifyContent: 'space-around',
        }}>
        <Image
          source={icons.ic_photoVideoPlayBT}
          style={{
            height: moderateScale(25),
            width: moderateScale(35),
            borderRadius: 10,
          }}
        />
        <Text style={styles.title}>{item.title}</Text>
      </View>

      <YoutubePlayer
        height={220}
        play={true}
        videoId={item?.videoId}
        // onChangeState={onStateChange}
      />
    </TouchableOpacity>
  );
  return (
    <ImageBackground
      source={icons.ic_signup_bg}
      style={{flex: 1, height: '100%'}}>
      <SafeAreaView style={styles.container}>
        <Header
          containerStyle={{
            backgroundColor: 'transparent',
            height: moderateScale(60),
          }}
          title={'Video Tips'}
          titleStyle={{fontFamily: fonts.bold}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />
        {/* <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
        )}
      /> */}

        <FlatList
          extraData={videoArr}
          data={videoArr}
          renderItem={_renderView}
          keyExtractor={(item, index) => 'key' + index}
          ListEmptyComponent={() =>
            videoArr >= 0 && <Text style={{}}>No video found</Text>
          }
          // refreshControl={
          //   <RefreshControl
          //     refreshing={user.loading}
          //     onRefresh={_onRefresh.bind(this)}
          //     title="Pull to refresh"
          //     tintColor={colors.white1}
          //     titleColor={colors.white1}
          //   />
          // }
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Video;
