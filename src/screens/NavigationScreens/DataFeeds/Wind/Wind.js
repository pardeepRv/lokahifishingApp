import React, { useEffect, useState, useContext, useRef } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, ImageBackground } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { WebView } from 'react-native-webview'
import { fonts, icons } from '../../../../../assets'
import { Header } from '../../../../components/common/Header'
import { colors } from '../../../../utilities/constants'
import { layout } from '../../../../utilities/layout'
const Wind = ({ navigation }) => {
	const [webPage, setWebPage] = useState('https://www.windy.com/19.627/-155.565?19.034,-155.566,8,m:edRaPS')
	const [prevWebPage, setPrevWebPage] = useState(null)
	const webEl = useRef(null)

	useEffect(() => {
		setWebPage('https://www.windy.com/19.627/-155.565?19.034,-155.566,8,m:edRaPS')
	}, [])

	const handleWebViewNavChange = newState => {
		let { title, url } = newState
		if (url !== prevWebPage) {
			setPrevWebPage(webPage)
			setWebPage(url)
		}
	}
	return (
    <ImageBackground source={icons.ic_signup_bg} style={styles.bgImg}>
    <Header
       containerStyle={{
         backgroundColor: 'transparent',
         height: moderateScale(60),
       }}
       title={'sea Temp'}
       titleStyle={{fontFamily: fonts.bold}}
       leftIconSource={icons.ic_back_white}
       leftButtonStyle={{
         tintColor: colors.white1,
       }}
       onLeftPress={() => {
         navigation.goBack();
       }}
     />
			<View style={styles.content}>
				<WebView
					startInLoadingState={true}
					ref={webEl}
					onNavigationStateChange={handleWebViewNavChange}
					mediaPlaybackRequiresUserAction={true}
					originWhitelist={['*']}
					source={{ uri: webPage }}
          style={{  width: layout.size.width, marginBottom: 0 }}

				/>
			</View>
		</ImageBackground>
	)
}

export default Wind



const styles = StyleSheet.create({
	bgImg: {
		width: '100%',
		height: '100%',
		flexDirection: 'column',
		alignItems: 'center',
	},
	content: {
		position: 'relative',
		top:  0.108,
	},
})
