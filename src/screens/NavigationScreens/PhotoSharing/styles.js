import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../../../assets';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

export default StyleSheet.create({
  listView: {
    backgroundColor: colors.white1,
    margin: 10,
    flexDirection: 'row',
    padding: 10,
    paddingVertical: moderateScale(15),
  },
  viewStyle: {
    // flexDirection: 'row',
    flex: 1,
  },
  nameStyle: {
    fontFamily: fonts.regular,
    fontSize: moderateScale(16),
    color: colors.black1,
    paddingHorizontal: moderateScale(5),
  },
  dateStyle: {
    fontFamily: fonts.regular,
    fontSize: moderateScale(16),
    color: colors.black1,
    paddingHorizontal: moderateScale(5),
    textAlign: 'center',
  },
  rightArrow: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    tintColor: colors.black1,
  },
  nomatch: {
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: fonts.semiBold,
  },
  videoContainerAndroid: {
    width: layout.size.width - 80,
    backgroundColor: 'black',
    height: layout.size.height / 3.9,
    top: 15,
    marginVertical: 10,
  },
  videoContainerIOS: {
    width: layout.size.width - 80,
    backgroundColor: 'black',
    height: layout.size.height / 3.9,
    top: 20,
    marginVertical: 10,
  },
});
