import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../../../assets';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

export default StyleSheet.create({
  listView: {
    margin: 10,
    flexDirection: 'row',
    padding: 10,
    paddingVertical: moderateScale(15),
  },
  viewStyle: {
    flexDirection: 'row',
    flex: 0.9,
  },
  nameStyle: {
    fontFamily: fonts.semiBold,
    fontSize: moderateScale(14),
    color: colors.black1,
    bottom:moderateScale(8)
  },
  dateStyle: {
    fontFamily: fonts.semiBold,
    fontSize: moderateScale(16),
    color: colors.black1,
  },
  rightArrow: {
    height: moderateScale(20),
    width: moderateScale(20),
    alignSelf: 'center',
    left: moderateScale(20),
    tintColor: colors.black1,
  },
  nomatch: {
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: fonts.semiBold,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
