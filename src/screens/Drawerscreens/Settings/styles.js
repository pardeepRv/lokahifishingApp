import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../../../assets';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

//external libraries
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '100%',
  },
  content: {
    position: 'relative',

    display: 'flex',
    flex: 1,
  },
  contentcontainer: {
    flex: 1,
    marginTop: layout.size.height / 4,
  },
  Container: {
    backgroundColor: '#ffffff25',
    marginTop: moderateScale(15),
    height: moderateScale(45),
  },
  text: {
    top: moderateScale(-15),
    alignSelf: 'flex-end',
    right: 15,
    fontSize: 22,
    color: colors.white1,
  },
  textstyle: {
    fontSize: 22,
    color: colors.white1,
    top: moderateScale(8),
    left: moderateScale(10),
    textAlign: 'left',
    // padding: 12,
    backgroundColor: colors.transparent,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowContent: {
    flex: 1,
  },
  contactSwitch: {
    top: moderateScale(-15),
    alignSelf: 'flex-end',
    right: 15,
    borderColor: colors.white1,
    borderWidth: 1,
    borderRadius: 16,
  },
});
