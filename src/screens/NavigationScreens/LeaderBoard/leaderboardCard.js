import React, { useState, useCallback, useEffect, useContext } from 'react'
import { Text, TouchableOpacity, ImageBackground , SafeAreaView , View, StyleSheet, Dimensions, FlatList ,Image } from 'react-native'




import { fonts, icons } from '../../../../assets'
import { moderateScale } from 'react-native-size-matters';
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

const LeaderboardCard = props => {
	const [membersList, setMembersList] = useState(members);
  
	const _renderView = ({item, index}) => (
    <ImageBackground style={{flex:1}}
    activeOpacity={1} 
     source={icons.ic_signup_bg}>
     <TouchableOpacity style={styles.LCRPost} >
			<View style={styles.content1}>
				<View style={styles.rankingView}>
					<View style={styles.rankCircle}>
						<Text style={styles.rank}>{item.srno}</Text>
					</View>
					<Text style={styles.weight}>{item.client}</Text>
				</View>

				<View style={styles.userInfo}>
					<Text style={styles.fullname}>{item.name}</Text>
					<Text style={styles.time}>Caught on:</Text>
					<Text style={styles.time}>{item.date}</Text>
				</View>

				<View style={styles.imgView}>
					 <Image style={styles.image} source={item.img} /> 
				</View>
			</View>
		</TouchableOpacity>
    </ImageBackground>
  );


	return (
		<SafeAreaView style={{flex: 1, backgroundColor: colors.white1}}>
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
		fontWeight: '500',
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
	},
	fullname: {
		fontSize: 20,
		marginBottom: 5,
		fontWeight: '600',
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
