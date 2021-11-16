import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../../../assets';
import { colors } from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

//external libraries
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  
  blockButton: {
    borderColor: 'blue',
    borderWidth: 1,
    height: 188,
    width: 153,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white1,
    borderRadius: 8,
  },
  blockRow: {
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // height: windowHeight,
  },
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 10, //Here is the trick
    height: '100%',
    backgroundColor: colors.white1,
    flex: 1,
    marginBottom: 10,
  },
  listView: {
    margin: moderateScale(1),
    flexDirection: 'row',
    paddingVertical: moderateScale(13),
  },
  viewStyle: {
    flexDirection: 'column',
    flex: 1,

  },
  nameStyle: {
    fontFamily: fonts.semiBold,
    fontSize: moderateScale(17),
    color: colors.black1,
    paddingHorizontal: moderateScale(16),
    fontWeight:'bold',
  },
  dateStyle: {
    fontFamily: fonts.regular,
    fontSize: moderateScale(14),
    color: colors.grey1,
    paddingHorizontal: moderateScale(16),
  },
  rightArrow: {
    height: 30,
    width: 30,
    left:30,
    alignSelf: 'center',
    fontFamily:fonts.bold,
  },
  nomatch: {
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: fonts.semiBold,
  },
});
