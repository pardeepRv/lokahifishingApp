import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../../../assets';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

export default StyleSheet.create({
  listView: {
    margin: 10,
    flexDirection: 'row',
    padding: 10,
    paddingVertical: moderateScale(15),
  },
  viewStyle: {
    flexDirection: 'row',
    flex: 0.9,
  },
  nameStyle: {
    fontFamily: fonts.bold,
    fontSize: moderateScale(16),
    color: colors.white1,
    paddingHorizontal: moderateScale(5),
    bottom: 10,
    width: layout.size.width / 1.5,
  },
  dateStyle: {
    fontFamily: fonts.bold,
    fontSize: moderateScale(16),
    color: colors.white1,
    paddingHorizontal: moderateScale(5),
    width: layout.size.width / 1.5,
  },
  rightArrow: {
    height: moderateScale(30),
    width: moderateScale(30),
    alignSelf: 'center',
    left: moderateScale(35),
  },
  nomatch: {
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: fonts.semiBold,
  },
  container: {
    flex: 1,
    flexDirection: 'column'
},
gallery: {
    flexDirection: 'column'
},
tabs: {
    flexDirection: 'row',
    backgroundColor: '#333',
    padding: 20
},
tab: {
    flex: 1
},
icon: {
    textAlign: 'center'
},
});
