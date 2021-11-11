import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../../../assets';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

export default StyleSheet.create({
  listView: {
    margin:moderateScale(12),
    flexDirection: 'row',
    paddingVertical: moderateScale(10),
    backgroundColor:colors.lightTransparent,
    borderRadius:moderateScale(27)
  },
  viewStyle: {
    flexDirection: 'row',
    // flex: 0.9,width:layout.size.width-10,
  },
  nameStyle: {
    fontFamily: fonts.regular,
    fontSize: moderateScale(16),
    color: colors.black1,
    paddingHorizontal:moderateScale(20),

  },
  dateStyle: {
    fontFamily: fonts.regular,
    fontSize: moderateScale(16),
    color: colors.white1,
    paddingHorizontal: moderateScale(5),
  },
  rightArrow: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  nomatch: {
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: fonts.semiBold,
  },
});
