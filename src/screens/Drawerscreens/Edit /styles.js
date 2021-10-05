import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

export default StyleSheet.create({
 
    content: {
      height: '100%',
      width: '100%',
      flex: 1,
      backgroundColor: colors.secondry,
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      height: '100%',
    },
    pdf: {
      flex: 1,
      width: '100%',
    },

});
