import {ImageBackground, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../../../assets';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

export default StyleSheet.create({
  listView: {
    margin: 15,
    flexDirection: 'row',
    padding: 10,
    paddingVertical: moderateScale(15),
  },
  viewStyle: {
    flexDirection: 'row',
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sharingtext: {
    fontFamily: fonts.bold,
    fontSize: RFValue(12),
    color: colors.primary,
    paddingHorizontal: moderateScale(10),
    top: 5,
  },
  nameStyle: {
    fontFamily: fonts.bold,
    fontSize: RFValue(16),
    color: colors.white1,
    paddingHorizontal: moderateScale(10),
    alignSelf: 'center',
  },
  dateStyle: {
    fontFamily: fonts.semiBold,
    fontSize: RFValue(14),
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
    color:colors.white1,
    fontFamily: fonts.semiBold,
  },
  buttonView: {
    flexDirection: 'column',
    height: moderateScale(60),
    padding: moderateScale(5),
  },
  buttonviewstyle: {
    padding: moderateScale(5),
    height: moderateScale(50),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
