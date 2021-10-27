import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
//external libraries
import {RFValue} from 'react-native-responsive-fontsize';
import {fonts} from '../../../../../assets';
import {colors} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';

export default StyleSheet.create({
  bgImg: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    position: 'relative',
    top: 0.108,
  },
  section: {
    marginVertical: 10,
    marginTop: moderateScale(40),
  },
  effortTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: moderateScale(20),
    color: colors.primary,
    fontFamily: fonts.bold,
  },
  effortSubtext: {
    marginLeft: 5,
    fontSize: moderateScale(14),
    fontFamily: fonts.semiBold,
    color: colors.primary,
  },
  subsection: {
    justifyContent: 'center',
    alignItems: 'center',
    top:5
  },
  labelTextStyle: {
    fontFamily: fonts.semiBold,
    fontSize: moderateScale(16),
    color: colors.primary,
    bottom: moderateScale(8),
    alignSelf:'flex-start'
  },
});
