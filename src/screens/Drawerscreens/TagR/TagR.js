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
import { strings } from '../../../localization';
import {colors} from '../../../utilities/constants';
import styles from './styles';

let user = [
  {
    img: icons.ic_LokahiLogo,
    name: 'princepardeepkmr',
    date: 'October 23, 2021 11.06pm',
    type:'bottom',
    tag:'TTT',
    Fork : '565',
    Species :'dfgd',
    location: '5236.54lat/548.25long'
  },
  {
    img: icons.ic_LokahiLogo,
    name: 'rv_kunal',
    date: 'septrmber 23, 2021 11.06pm',
    type:'bottom',
    tag:'TTT',
    Fork : '565',
    Species :'dfgd',
    location: '5236.54lat/548.25long'
  },
  {
    img: icons.ic_LokahiLogo,
    name: 'rvtechnologies',
    date: 'October 23, 2021 11.06pm',
    type:'bottom',
    tag:'TTT',
    Fork : '565',
    Species :'dfgd',
    location: '5236.54lat/548.25long'
  },
  {
    img: icons.ic_LokahiLogo,
    name: 'dev_pardeep',
    date: 'august 23, 2021 11.06pm',
    type:'bottom',
    tag:'TTT',
    Fork : '565',
    Species :'dfgd',
    location: '5236.54lat/548.25long'
  },
];

const TagR = ({navigation}) => {
  const [userList, setUserList] = useState(user);

  const _renderView = ({item, index}) => (
    <TouchableOpacity
      // onPress={() => {
      //   navigation.navigate('FriendProfileScreen');
      // }}
      style={[
        styles.listView,
        {
          backgroundColor:
            index % 2 == 0 ? colors.lightTransparent : colors.lightTransparent,
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
        <View style={{alignSelf: 'center'}}>
          <View style={{flexDirection: 'row', bottom: moderateScale(10)}}>
            <Text style={styles.nameStyle1}>Name:</Text>
            <Text style={styles.nameStyle}>{item.name}</Text>
          </View>
        <Text style={styles.dateStyle}>{item.date}</Text>
        </View>
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.nameStyle1}>{strings.Fishingtype}</Text>
        <Text style={styles.nameStyle}>{item.type}</Text>
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.nameStyle1}>{strings.Tag}</Text>
        <Text style={styles.nameStyle}>{item.tag}</Text>
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.nameStyle1}>{strings.fork}</Text>
        <Text style={styles.nameStyle}>{item.Fork}</Text>
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.nameStyle1}>{strings.Species}</Text>
        <Text style={styles.nameStyle}>{item.Species}</Text>
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.nameStyle1}>{strings.Location}</Text>
        <Text style={styles.nameStyle}>{item.location}</Text>
      </View>
    </TouchableOpacity>
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
          title={'Tag & Release List'}
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
          extraData={userList}
          data={userList}
          renderItem={_renderView}
          keyExtractor={(item, index) => 'key' + index}
          ListHeaderComponent={() =>
            !userList.length ? (
              <Text style={styles.nomatch}>No Match found</Text>
            ) : null
          }
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default TagR;
