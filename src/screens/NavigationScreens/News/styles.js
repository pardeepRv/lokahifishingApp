import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../../../assets';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

export default StyleSheet.create({
  listView: {
    margin: 3,
    flexDirection: 'row',
    paddingVertical: moderateScale(15),
    backgroundColor:colors.lightTransparent,
  },
  viewStyle: {
    flexDirection: 'row',
    // flex: 0.9,width:layout.size.width-10,
  },
  nameStyle: {
    fontFamily: fonts.regular,
    fontSize: moderateScale(15),
    color: colors.white1,
    paddingHorizontal:25,

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
