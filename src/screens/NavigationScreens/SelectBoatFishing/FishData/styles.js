import {StyleSheet , Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import { fonts } from '../../../../../assets';
import { colors } from '../../../../utilities/constants';
import { layout } from '../../../../utilities/layout';


const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default StyleSheet.create({
  safeAreaView: {
	  flex:1,
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
    // height: layout.size.height ,
	flex:1,
	// backgroundColor:colors.secondry
  },
  subContentContainer: {
    paddingBottom: moderateScale(2),
  },
  modalcontent: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black4,
  },
  modalcontainer: {
    height: layout.size.height / 5,
    width: layout.size.width / 1.5,
    // top: 60,
    alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 2,
    borderRadius: moderateScale(20),
    borderColor: '#D3D3D3',
  },
  modaltextlogo: {
    height: moderateScale(25),
    fontFamily: fonts.bold,
    fontSize: moderateScale(20),
    color: colors.white1,
    top: 10,
  },
  modalbuttonviewstyle: {
    height: moderateScale(40),
    width: layout.size.width / 1.6,
alignItems:'center',
    top: moderateScale(10),
  },
  modalbuttonstyle: {
    backgroundColor: colors.lightTransparent,
    // borderColor: colors.black15,
    borderRadius: moderateScale(6),
    width: moderateScale(100),
    height: moderateScale(40),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    elevation: 3,
  },
  modalbuttontextstyle: {
    color: colors.white1,
    fontFamily: fonts.bold,
    fontSize: moderateScale(16),
    alignSelf: 'center',
    fontWeight: 'bold',
    margin: moderateScale(10),
  },
  modalbuttontextstyle1: {
    color: colors.white1,
    fontFamily: fonts.bold,
    fontSize: moderateScale(14),
    alignSelf: 'center',
    fontWeight: 'bold',
	textAlign:'center',
    margin: moderateScale(5),
    top: 10,

  },
});
