import React, {useState, useCallback, useEffect} from 'react';
import {
  SafeAreaView,
  RefreshControl,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  FlatList,
  View,
  Alert,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../assets';
import {Header, Loader} from '../../../components/common';
import {colors} from '../../../utilities/constants';
import {useDispatch, useSelector} from 'react-redux';
import YoutubePlayer from 'react-native-youtube-iframe';
import {getvideo} from '../../../store/actions';

// import firestore from '@react-native-firebase/firestore'

const VideoTips = ({navigation}) => {
  const [ad, setAd] = useState(auth?.allvideolist);

  const [playing, setPlaying] = useState(false);

  const [isMute, setMute] = useState(false);

  let auth = useSelector(state => state.auth);
  let user = useSelector(state => state.user);
  let app = useSelector(state => state.app);

  const dispatch = useDispatch();
  console.log(auth, 'auth in video   page>>>>>>>>>>');

  console.log(app, 'app in video   page>>>>>>>>>>');
  console.log(user, 'user in video   page>>>>>>>>>>');

  const [state, setState] = useState({
    refreshing: false,
  });
  // useEffect(() => {
  // 	const ref = firestore().collection('VideoTips').orderBy('Title', 'asc')
  // 	return ref.onSnapshot(querySnapshot => {
  // 		const list1 = []
  // 		querySnapshot.forEach(doc => {
  // 			const { Title, Video } = doc.data()
  // 			list1.push({
  // 				id: doc.id,
  // 				name: Title,
  // 				video: Video,
  // 			})
  // 			setAd(list1)
  // 			// console.log('this one is ads', list1)
  // 		})
  // 	})
  // }, [])

  useEffect(() => {
    console.log('coming in this');
    const unsubscribe = navigation.addListener('focus', () => {
      getvideo();
    });
    return unsubscribe;
  }, [navigation]);

  //get friends list
  function Video() {
    let token = auth && auth?.userDetails?.access_token;
    dispatch(getvideo(token));
	setAd(auth.allvideolist);
  }

  function _onRefresh() {
    setState({refreshing: true});
    Video(auth?.allvideolist);
  }

  const _renderView = ({item, index}) => (
    <View style={styles.container}>
      <Text
        style={{
          color: 'white',
          fontSize: 18,
          marginVertical: 10,
          fontWeight: '700',
        }}>
        {item?.auth?.allvideolist?.title}
      </Text>
      <YoutubePlayer
        height={300}
        ref={controlRef}
        play={playing}
        mute={isMute}
         videoId={item?.auth?.allvideolist?.id}
        onChangeState={onStateChange}
      />
    </View>
  );

  const onStateChange = state => {
    if (state === 'ended') {
      setPlaying(false);

      Alert.alert('video has finished playing!');
    }

    if (state !== 'playing') {
      setPlaying(false);
    }
  };

  const togglePlaying = () => {
    setPlaying(prev => !prev);
  };

  const seekBackAndForth = control => {
    controlRef.current?.getCurrentTime().then(currentTime => {
      control === 'forward'
        ? controlRef.current?.seekTo(currentTime + 15, true)
        : controlRef.current?.seekTo(currentTime - 15, true);
    });
  };

  const muteVideo = () => setMute(!isMute);

  const ControlIcon = ({name, onPress}) => (
    <Icon onPress={onPress} name={name} size={40} color="#fff" />
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
        <FlatList
          extraData={ad}
          data={ad}
          renderItem={_renderView}
          keyExtractor={(item, index) => 'key' + index}
          // style={{marginBottom:1}}
          ListEmptyComponent={() =>
           ad >= 0 && (
              <Text style={styles.nomatch}>No Request found</Text>
            )
          }
          refreshControl={
            <RefreshControl
              refreshing={user.loading}
              onRefresh={_onRefresh.bind(this)}
              title="Pull to refresh"
              tintColor={colors.white1}
              titleColor={colors.white1}
            />
          }
        />
      </SafeAreaView>
      <Loader isLoading={user.loading} isAbsolute />
    </ImageBackground>
  );
};

export default VideoTips;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  content: {
    position: 'relative',
    top: windowHeight * 0.108,
  },
  container: {
    flex: 1,

    backgroundColor: '#2c385e',
  },

  controlContainer: {
    flexDirection: 'row',

    justifyContent: 'space-around',
  },
});
