import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../../../../assets';
import {colors} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';

export default StyleSheet.create({
  nomatch: {
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: fonts.semiBold,
  },
  line: {
    height: 1.9,
    backgroundColor: colors.black1,
    margin: 8,
  },
  bgImg: {
    height: layout.size.height / 3.9,
    width: layout.size.height / 3.9,
    borderRadius: moderateScale(110),

  },
  simage: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: 50,
  },
  doubletextstyle: {
    fontSize: moderateScale(20),
    left: moderateScale(10),
    margin: 5,
    color: colors.black1,
    fontFamily: fonts.bold,
  },
style: {
    fontSize: moderateScale(20),
    left: moderateScale(10),
    margin: 5,
    color: colors.primary,
    fontFamily: fonts.semiBold,
  },
  singletextstyle: {
    fontSize: moderateScale(20),
    left: moderateScale(10),
    margin: 5,
    color: colors.black1,
    fontFamily: fonts.bold,
  },
  righttextstyle: {
    fontSize: moderateScale(20),
    right: moderateScale(10),
    margin: 5,
    color: colors.primary,
    fontFamily: fonts.semiBold,
  },
  viewstyle: {
    flexDirection: 'row',
    height: moderateScale(70),
    marginVertical: moderateScale(10),
    margin: 10,
    justifyContent: 'space-between',
    backgroundColor: colors.lightTransparent,
    alignItems: 'center',
  },
  viewstylesingle: {
    flexDirection: 'row',
    height: moderateScale(45),
    marginVertical: moderateScale(10),
    margin: 10,
    justifyContent: 'space-between',
    backgroundColor: colors.lightTransparent,
    alignItems: 'center',
  },
  viewstylemap: {
    height: layout.size.height/4,
    marginVertical: moderateScale(10),
    margin: 10,
    justifyContent: 'space-between',
    backgroundColor: colors.lightTransparent,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.8,
  },
});
