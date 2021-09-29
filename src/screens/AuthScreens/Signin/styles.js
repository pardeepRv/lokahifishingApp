import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../../../assets';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white1,
  },
  subContainer: {
    paddingHorizontal: moderateScale(15),
    marginLeft: 15,
  },
  subContentContainer: {
    paddingBottom: moderateScale(40),
  },
  textInputStyles: {
    height: 50,
    borderRadius: 25,
    paddingHorizontal: moderateScale(30),
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    color: colors.white1,
    fontFamily: fonts.semiBold,
  },
  signInBtn: {
    height: 44,
    width: layout.size.width - 80,
    backgroundColor: colors.primary,
    borderRadius: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '100%',
  },
  labelTextStyle: {
    fontFamily: fonts.semiBold,
    fontSize: moderateScale(16),
    color: colors.white1,
  },
  createAccount: {
    alignSelf: 'center',
    fontFamily: fonts.semiBold,
    marginTop: moderateScale(5),
    color: colors.white1,
  },
  signuptext: {
    alignSelf: 'center',
    fontFamily: fonts.extraBold,
    marginTop: moderateScale(5),
    color: colors.primary,
  },
  btnStyles: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    width: layout.size.width - 50,
    alignSelf: 'center',
  },
  forgotStyle:{
    alignSelf: 'flex-end',
    fontFamily: fonts.semiBold,
    marginTop: moderateScale(5),
    color: colors.white1,
  } 
});
