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
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: 30,
  },
  doubletextstyle: {
    fontSize: moderateScale(20),
    left: moderateScale(10),
    color: colors.primary,
    fontFamily: fonts.bold,
    left: moderateScale(30),
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
    height: moderateScale(45),
    marginVertical: moderateScale(10),
    margin: 10,
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
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.8,
  },
  listView: {
    margin: moderateScale(1),
    height: layout.size.height / 5.5,
    width: layout.size.width / 2,
  },
  input: {
    height: 50,
    width:layout.size.width/2,
    borderColor:colors.lightTransparent,
padding:10,
textAlign:'right',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.5,
    // elevation: 3,
    // alignSelf:'center'
  },
  labelTextStyle: {
    fontFamily: fonts.bold,
    fontSize: moderateScale(16),
    color: colors.black1,
  },
});
