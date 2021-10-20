import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';


//external libraries
import {RFValue} from 'react-native-responsive-fontsize';
import { layout } from '../../../../utilities/layout';
import { colors } from '../../../../utilities/constants';
import { fonts } from '../../../../../assets';

export default StyleSheet.create({
  
  content: {
    position: 'relative',
    display: 'flex',
    flex: 1,
  },
  pdf: {
   
    width: '100%',
    height:layout.size.height/2.5
  },
  
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      height: '100%',
    },
    contentcontainer: {
       height:layout.size.height /1.8,
      // marginTop: layout.size.height / 4,
      // backgroundColor:'#000'
    },
    uploadContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      height: layout.size.height/4.2,
      width: layout.size.height/4.2,
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
      backgroundColor:colors.lightTransparent
    },
    uploadContent: {
      alignItems: 'center',
      position: 'absolute',
      bottom: 30,
      right: 10,
    },
    uploadStoreBtn: {
      height: 40,
      width: 40,
      borderRadius: 20,
      backgroundColor: 'transparent',
      top: 20,
      // alignItems: 'center',
    },
    logo2: {
      tintColor: colors.white1,
      width: moderateScale(40),
      height: moderateScale(40),
      borderRadius: 20,
    },
    nameStyle: {

      height: moderateScale(25),

    alignSelf:'center',
      fontFamily: fonts.regular,
      fontSize: moderateScale(20),
      color: colors.primary,

      fontWeight:"bold",

    },
    nameStyle1: {

      height: moderateScale(20),

    alignSelf:'center',
      fontFamily: fonts.regular,
      fontSize: moderateScale(15),
      color: colors.primary,

      fontWeight:"bold",

    },
    
});
