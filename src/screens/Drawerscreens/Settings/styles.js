import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

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
    backgroundColor: colors.lightTransparent,
    marginTop: moderateScale(15),
    height: moderateScale(50),
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
    width: layout.size.width / 1.5,
    color: colors.white1,
    top: moderateScale(8),
    left: moderateScale(10),
    textAlign: 'left',
    fontWeight: 'bold',
    padding: 5,
    backgroundColor: colors.transparent,
  },

  tableRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contactSwitch: {
    top: moderateScale(2),
    alignSelf: 'center',
    right: 15,
    borderColor: colors.white1,
    borderWidth: 1,
    borderRadius: 16,
  },
});
