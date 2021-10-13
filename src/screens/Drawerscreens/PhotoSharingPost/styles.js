import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../../../assets';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

export default StyleSheet.create({
  image: {
    flex: 1,
    height: '100%',
  },

content: {
  position: 'relative',
  display: 'flex',
  flex: 1,
},
uploadContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  height: moderateScale(100),
  width: moderateScale(100),
  alignSelf: 'center',
  marginTop: moderateScale(21),
  borderRadius: moderateScale(100),
  borderColor: colors.transparent,
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
  bottom: moderateScale(10),
  right: 10,

},
uploadStoreBtn: {
  height: moderateScale(40),
  width:moderateScale(40),
  borderRadius: 20,
  top: 35,
  // alignItems: 'center',
},
logo2: {
  tintColor: colors.black1,
  width: moderateScale(30),
  height: moderateScale(30),
  borderRadius: 20,
  left:5,
},
listView: {
  margin: moderateScale(11),
  paddingVertical: moderateScale(0),
  alignSelf:'center'
},
labelTextStyle: {
  fontFamily: fonts.bold,
  fontSize: moderateScale(16),
  color: colors.white1,
},
input: {
  height: layout.size.height/5.5,
  width:layout.size.width/1.5,
  margin: 15,
  borderWidth: 3,
  borderColor:colors.lightTransparent,
  padding: 10,
  backgroundColor:colors.white1,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.4,
  borderWidth: 0.0,
},
sharingtext: {
  fontFamily: fonts.bold,
  fontSize: moderateScale(22),
  color: colors.white1,
  paddingHorizontal: moderateScale(10),
  top:5,
  alignSelf:'center'
},
});
