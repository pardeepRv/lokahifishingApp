import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { fonts } from '../../../../assets';
import { colors } from '../../../utilities/constants';
import { layout } from '../../../utilities/layout';


//external libraries 
import {RFValue} from 'react-native-responsive-fontsize';

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
  
    height: '100%',
  },
  labelTextStyle: {
    fontFamily: fonts.semiBold,
    fontSize: moderateScale(16),
    color: colors.white1,
  },
  textinput: {
    fontSize:RFValue(22),
    alignSelf: 'center',
    fontFamily: fonts.semiBold,
    marginTop: moderateScale(15),
    color: colors.white1,
  },

})