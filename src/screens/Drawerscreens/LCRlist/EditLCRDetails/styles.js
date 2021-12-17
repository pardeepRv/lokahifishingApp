import {StyleSheet , Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../../../../assets';
import {colors} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';


const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default StyleSheet.create({
  EditLCR: {
		position: 'relative',
		width: windowWidth,
		height: windowHeight * (1 - 0.108),
		display: 'flex',
		alignItems: 'center',
    flex: 1,
	},
	picView: {
		width: '100%',
		height: windowHeight * 0.2,
		backgroundColor: '#2c385e',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	title: {
		color: 'white',
		fontSize: 26,
		fontWeight: '700',
	},
	// lcrPic: {
	// 	height: windowHeight * 0.175,
	// 	width: windowHeight * 0.175,
	// 	borderRadius: 100,
	// },
	lcrInfo: {
		display: 'flex',
		alignItems: 'center',
		width: windowWidth,
	},
	label: {
		fontWeight: '500',
		fontSize: 18,
		color: '#533655',
		shadowColor: '#bb4e54',
		shadowOffset: { width: 1.25, height: 1.25 },
		shadowOpacity: 0.75,
		shadowRadius: 0,
    marginVertical: 15,
    textAlign:'center',
	bottom:moderateScale(10)
	},
	info: {
		backgroundColor: 'lightgray',
		padding: 10,
		width: windowWidth * 0.6,
		fontWeight: '800',
    color: '#2c385e',

    alignSelf : 'center'
	},
	saveBtn: {
		marginTop: 35,
		borderWidth: 1.75,
		borderColor: 'black',
		paddingHorizontal: 30,
		paddingVertical: 2,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		marginBottom: 125,
	},
	saveText: {
		fontWeight: '800',
		fontSize: 16,
		color: '#533655',
		shadowColor: '#bb4e54',
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.75,
		shadowRadius: 0,
	},
	logoView: {
		height: windowHeight * 0.2,
		width: windowHeight * 0.2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		height: '100%',
		width: '100%',
		resizeMode: 'contain',
	},
	lcrPic: {
		height: windowHeight * 0.175,
		width: windowHeight * 0.175,
		borderColor: '#fff',
		borderWidth: 2,
		borderRadius: 7,
	},
	blurView: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		zIndex: 1000,
	},
	centeredView: {
		width: windowWidth,
		height: windowHeight,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 10,
			height: 10,
		},
		shadowOpacity: 0.75,
		shadowRadius: 4,
	},
	modalView: {
		// width: windowWidth * 0.,
		// height: windowHeight * 0.6,
		padding: 20,
		backgroundColor: '#fafafa',
		borderRadius: 10,
		borderColor: 'black',
		borderWidth: 1,
		alignItems: 'center',
		elevation: 5,
	},
	section: {
		marginVertical: 10,
	},
	title: {
		fontWeight: '700',
		fontSize: 18,
		marginBottom: 10,
	},
	effortTitle: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 10,
	},
	effortSubtext: {
		marginLeft: 5,
  },
  subsection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
});
