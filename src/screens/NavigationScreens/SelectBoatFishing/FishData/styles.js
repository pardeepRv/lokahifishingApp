import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../../../../assets';
import {colors} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';

export default StyleSheet.create({
  nomatch: {
    alignSelf: 'center',
    marginTop: moderateScale(20),
    fontFamily: fonts.semiBold,
  },
  line: {
    height: 1,
    backgroundColor: colors.black1,
    margin: 8,
  },
  bgImg: {
    height: layout.size.height / 6,
    width: layout.size.height / 6,
    borderRadius: moderateScale(100),
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.2,
    // elevation: 3,
  },
  simage: {
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: 30,
  },
  simage1: {
    height: moderateScale(50),
    width: layout.size.width/3,

right:moderateScale(55)
 
  },
  doubletextstyle: {
    fontSize: moderateScale(20),
    left: moderateScale(10),
    color: colors.primary,
    fontFamily: fonts.bold,
    left: moderateScale(30),
  },
  doubletextstyle1: {
    fontSize: moderateScale(20),
    left: moderateScale(10),
    margin: 5,
    color: colors.black1,
    fontFamily: fonts.bold,
  },
style1: {
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
    fontFamily: fonts.semiBold,
  },
  righttextstyle: {
    fontSize: moderateScale(20),
    right: moderateScale(10),
    margin: 5,
    color: colors.primary,
    fontFamily: fonts.bold,
  },
  viewstyle: {
    flexDirection: 'row',
    height: moderateScale(45),
    marginVertical: moderateScale(10),
    margin: 10,
    backgroundColor: colors.lightTransparent,
    alignItems: 'center',
  },
  viewstyle1: {
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
    height: layout.size.height / 4,
    marginVertical: moderateScale(10),
    margin: 10,
    justifyContent: 'space-between',
    backgroundColor: colors.lightTransparent,
    alignItems: 'center',
    borderColor: colors.transparent,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.8,
    borderWidth: 0.5,
  },
  input: {
    height: layout.size.height/5.5,
    width:layout.size.width/2,
    borderColor:colors.lightTransparent,
    padding: 10,
    backgroundColor:colors.white1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    elevation: 3,
  },
  contactSwitch: {
    alignSelf: 'center',
    right: 15,
    borderColor: colors.white1,
    borderWidth: 1,
    borderRadius: moderateScale(16),
  },
  labelTextStyle: {
    fontFamily: fonts.bold,
    fontSize: moderateScale(16),
    color: colors.white1,
  },
  listView: {
    margin: moderateScale(1),


    height: layout.size.height/5.5,
    width:layout.size.width/2,
  },
});
