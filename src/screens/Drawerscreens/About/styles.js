import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../../../assets';
import { colors } from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

//external libraries
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  
    image: {
      flex: 1,
      height: '100%',
    },
    content: {
      position: 'relative',
      // top: windowHeight * 0.108,
      // width: windowWidth * 0.9,
      display: 'flex',
      flex: 1,
      // maxHeight: windowHeight * (1 - 0.108),
    },
    text: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '500',
      lineHeight: 24,
      width:layout.size.width-30,
      paddingHorizontal:25,
    },
    textItem: {
      paddingVertical: 10,
      alignSelf:'center'
    
      // paddingHorizontal:25,
    },
    list: {
      width: moderateScale(10),
    },
    listItem: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      paddingVertical: 10,
    },
    title: {
      textAlign: 'center',
      fontSize: 26,
      fontWeight: '400',
      paddingTop:layout.size.height/4,
    },
    toolsTitle: {
      fontWeight: '600',
      fontSize: 22,
      textAlign: 'center',
      paddingTop: 20,
    },
});
