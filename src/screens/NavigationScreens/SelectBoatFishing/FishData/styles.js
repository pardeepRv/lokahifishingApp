import {StyleSheet , Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import { colors } from '../../../../utilities/constants';
import { layout } from '../../../../utilities/layout';


const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default StyleSheet.create({
  safeAreaView: {

		justifyContent: 'center',
		alignItems: 'center',
	},
	mapContainer: {
		height: windowHeight * 0.4,
		width: windowWidth,
		justifyContent: 'flex-end',
		alignItems: 'center',
		borderColor: '#fafafa',
		borderWidth: 2,
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	profileInfo: {
		borderTopWidth: 1,
		borderColor: 'lightgray',
		paddingTop: 15,
		paddingBottom: 15,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	profilePic: {
		height: windowHeight * 0.05,
		width: windowHeight * 0.05,
		borderColor: '#fff',
		borderWidth: 2,
		borderRadius: 50,
	},
	title: {
		fontWeight: '700',
		fontSize: 18,
	},
	textSection: {
		borderTopWidth: 1,
		borderColor: 'lightgray',
		paddingVertical: 15,
		paddingHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	or: {
		fontSize: 18,
		fontWeight: '700',
		marginVertical: 20,
		paddingHorizontal: 10,
	},
	locationTextInput: {
		borderBottomWidth: 1,
		// borderWidth: 1,
		// borderColor: 'gray',
		// backgroundColor: '#fff',
		fontSize: 16,
		// padding: 3,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		minWidth: 80,
		marginTop: 20,
		marginRight: 10,
		paddingBottom: 2,
	},
	degreesTextInput: {
		borderBottomWidth: 1,
		// borderWidth: 1,
		// borderColor: 'gray',
		// backgroundColor: '#fff',
		fontSize: 16,
		// padding: 3,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		minWidth: 40,
		paddingBottom: 2,
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
		padding: 20,
		backgroundColor: '#fafafa',
		borderRadius: 10,
		borderColor: 'black',
		borderWidth: 1,
		alignItems: 'center',
		elevation: 5,
	},
	blurView: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
  },
  contactSwitch: {
    top: moderateScale(2),
    alignSelf: 'center',
    right: 15,
    borderColor: colors.white1,
    borderWidth: 1,
    borderRadius: 16,
  },
  subContainer: {
    height: layout.size.height / .50,
	// flex:1
	// backgroundColor:'black'
  },
  subContentContainer: {
    paddingBottom: moderateScale(20),
  },
});
