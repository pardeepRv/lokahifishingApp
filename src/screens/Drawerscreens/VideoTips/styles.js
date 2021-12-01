import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../../../assets';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

export default StyleSheet.create({
  container: {
    flex: 1,
    top: moderateScale(20),
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: colors.lightTransparent,
    padding: 10,
    marginVertical: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    color: colors.white1,
    fontSize: 28,
    backgroundColor: colors.secondry,
  },
  title: {
    width: layout.size.width / 1.4,
    fontSize: 14,
    fontFamily: fonts.bold,
    alignSelf: 'center',
    color: colors.white1,
  },
});
