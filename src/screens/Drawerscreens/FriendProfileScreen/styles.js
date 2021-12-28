import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

//external libraries
import {RFValue} from 'react-native-responsive-fontsize';
import { layout } from '../../../utilities/layout';
import { colors } from '../../../utilities/constants';
import { fonts } from '../../../../assets';


export default StyleSheet.create({
  content: {
    position: 'relative',
    display: 'flex',
    flex: 1,
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '100%',
  },
  contentcontainer: {
    height: layout.size.height / 1.8,
    // marginTop: layout.size.height / 4,
    // backgroundColor:'#000'
  },
  uploadContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: layout.size.height / 4.2,
    width: layout.size.height / 4.2,
    alignSelf: 'center',
    marginTop: moderateScale(1),
    borderRadius: moderateScale(100),
    borderColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    borderWidth: 0.5,
    backgroundColor: colors.lightTransparent,
  },
  big:{
    borderRadius: moderateScale(100),
    height: layout.size.height / 4.2,
    width: layout.size.height / 4.2,
  },
  buttonView:{
    flexDirection: 'column',
    height: layout.size.height / 11,
    width: layout.size.width / 1,
    padding: moderateScale(5),
  },
  buttonviewstyle:{
    padding: moderateScale(5),
    height: layout.size.height / 11,
    width: layout.size.width / 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  nameStyle: {
    height: moderateScale(25),

    alignSelf: 'center',
    fontFamily: fonts.regular,
    fontSize: moderateScale(20),
    color: colors.primary,

    fontWeight: 'bold',
  },
  nameStyle1: {
    height: moderateScale(20),

    alignSelf: 'center',
    fontFamily: fonts.regular,
    fontSize: moderateScale(15),
    color: colors.primary,

    fontWeight: 'bold',
  },
  modalcontent: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black4,
  },
  modalcontainer: {
    height: layout.size.height / 6,
    width: layout.size.width / 1.5,
    // top: 60,
    backgroundColor: colors.lightTransparent,
    alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 2,
    borderRadius: moderateScale(20),
    borderColor: '#D3D3D3',
  },
  modaltextlogo: {
    height: moderateScale(25),
    fontFamily: fonts.bold,
    fontSize: moderateScale(20),
    color: colors.white1,
    top: 10,
  },
  modaltextstyle: {
    height: moderateScale(45),
    top: moderateScale(10),

    textAlign: 'center',
    fontFamily: fonts.bold,
    fontSize: moderateScale(15),
    color: colors.white1,
  },
  modalbuttonviewstyle: {
    padding: moderateScale(5),
    height: moderateScale(55),
    width: layout.size.width / 1.6,
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: moderateScale(10),
  },
  modalbuttonstyle: {
    backgroundColor: colors.lightTransparent,
    // borderColor: colors.black15,
    borderRadius: moderateScale(6),
    width: moderateScale(100),
    height: moderateScale(40),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    elevation: 3,
  },
  modalbuttontextstyle: {
    color: colors.white1,
    fontFamily: fonts.bold,
    fontSize: moderateScale(16),
    alignSelf: 'center',
    fontWeight: 'bold',
    margin: moderateScale(10),
  },
});
