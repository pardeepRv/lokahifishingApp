import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../../../assets';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

export default StyleSheet.create({
  listView: {
    margin: 10,
    flexDirection: 'column',
    padding: 10,
    paddingVertical: moderateScale(15),
  },
  viewStyle: {
    flexDirection: 'row',
    flex: 0.9,
    padding: 8,
  },
  nameStyle: {
    fontFamily: fonts.bold,
    fontSize: moderateScale(16),
    color: colors.primary,
    paddingHorizontal: moderateScale(5),
  },
  nameStyle1: {
    fontFamily: fonts.bold,
    fontSize: moderateScale(16),
    color: colors.white1,
    paddingHorizontal: moderateScale(5),
  },
  dateStyle: {
    fontFamily: fonts.bold,
    fontSize: moderateScale(16),
    color: colors.primary,
    paddingHorizontal: moderateScale(5),
    top: 5,
  },
  rightArrow: {
    height: moderateScale(30),
    width: moderateScale(30),
    alignSelf: 'center',
    left: moderateScale(20),
  },
  nomatch: {
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: fonts.semiBold,
  },
});
