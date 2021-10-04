import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../../../assets';
import { colors } from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

//external libraries
import {RFValue} from 'react-native-responsive-fontsize';

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
       height:layout.size.height /2.5,
      // marginTop: layout.size.height / 4,
      // backgroundColor:'#000'
    },
    uploadContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      height: moderateScale(180),
      width: moderateScale(180),
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

      height: moderateScale(30),

    alignSelf:'center',
      fontFamily: fonts.regular,
      fontSize: moderateScale(20),
      color: colors.primary,

      fontWeight:"bold",

    },
    
});
