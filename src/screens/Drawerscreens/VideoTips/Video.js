// import React from 'react';
// import {
//   Image,
//   ImageBackground,
//   SafeAreaView,
//   SectionList,
//   Text,
//   TouchableOpacity,
// } from 'react-native';
// import {moderateScale} from 'react-native-size-matters';
// import {fonts, icons} from '../../../../assets';
// import {Header} from '../../../components/common/Header';
// import {colors} from '../../../utilities/constants';
// import styles from './styles';

// const DATA = [
//   {
//     title: 'Navigation your Lokhai App ',
//     data: ['Setting up you profile', 'Adding Friends', 'Posting a Catch report', 'Using Data Feeds' ,'Using Photo Sharing' ,'News and Video Tips' , 'Lokahi Intro Video'],
//   },
//   {
//     title: 'Rod and Reel',
//     data: ['Mounting the Reel',],
//   },
//   {
//     title: 'Lures',
//     data: ['Lure Head Selection' , 'Lure Skirt Selection' , 'Hook Selection'],
//   },
//   {
//     title: 'Terminal Rigging',
//     data: ['Creating a Double Line With a Bimini Twist'],
//   },
//   {
//     title: 'Angling',
//     data: ['Angling from the Chair Part 1' , 'Angling from the Chair Part 2'],
//   },
//   {
//     title: 'Leadering',
//     data: ['Lokhai NothernLights Leadring'],
//   },
//   {
//     title: 'Gaffing',
//     data: ['Lokhai Kona Gaffing'],
//   },
//   {
//     title: 'Check out our YouTube Channels',
//     data: ['Angel Coach 123-Tim Tucker', 'Reel Adventures Hawaii'],
//   },
// ];

// const Item = ({title}) => (
//   <TouchableOpacity style={styles.item}>
//     <Image source={icons.ic_photoVideoPlayBT} />
//     <Text style={styles.title}>{title}</Text>
//   </TouchableOpacity>
// );

// const Video = ({navigation}) => (
//   <ImageBackground
//     source={icons.ic_signup_bg}
//     style={{flex: 1, height: '100%'}}>
//     <SafeAreaView style={styles.container}>
//       <Header
//         containerStyle={{
//           backgroundColor: 'transparent',
//           height: moderateScale(60),
//         }}
//         title={'Video Tips'}
//         titleStyle={{fontFamily: fonts.bold}}
//         leftIconSource={icons.ic_back_white}
//         leftButtonStyle={{
//           tintColor: colors.white1,
//         }}
//         onLeftPress={() => {
//           navigation.goBack();
//         }}
//       />
//       <SectionList
//         sections={DATA}
//         keyExtractor={(item, index) => item + index}
//         renderItem={({item}) => <Item title={item} />}
//         renderSectionHeader={({section: {title}}) => (
//           <Text style={styles.header} numberOfLines={1} ellipsizeMode="tail">
//             {title}
//           </Text>
//         )}
//       />
//     </SafeAreaView>
//   </ImageBackground>
// );

// export default Video;
import React, { useState, useRef } from 'react'

import { View, Alert, StyleSheet, Text } from 'react-native'

import YoutubePlayer from 'react-native-youtube-iframe'

// import { Icon } from 'react-native-elements'

const Video = ({props}) => {
	const [playing, setPlaying] = useState(false)

	const [isMute, setMute] = useState(false)

	const controlRef = useRef()

	const onStateChange = state => {
		if (state === 'ended') {
			setPlaying(false)

			Alert.alert('video has finished playing!')
		}

		if (state !== 'playing') {
			setPlaying(false)
		}
	}

	const togglePlaying = () => {
		setPlaying(prev => !prev)
	}

	const seekBackAndForth = control => {
		

		controlRef.current?.getCurrentTime().then(currentTime => {
			control === 'forward' ? controlRef.current?.seekTo(currentTime + 15, true) : controlRef.current?.seekTo(currentTime - 15, true)
		})
	}

	const muteVideo = () => setMute(!isMute)

	const ControlIcon = ({ name, onPress }) => <Icon onPress={onPress} name={name} size={40} color='#fff' />

	return (
		<View style={styles.container}>
			<Text style={{ color: 'white', fontSize: 18, marginVertical: 10, fontWeight: '700' }}>first vedio </Text>
			<YoutubePlayer height={300}
       ref={controlRef} play={playing} 
       mute={isMute}
      //  videoId={props.video} 
      onChangeState={onStateChange} 
      />
		</View>
	)

  
}
export default Video;

const styles = StyleSheet.create({
	container: {
		flex: 1,

		backgroundColor: '#2c385e',
	},

	controlContainer: {
		flexDirection: 'row',

		justifyContent: 'space-around',
	},
})
