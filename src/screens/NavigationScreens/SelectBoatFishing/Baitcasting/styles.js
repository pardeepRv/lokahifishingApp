import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
//external libraries
import {RFValue} from 'react-native-responsive-fontsize';
import {fonts} from '../../../../../assets';
import {colors} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';

export default StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  listView: {
    backgroundColor: colors.Black1,
    paddingVertical: moderateScale(40),
    margin: moderateScale(18),
    right: moderateScale(20),
    alignItems: 'flex-start',
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    height: layout.size.height / 3,
    width: layout.size.width / 1.1,
  },
  nomatch: {
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: fonts.semiBold,
  },
});
