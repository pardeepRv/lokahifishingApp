import { StyleSheet, Dimensions } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { fonts } from '../../../../assets';
import { colors } from '../../../utilities/constants';
import { layout } from '../../../utilities/layout';


const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
//external libraries
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
	listView: {
		height: moderateScale(1),
		top: 20,
		width: layout.size.width,
		flex: 1,
		alignItems: 'flex-start',
	},
	viewStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignSelf: 'center',
		height: layout.size.height / 10,
		width: layout.size.width / 1.1,
	},
	nomatch: {
		alignSelf: 'center',
		marginTop: 20,
		fontFamily: fonts.regular,
	},
	content: {
		height: '100%',
		position: 'relative',
		top: windowHeight * 0.05,
		flex: 1,
	},
	scrollImageCtn: {
		alignItems: 'center',
		height: 143,
	},
	subtext: {
		marginTop: 15,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#2c385e',
		shadowOpacity: 0.7,
		shadowColor: '#000',
		shadowOffset: { height: 1, width: 1 },
		shadowRadius: 0,
	},
	imageRender: {
		height: '60%',
		width: '100%',
	},
	button: {
		borderWidth: 1,
		borderColor: '#2c385e',
		borderRadius: 8,
		width: '40%',
		height: 40,
		marginHorizontal: 20,
		marginVertical: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	clickedButton: {
		borderWidth: 1,
		borderColor: '#2c385e',
		backgroundColor: '#2c385e',
		borderRadius: 8,
		width: '40%',
		height: 40,
		marginHorizontal: 20,
		marginVertical: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: '#2c385e',
		textDecorationLine: 'underline',
		textDecorationColor: '#000',
		fontWeight: 'bold',
	},
	clickedButtonText: {
		color: '#fff',
		textDecorationLine: 'underline',
		textDecorationColor: '#fff',
		fontWeight: 'bold',
	},
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
});
