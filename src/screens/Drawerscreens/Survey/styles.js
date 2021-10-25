import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../../../assets';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

export default StyleSheet.create({
  listView: {
    margin: 15,
    flexDirection: 'column',
    padding: 10,
    paddingVertical: moderateScale(15),
  },
  viewStyle: {
    flexDirection: 'row',
    flex: 0.9,
  },
  sharingtext: {
    fontFamily: fonts.bold,
    fontSize: moderateScale(12),
    color: colors.primary,
    paddingHorizontal: moderateScale(10),
    top:5,
  },
  nameStyle: {
    fontFamily: fonts.bold,
    fontSize: moderateScale(16),
    color: colors.white1,
    paddingHorizontal: moderateScale(10),
    width:layout.size.width/1.3,


  },
  nameStyle1: {
    fontFamily: fonts.bold,
    fontSize: moderateScale(16),
    color: colors.white1,
    paddingHorizontal: moderateScale(5),
  },
  dateStyle: {
    fontFamily: fonts.semiBold,
    fontSize: moderateScale(14),
    color: colors.white1,
    paddingHorizontal: moderateScale(10),
    top:10,

  },
  rightArrow: {
    height: 30,
    width: 30,
    alignSelf: 'center',

    top:5,

  },
  nomatch: {
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: fonts.semiBold,
  },
});
