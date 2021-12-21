import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
//external livrarie 
import TimeAgo from 'react-native-timeago';
import { useDispatch, useSelector } from 'react-redux';
import { fonts, icons } from '../../../../assets';
import { Loader } from '../../../components/common';
import { leaderboardranking } from '../../../store/actions';
import { colors } from '../../../utilities/constants';
import { layout } from '../../../utilities/layout';

let members = [
	{
		client: 'Henry',
		img: icons.user_placeholder_man_0,
		name: 'rv_kunal',
		srno: '# 1',
		date: 'Member since 1 oct 2021',
	},
	{
		client: 'Jhon',

		img: icons.user_placeholder_man_0,
		name: 'rv_kunal',
		date: 'Member since 2 oct 2021',
		srno: '# 2',
	},
	{
		client: 'Sara Tyller',

		img: icons.user_placeholder_man_0,
		name: 'rv_kunal',
		srno: '# 3',
		date: 'Member since 1 oct 2021',
	},
	{
		client: 'Jim Hori',

		img: icons.user_placeholder_man_0,
		name: 'rv_kunal',
		srno: '# 4',
		date: 'Member since 2 oct 2021',
	},
	{
		client: 'Dharminder thankur',

		img: icons.user_placeholder_man_0,
		name: 'rv_kunal',
		srno: '# 5',
		date: 'Member since 2 oct 2021',
	},
	{
		client: 'Jim Hori',

		img: icons.user_placeholder_man_0,
		name: 'rv_kunal',
		srno: '# 4',
		date: 'Member since 2 oct 2021',
	},
	{
		client: 'Jim Hori',

		img: icons.user_placeholder_man_0,
		name: 'rv_kunal',
		srno: '# 4',
		date: 'Member since 2 oct 2021',
	},
];

const LeaderboardCard = ({ navigation, ...props }) => {
	console.log(navigation, 'consoling props in leadrerboard  requires');
	console.log(props, 'consoling route in leadrerboard  requires');


	console.log(props.selectedFish, 'selectedFish is <<<<<<<');
	const [membersList, setMembersList] = useState([]);
	const [fishid, setfishid] = useState(props.selectedFish);
	const [state, setState] = useState({
		refreshing: false,
	});
	let auth = useSelector(state => state.auth);
	let app = useSelector(state => state.app);
	console.log(auth, 'auth>>>>>>>>>>>>', app, 'app in leaderCard>>>>>>>>>>>>>>>>');

	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			console.log('coming in fish><><');
			getboardranking();
		});
		return unsubscribe;
	}, [navigation]);

	function getboardranking() {
		let obj = {};

		obj.token = auth && auth?.userDetails?.access_token;
		obj.fish_id = fishid;
		// obj.fish_id = app && app.fishesArr && app.fishesArr.length > 0 && app.fishesArr[0];
		dispatch(
			leaderboardranking(obj, cb => {
				console.log(cb, 'in leader card>>>>>>>>>>>>>>>>>>>');
				if (cb) {
					console.log(cb, 'callBack in likes');
					if (cb?.data?.data) {
						let fishArr = cb?.data?.data?.leaderboardRankingAnually;
						fishArr.forEach(element => {
							element.imgUrl = cb && cb.data && cb.data.base_url;
						});
						setMembersList(fishArr);

					}
				}
			}),
		);
	}
	const _renderView = ({ item, index }) => (
		<ImageBackground style={{ flex: 1 }}
			activeOpacity={1}
			source={icons.ic_signup_bg}>
			<TouchableOpacity style={styles.LCRPost} >
				<View style={styles.content1}>
					<View style={styles.rankingView}>
						<View style={styles.rankCircle}>
							<Text style={styles.rank}>{item.srno}</Text>
						</View>
						<Text style={styles.weight}>{item?.Weight} lb</Text>
					</View>

					<View style={styles.userInfo}>
						<Text style={styles.fullname}>{item?.user?.full_name}</Text>
						<Text style={styles.time}>Caught on:
							<TimeAgo time={item?.LCR_Datetime} /></Text>
						<Text style={styles.time}>
							{item?.fish?.title}
						</Text>
					</View>

					<View style={styles.imgView}>
						<Image style={styles.image}

							source={{ uri: `${item.imgUrl}${item.image}` }} />
					</View>
				</View>
			</TouchableOpacity>
		</ImageBackground>
	);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: colors.white1 }}>
			<View style={styles.content}>
				<ImageBackground source={icons.LeaderBoard1} style={styles.bgImg}>

					<FlatList
						extraData={membersList}
						data={membersList}
						renderItem={_renderView}
						keyExtractor={(item, index) => 'key' + index}
						ListHeaderComponent={() =>
							!membersList.length ? (
								<Text style={styles.nomatch}>No Match found</Text>
							) : null
						}
					/>

				</ImageBackground>
			</View>
			<Loader isLoading={app.loading} isAbsolute />

		</SafeAreaView>
	)
}

export default LeaderboardCard

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
	LCRPost: {
		backgroundColor: '#fafafa',
		marginVertical: 10,
		width: windowWidth,
	},
	content1: {
		flexDirection: 'row',
		width: '100%',
		paddingVertical: 10,
		paddingHorizontal: '2%',
		justifyContent: 'space-between',
	},
	rankingView: {
		justifyContent: 'space-between',
		width: '23%',
	},
	rankCircle: {
		backgroundColor: '#ffe347',
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		// padding: 5,
		shadowColor: '#000',
		shadowOffset: { width: 2, height: 2 },
		// shadowRadius: 0
		shadowOpacity: 1,
	},
	rank: {
		fontSize: 16,
	},
	weight: {
		fontSize: 18,
		fontFamily: fonts.semiBold
	},
	userInfo: {
		// flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		width: '51%',
		// height: '100%',
		// marginLeft: 10,
		// maxWidth: '55%',
	},
	imgView: {
		width: '22%',
		justifyContent: 'center',
		alignItems: 'flex-end',
	},
	image: {
		width: 75,
		height: 75,
		resizeMode: 'cover',
		borderRadius: 50,
	},
	fullname: {
		fontSize: 20,
		marginBottom: 5,
		fontWeight: '600',
	},
	time: {
		fontSize: 16,
		marginBottom: 5,
		fontFamily: fonts.semiBold
	},
	fishType: {
		fontSize: 20,
		marginBottom: 5,
		fontWeight: '400',
	},
	bgImg: {
		width: '100%',
		height: '100%',
		flexDirection: 'column',
		alignItems: 'center',
	},
	content: {
		position: 'relative',
		alignItems: 'center',
		top: 0.108,
		flex: 1,
	},
	nameStyle: {
		fontFamily: fonts.regular,
		fontSize: moderateScale(16),
		width: layout.size.width / 4,
		color: colors.white1,
		paddingHorizontal: moderateScale(5),
	},
	dateStyle: {
		fontFamily: fonts.regular,
		fontSize: moderateScale(16),
		color: colors.white1,
		paddingHorizontal: moderateScale(5),
		top: moderateScale(15),
	},
	listView: {
		margin: 10,
		flexDirection: 'column',
		padding: 20,
		paddingVertical: moderateScale(15),
	},
	viewStyle: {
		flexDirection: 'row',
		alignItems: 'center',
	},
})
