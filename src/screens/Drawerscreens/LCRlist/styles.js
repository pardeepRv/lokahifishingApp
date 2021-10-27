import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../../../assets';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

export default StyleSheet.create({
  listView: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
    padding: 8,
    paddingVertical: moderateScale(15),
  },
  viewStyle: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    // alignSelf:'flex-end'
  },
  sharingtext: {
    fontFamily: fonts.bold,
    fontSize: moderateScale(12),
    color: colors.primary,
    textAlign: 'center',
    top: 5,
  },
  nameStyle: {
    fontFamily: fonts.bold,
    fontSize: moderateScale(15),
    color: colors.white1,
    paddingHorizontal: moderateScale(10),
  },
  dateStyle: {
    fontFamily: fonts.semiBold,
    fontSize: moderateScale(12),
    color: colors.white1,
    paddingHorizontal: moderateScale(10),
    top: 10,
  },
  rightArrow: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    top: 5,
  },
  nomatch: {
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: fonts.semiBold,
  },
});
