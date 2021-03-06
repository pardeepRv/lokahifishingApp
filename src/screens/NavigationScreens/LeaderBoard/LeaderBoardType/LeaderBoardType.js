import React, {useEffect, useState, useContext, useRef} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {getPixelSizeForLayoutSize} from 'react-native/Libraries/Utilities/PixelRatio';
//internal libraries
import {fonts, icons} from '../../../../../assets';
import {Header} from '../../../../components/common/Header';
import {strings} from '../../../../localization';
import {colors} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';

let members = [
  {
    client: 'Henry',
    img: icons.user_placeholder_man_0,
    name: 'rv_kunal',
    srno: '# 1',
    date: 'Member since 1 oct 2021',
  },
  {
    client: 'Jhon',

    img: icons.user_placeholder_man_0,
    name: 'rv_kunal',
    date: 'Member since 2 oct 2021',
    srno: '# 2',
  },
  {
    client: 'Sara Tyller',

    img: icons.user_placeholder_man_0,
    name: 'rv_kunal',
    srno: '# 3',
    date: 'Member since 1 oct 2021',
  },
  {
    client: 'Jim Hori',

    img: icons.user_placeholder_man_0,
    name: 'rv_kunal',
    srno: '# 4',
    date: 'Member since 2 oct 2021',
  },
  {
    client: 'Dharminder thankur',

    img: icons.user_placeholder_man_0,
    name: 'rv_kunal',
    srno: '# 5',
    date: 'Member since 2 oct 2021',
  },
  {
    client: 'Jim Hori',

    img: icons.user_placeholder_man_0,
    name: 'rv_kunal',
    srno: '# 4',
    date: 'Member since 2 oct 2021',
  },
  {
    client: 'Jim Hori',

    img: icons.user_placeholder_man_0,
    name: 'rv_kunal',
    srno: '# 4',
    date: 'Member since 2 oct 2021',
  },
];
let data = [
  {
    client: 'Dharminder ',

    srno: '# 1',
    img: icons.user_placeholder_man_0,
    name: 'rv_kunal',
    date: 'Member since 1 oct 2021',
  },
  {
    client: 'Ashu',

    srno: '# 2',
    img: icons.user_placeholder_man_0,
    name: 'rv_kunal',
    date: 'Member since 2 oct 2021',
  },
  {
    client: 'Deepak',

    img: icons.user_placeholder_man_0,
    name: 'rv_kunal',
    srno: '# 3',
    date: 'Member since 1 oct 2021',
  },
  {
    client: 'Dharminder thankur',

    img: icons.user_placeholder_man_0,
    name: 'rv_kunal',
    srno: '# 5',
    date: 'Member since 2 oct 2021',
  },
  {
    client: 'Jim Hori',

    img: icons.user_placeholder_man_0,
    name: 'rv_kunal',
    srno: '# 4',
    date: 'Member since 2 oct 2021',
  },
  {
    client: 'Jim Hori',

    img: icons.user_placeholder_man_0,
    name: 'rv_kunal',
    srno: '# 4',
    date: 'Member since 2 oct 2021',
  },
  {
    client: 'Jim Hori',

    img: icons.user_placeholder_man_0,
    name: 'rv_kunal',
    srno: '# 4',
    date: 'Member since 2 oct 2021',
  },
];

const LeaderBoardType = ({navigation}) => {
  const [state, setState] = useState({
    color: {
      box1: colors.primary,
      box2: colors.white1,
      // text1:colors.white1,
      // text2:colors.black1,
    },
    membersList: members,
    membersList: data,
  });
  const {color, membersList} = state;
  function onButtonPressed(value) {
    // box1 pressed.
    console.log(`object`, state.membersList);
    if (value === true) {
      // Change box1 to red, and box2 to blue
      setState({
        color: {box1: colors.primary, box2: colors.white1},
        membersList: members,
      });
    } else {
      // box2 pressed
      // Change box1 to blue, and box2 to blue
      setState({
        color: {box1: colors.white1, box2: colors.primary},
        membersList: data,
      });
    }
    console.log(`state.memberlist>>>>`, state.membersList);
  }
  // const [membersList, setMembersList] = useState(members);

  const _renderView = ({item, index}) => (
    <ImageBackground style={{flex:1}}
    activeOpacity={1} 
     source={icons.ic_signup_bg}>
      <TouchableOpacity
        style={[
          styles.listView,
          {
            backgroundColor: colors.lightTransparent,
          },
        ]}
        activeOpacity={0.8}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <Text
            style={{
              fontFamily: fonts.regular,
              fontSize: moderateScale(16),
              color: colors.white1,
              paddingHorizontal: moderateScale(2),
              width: moderateScale(40),
            }}>
            {item.srno}
          </Text>
          <Text
            style={{
              fontFamily: fonts.regular,
              fontSize: moderateScale(16),
              color: colors.white1,
              paddingHorizontal: moderateScale(2),
              width: layout.size.width / 2,
              left: moderateScale(30),
            }}>
            {item.client}
          </Text>
        </View>
        <View style={styles.viewStyle}>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <View
              style={{
                justifyContent: 'flex-start',
                flexDirection: 'row',
              }}>
              <Text style={styles.nameStyle}>{item.name}</Text>
              <Text
                style={{
                  fontFamily: fonts.regular,
                  fontSize: moderateScale(16),
                  color: colors.white1,
                  paddingHorizontal: moderateScale(2),
                  width: layout.size.width / 5,
                  left: moderateScale(30),
                }}>
                {item.name}
              </Text>
            </View>
            <Text style={styles.dateStyle}>{item.date}</Text>
          </View>

          <Image
            source={item.img}
            style={{
              height: 70,
              width: 70,
              borderRadius: moderateScale(70),
            }}
          />
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white1}}>
      <View style={styles.content}>
        <ImageBackground source={icons.LeaderBoard1} style={styles.bgImg}>
          <Header
            containerStyle={{
              backgroundColor: 'transparent',
              height: moderateScale(60),
            }}
            blackTitle
            title={'Laader Board'}
            titleStyle={{fontFamily: fonts.bold}}
            leftIconSource={icons.ic_back_white}
            leftButtonStyle={{
              tintColor: colors.black1,
            }}
            onLeftPress={() => {
              navigation.goBack();
            }}
          />

          {/* <View
            style={{
              padding: moderateScale(20),
              height: layout.size.height / 11,
              width: layout.size.width / 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableHighlight
              style={{
                backgroundColor: state.color.box1,
                borderColor: colors.black15,
                borderRadius: moderateScale(10),
                width: layout.size.width / 3,
                height: moderateScale(40),
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.4,
                elevation: 3,
              }}
              underlayColor={colors.primary}
              onPress={() => onButtonPressed(true)}>
              {state.color.box1 === colors.primary ? (
                <Text
                  style={{
                    color: colors.white1,
                    fontFamily: fonts.bold,
                    fontSize: moderateScale(16),
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    margin: moderateScale(10),
                  }}>
                  {strings.annualy}
                </Text>
              ) : (
                <Text
                  style={{
                    color: colors.black1,
                    fontFamily: fonts.bold,
                    fontSize: moderateScale(16),
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    margin: moderateScale(10),
                  }}>
                  {strings.annualy}
                </Text>
              )}
            </TouchableHighlight>

            <TouchableHighlight
              style={{
                backgroundColor: state.color.box2,
                borderColor: colors.black15,
                borderRadius: moderateScale(10),
                width: layout.size.width / 3,
                height: moderateScale(40),
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.4,
                elevation: 3,
              }}
              underlayColor={colors.primary}
              onPress={() => onButtonPressed(false)}>
              {state.color.box2 === colors.primary ? (
                <Text
                  style={{
                    color: colors.white1,
                    fontFamily: fonts.bold,
                    fontSize: moderateScale(16),
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    margin: moderateScale(10),
                  }}>
                  {strings.monthly}
                </Text>
              ) : (
                <Text
                  style={{
                    color: colors.black1,
                    fontFamily: fonts.bold,
                    fontSize: moderateScale(16),
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    margin: moderateScale(10),
                  }}>
                  {strings.monthly}
                </Text>
              )}
            </TouchableHighlight>
          </View>
          <View>
            <Text
              style={{
                color: colors.black1,
                fontFamily: fonts.semiBold,
                fontSize: moderateScale(14),
                alignSelf: 'center',
                margin: moderateScale(10),
              }}>
              annual 2021 Leaderboard Leader
            </Text>
          </View> */}
          <FlatList
            extraData={membersList}
            data={membersList}
            renderItem={_renderView}
            keyExtractor={(item, index) => 'key' + index}
            ListHeaderComponent={() =>
              !membersList.length ? (
                <Text style={styles.nomatch}>No Match found</Text>
              ) : null
            }
          />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default LeaderBoardType;

const styles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    position: 'relative',
    alignItems: 'center',
    top: 0.108,
    flex: 1,
  },
  nameStyle: {
    fontFamily: fonts.regular,
    fontSize: moderateScale(16),
    width: layout.size.width / 4,
    color: colors.white1,
    paddingHorizontal: moderateScale(5),
  },
  dateStyle: {
    fontFamily: fonts.regular,
    fontSize: moderateScale(16),
    color: colors.white1,
    paddingHorizontal: moderateScale(5),
    top: moderateScale(15),
  },
  listView: {
    margin: 10,
    flexDirection: 'column',
    padding: 20,
    paddingVertical: moderateScale(15),
  },
  viewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
