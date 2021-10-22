import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../assets';
import {Button} from '../../../components/common/Button';
import {Header} from '../../../components/common/Header';
import {strings} from '../../../localization';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';
import styles from './styles';

let members = [
  {
    name: ' Dhrminder',
  },
  {
    name: 'Pardeep kumar',
  },
  {
    name: 'sunil ',
  },
  {
    name: 'ashutosh',
  },
];

const FriendRequests = ({navigation}) => {
  const [membersList, setMembersList] = useState(members);
  const _renderView = ({item, index}) => (
    <View style={{flex: 1}}>
      <View
        style={[
          styles.listView,
          {
            backgroundColor: colors.lightTransparent,
          },
        ]}
        activeOpacity={0.8}>
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
            backgroundColor: colors.transparent,
          }}>
          <View style={styles.viewStyle}>
            <Image
              source={icons.ProfilePlaceholder}
              style={{
                height: moderateScale(100),
                width: moderateScale(100),
                backgroundColor: colors.transparent,
                borderRadius: 50,
                left: moderateScale(110),
              }}
            />
            <TouchableOpacity
              style={{
                borderRadius: 8,
                height: moderateScale(25),
                bottom: moderateScale(38),
                left: 0,
              }}>
              <Image
                source={icons.blockuser}
                style={{
                  height: moderateScale(25),
                  width: moderateScale(25),
                  backgroundColor: colors.red1,
                  borderRadius: 15,
                  tintColor: colors.black1,
                }}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.nameStyle}>{item.name}</Text>
          <View style={styles.buttonView}>
            <View style={styles.buttonviewstyle}>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.green2,
                  borderColor: colors.black15,
                  borderRadius: moderateScale(20),
                  width: layout.size.width / 3,
                  height: moderateScale(40),
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.4,
                  elevation: 3,
                }}
                underlayColor={colors.green1}>
                <Text
                  style={{
                    color: colors.white1,
                    fontFamily: fonts.bold,
                    fontSize: moderateScale(16),
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    margin: moderateScale(10),
                  }}>
                  {strings.accept}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.yellow1,
                  borderColor: colors.black15,
                  borderRadius: moderateScale(20),
                  width: layout.size.width / 3,
                  height: moderateScale(40),
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.4,
                  elevation: 3,
                }}
                underlayColor={colors.red1}>
                <Text
                  style={{
                    color: colors.white1,
                    fontFamily: fonts.bold,
                    fontSize: moderateScale(16),
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    margin: moderateScale(10),
                  }}>
                  {strings.deny}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 2,
          width: layout.size.width / 1,
          backgroundColor: colors.white1,
        }}></View>
    </View>
  );

  return (
    <ImageBackground
      source={icons.ic_signup_bg}
      style={{flex: 1, height: '100%'}}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <Header
          containerStyle={{
            backgroundColor: 'transparent',
            height: moderateScale(60),
          }}
          title={'Friend Requests'}
          titleStyle={{fontFamily: fonts.bold}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />

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
      </SafeAreaView>
    </ImageBackground>
  );
};

export default FriendRequests;
