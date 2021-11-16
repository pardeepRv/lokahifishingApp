// import React, { useContext, useEffect, useState } from 'react'
// import CircularPicker from 'react-native-circular-picker'
// import { Text } from 'react-native'
// import { fonts } from '../../../assets';
// import { moderateScale } from 'react-native-size-matters';
// import { colors } from '../../utilities/constants';






// 	let members = [
// 		{
// 			img: icons.ic_LokahiLogo,
// 			name: 'princepardeepkmr',
// 			date: 'Member since 1 oct 2021',
// 		},
// 		{
// 			img: icons.ic_LokahiLogo,
// 			name: 'rv_kunal',
// 			date: 'Member since 2 oct 2021',
// 		},
// 		{
// 			img: icons.ic_LokahiLogo,
// 			name: 'rvtechnologies',
// 			date: 'Member since 1 oct 2021',
// 		},
// 		{
// 			img: icons.ic_LokahiLogo,
// 			name: 'dev_pardeep',
// 			date: 'Member since 2 oct 2021',
// 		},
// 	];
	
// 	const MembersComponent = ({navigation}) => {
// 		const [membersList, setMembersList] = useState(members);
	
// 		const _renderView = ({item, index}) => (
// 			<TouchableOpacity
// 			onPress={() => {navigation.navigate('FriendProfileScreen')}}
// 				style={[
// 					styles.listView,
// 					{
// 						backgroundColor: index % 2 == 0 ? '#3c264a' : '#553456',
// 					},
// 				]}
// 				activeOpacity={0.8}>
// 				<View style={styles.viewStyle}>
// 					<Image
// 						source={icons.fish2}
// 						style={{
// 							height: moderateScale(70),
// 							width: moderateScale(70),
// 	borderRadius:moderateScale(40),
// 						}}
// 					/>
// 					<View
// 						style={{
// 							justifyContent: 'center',
// 						}}>
// 						<Text style={styles.nameStyle}>{item.name}</Text>
// 						<Text style={styles.dateStyle}>{item.date}</Text>
// 					</View>
// 				</View>
// 				<Image source={icons.ic_rightArrow} style={styles.rightArrow} />
// 			</TouchableOpacity>
// 		);
	
// 		return (
// 			<ImageBackground
// 				source={icons.ic_signup_bg}
// 				style={{flex: 1, height: '100%'}}>
// 				<SafeAreaView
// 					style={{
// 						flex: 1,
// 					}}>
// 					<Header
// 						containerStyle={{
// 							backgroundColor: 'transparent',
// 							height: moderateScale(60),
// 						}}
// 						title={'Members'}
// 						titleStyle={{fontFamily: fonts.bold}}
// 						leftIconSource={icons.ic_back_white}
// 						leftButtonStyle={{
// 							tintColor: colors.white1,
// 						}}
// 						onLeftPress={() => {
// 							navigation.goBack();
// 						}}
// 					/>
	
// 					<FlatList
// 						extraData={membersList}
// 						data={membersList}
// 						renderItem={_renderView}
// 						keyExtractor={(item, index) => 'key' + index}
// 						ListHeaderComponent={() =>
// 							!membersList.length ? (
// 								<Text style={styles.nomatch}>No Match found</Text>
// 							) : null
// 						}
// 					/>
// 				</SafeAreaView>
// 			</ImageBackground>
// 		);
// 	};
	
// 	export default MembersComponent;
	
