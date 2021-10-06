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
    margin: 4,
    flexDirection: 'row',
    padding: 6,
    paddingVertical: moderateScale(10),
  },
  viewStyle: {
    flexDirection: 'row',
    flex: 0.9,
  },
  nameStyle: {
    fontFamily: fonts.regular,
    fontSize: moderateScale(20),
    color: colors.primary,
    paddingHorizontal: moderateScale(5),
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
