import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../../../assets';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

export default StyleSheet.create({
  listView: {
    margin: 10,
    padding: 10,
    paddingVertical: moderateScale(30),
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: colors.primary,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  nomatch: {
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: fonts.semiBold,
    left: layout.size.width / 3,
  },
});
