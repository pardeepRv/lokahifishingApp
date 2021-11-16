import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts} from '../../../../../assets';
import {colors} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';


export default StyleSheet.create({
  nomatch: {
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: fonts.semiBold,
  },
  line: {
    height: 1.9,
    backgroundColor: colors.black1,
    margin: 8,
  },
  simage: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: 50,
  },
  doubletextstyle: {
    fontSize: moderateScale(20),
    left: moderateScale(10),
    margin: 5,
    color: colors.black1,
    fontFamily: fonts.bold,
  },
  style: {
    fontSize: moderateScale(20),
    left: moderateScale(10),
    margin: 5,
    color: colors.primary,
    fontFamily: fonts.semiBold,
  },
  singletextstyle: {
    fontSize: moderateScale(20),
    left: moderateScale(10),
    margin: 5,
    color: colors.black1,
    fontFamily: fonts.bold,
  },
  righttextstyle: {
    fontSize: moderateScale(20),
    right: moderateScale(10),
    margin: 5,
    color: colors.primary,
    fontFamily: fonts.semiBold,
  },
  viewstyle: {
    flexDirection: 'row',
    height: moderateScale(70),
    marginVertical: moderateScale(10),
    margin: 10,
    justifyContent: 'space-between',
    backgroundColor: colors.lightTransparent,
    alignItems: 'center',
  },
  viewstylesingle: {
    flexDirection: 'row',
    height: moderateScale(45),
    marginVertical: moderateScale(10),
    margin: 10,
    justifyContent: 'space-between',
    backgroundColor: colors.lightTransparent,
    alignItems: 'center',
  },
  viewstylemap: {
    height: layout.size.height / 4,
    marginVertical: moderateScale(10),
    margin: 10,
    justifyContent: 'space-between',
    backgroundColor: colors.lightTransparent,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.8,
  },
  bgImg: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  content: {
    position: 'relative',

    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    height: 50,
    top: 13,
    color: colors.white1,
    textAlign: 'center',

    fontSize: 32,
    fontWeight: '600',
  },
  picView: {
    height: layout.size.height / 2.8,
    width: layout.size.height / 2.8,

    shadowColor: colors.black1,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  pic: {
    borderColor: colors.white1,
    borderWidth: 2,
    borderRadius: 7,
    height: layout.size.height / 2.8,
    width: layout.size.height / 2.8,
  },
  loading: {
    borderColor: colors.white1,
    borderWidth: 2,
    borderRadius: 7,
    height: '100%',
    width: '100%',
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    top: moderateScale(5),
    width: layout.size.width / 1.1,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  profilePic: {
    height: moderateScale(80),
    width: moderateScale(80),
    borderColor: colors.white1,
    borderWidth: 2,
    borderRadius: 7,
  },
  // username: {
  // 	fontSize: 32,
  // 	fontWeight: '600',
  // },
  date: {
    fontSize: 20,
    fontWeight: '500',
    shadowColor: colors.black1,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  commentView: {
    width: layout.size.width / 1.1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.black1,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  comment: {
    fontSize: 20,
    fontWeight: '600',

    color: colors.white1,
    textAlign: 'center',
  },
  fishText: {
    fontSize: 24,
    fontWeight: '700',
  },
  noComment: {
    fontSize: 22,
    fontWeight: '500',
    color: colors.grey1,
    fontStyle: 'italic',
  },
  likecommentview: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: layout.size.width / 1,
    paddingBottom: moderateScale(20),
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  likecomment: {
    display: 'flex',
    alignItems: 'center',
  },
  likecommenttext: {
    paddingTop: 5,
    fontSize: 18,
    height: moderateScale(50),

    color: colors.white1,
    textAlign: 'center',

    fontWeight: '600',
  },
});
