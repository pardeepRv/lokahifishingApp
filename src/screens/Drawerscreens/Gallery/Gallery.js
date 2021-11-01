import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../assets';
import {Header} from '../../../components/common/Header';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';
import styles from './styles';

let members = [
  {
    img: icons.ic_LokahiLogo,
    name: 'princepardeepkmr',
    date: '2 Local Catch Reports. Last hhh',
  },
  {
    img: icons.ic_LokahiLogo,
    name: 'rv_kunal',
    date: '3 Local Catch Reports. Last',
  },
  {
    img: icons.ic_LokahiLogo,
    name: 'rvtechnologies',
    date: '8 Local Catch Reports. Last',
  },
  {
    img: icons.ic_LokahiLogo,
    name: 'dev_pardeep',
    date: '3 Local Catch Reports. Last',
  },
];

const Friends = ({navigation}) => {
  const [membersList, setMembersList] = useState(members);

  const _renderView = ({item, index}) => (
    <View style={{flex: 1}}>
      <TouchableOpacity
        // onPress={() => {
        //   navigation.navigate('FriendProfileScreen');
        // }}
        style={[
          styles.listView,
          {
            backgroundColor:
              index % 2 == 0
                ? colors.lightTransparent
                : colors.lightTransparent,
          },
        ]}
        activeOpacity={0.8}>
        <View style={styles.viewStyle}>
          <Image
            source={icons.fish2}
            style={{
              height: moderateScale(70),
              width: moderateScale(70),
              borderRadius: moderateScale(40),
            }}
          />
          <Image
            source={icons.fish2}
            style={{
              height: moderateScale(70),
              width: moderateScale(70),
              borderRadius: moderateScale(40),
            }}
          />
          <Image
            source={icons.fish2}
            style={{
              height: moderateScale(70),
              width: moderateScale(70),
              borderRadius: moderateScale(40),
            }}
          />
          <Image
            source={icons.fish2}
            style={{
              height: moderateScale(70),
              width: moderateScale(70),
              borderRadius: moderateScale(40),
            }}
          />
          {/* <View
            style={{
              justifyContent: 'center',
            }}>
            <Text
              numberOfLines={1}
              ellipsizeMode={'tail'}
              style={styles.nameStyle}>
              {item.name}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode={'tail'}
              style={styles.dateStyle}>
              {item.date}
            </Text>
          </View> */}
        </View>
        
      </TouchableOpacity>
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
          title={'Gallery'}
          titleStyle={{fontFamily: fonts.bold}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />

        {/* <FlatList
          extraData={membersList}
          data={membersList}
          renderItem={_renderView}
          keyExtractor={(item, index) => 'key' + index}
          ListHeaderComponent={() =>
            !membersList.length ? (
              <Text style={styles.nomatch}>No Match found</Text>
            ) : null
          }
        /> */}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Friends;
