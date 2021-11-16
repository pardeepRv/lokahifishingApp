import { StyleSheet  , Dimensions} from 'react-native';
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
        height:moderateScale(1),
        top:20,
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
});
