import {StyleSheet , Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../../../assets';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
//external libraries
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  listView: {
    backgroundColor: colors.grey12,
    flexDirection: 'row',
    padding: 10,
    margin:5,
    paddingVertical: moderateScale(5),
    justifyContent:'space-between'
  },
  viewStyle: {
    flexDirection: 'row',
    flex: 0.9,
  },
  nameStyle: {
    fontFamily: fonts.semiBold,
    fontSize: moderateScale(16),
    color: colors.black1,
    paddingHorizontal: moderateScale(5),
    textAlign:'left',
    width:layout.size.width/2
  },
  dateStyle: {
    fontFamily: fonts.regular,
    fontSize: moderateScale(16),
    color: colors.black1,
    paddingHorizontal: moderateScale(5),
    textAlign:'center',
    width:layout.size.width/1.8
  },
  rightArrow: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    tintColor: colors.black1,
  },
  nomatch: {
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: fonts.semiBold,
  },
  modal: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors.white1
  },
  backBtnView: {
    width: Dimensions.get('window').width,
    backgroundColor: colors.secondry,
    height:moderateScale(50)
  },
  modalcontent: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black4,
  },
  backBtn: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 5,
		marginLeft: -5,
		width: '40%',
	},
	backBtnText: {
		fontSize: 17,
		marginLeft: -10,
		color: '#147fff',
  },
  modalTitle: {
		textAlign: 'center',
		fontSize: 20,
		marginBottom: 15,
  },
  pdf: {
		flex: 1,
		width: Dimensions.get('window').width * 0.9,
  },

  modalcontainer: {
    height: layout.size.height / 5.,
    width: layout.size.width / 1.5,
    // top: 60,
    backgroundColor: colors.lightTransparent,
    alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 2,
    borderRadius: moderateScale(20),
    borderColor: '#D3D3D3',
  },
});
