import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../../../../assets';
import {colors} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';

//external libraries
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  image: {
    flex: 1,
    height: '100%',
  },
  content: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.white1,
  },
  modalcontainer: {
    marginTop: 50,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    width: layout.size.width - 30,
    paddingHorizontal: 25,
  },
  textItem: {
    paddingVertical: 10,
    alignSelf: 'center',
  },
  list: {
    width: moderateScale(10),
  },
  listItem: {
    paddingVertical: 10,
    margin: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: layout.size.width - 50,
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '400',
    paddingTop: layout.size.height / 4,
  },
  toolsTitle: {
    fontWeight: '600',
    fontSize: 22,
    textAlign: 'center',
    paddingTop: 20,
  },
  modal: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.white1,
    marginLeft: moderateScale(20),
    marginRight: moderateScale(20),
    marginTop: moderateScale(100),
    marginBottom: moderateScale(100),
    borderRadius:1,
    borderWidth:1
  },
  backBtnView: {
    // width: Dimensions.get('window').width - 50,
    // backgroundColor: colors.secondry,
    // height: moderateScale(50),
  },
  btnStyles: {
    backgroundColor: colors.secondry,
    width: layout.size.width - 80,
    alignSelf: 'center',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#8fb1aa',
  },
});
