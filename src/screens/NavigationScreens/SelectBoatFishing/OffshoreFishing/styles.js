import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
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
    height: moderateScale(1),
    top: 20,
    width: layout.size.width,
    flex: 1,
    alignItems: 'flex-start',
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    height: layout.size.height / 10,
    width: layout.size.width / 1.1,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

  },
  nomatch: {
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: fonts.regular,
  },
});
