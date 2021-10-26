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
import {Button} from '../../../components/common/Button';
import {Header} from '../../../components/common/Header';
import {strings} from '../../../localization';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';
import styles from './styles';

let members = [
  {
    img: icons.signin_bg_ic,
    name: 'Omilu',
    date: 'September 27,2021 2:21 PM',
    text: 'Export to Photosharing',
  },
  {
    img: icons.signin_bg_ic,

    name: 'Ahi',
    date: 'September 27,2021 2:21 PM',
    text: 'Export to Photosharing',
  },
  {
    img: icons.signin_bg_ic,

    name: 'Ahi',
    date: 'September 27,2021 2:21 PM',
    text: 'Export to Photosharing',
  },
  {
    img: icons.signin_bg_ic,

    name: 'Omilu',
    date: 'September 27,2021 2:21 PM',
    text: 'Export to Photosharing',
  },
];

const LCRFilter = ({navigation}) => {
  const [membersList, setMembersList] = useState(members);

  const _renderView = ({item, index}) => (
    <View style={{flex: 1}}>
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
            flexDirection: 'column',
            flex: 1,
            backgroundColor: colors.transparent,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.lightTransparent,
              borderRadius: 8,
              height: moderateScale(25),
              width: layout.size.width /2.2,
              alignSelf: 'flex-end',
            }}>
            <Text style={styles.sharingtext}>
              {strings.exporttophotosharing}
            </Text>
          </TouchableOpacity>

          <View style={styles.viewStyle}>
            <Image
              source={item.img}
              resizeMode='cover'
              style={{
                height: moderateScale(80),
                width: moderateScale(80),
                backgroundColor: colors.lightTransparent,
                borderRadius: 50,
              }}
            />
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Text style={styles.nameStyle}>{item.name}</Text>
              <Text style={styles.dateStyle}>{item.date}</Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignSelf: 'center',
                top:5,
              }}>
            <Image source={icons.ic_rightArrow} style={styles.rightArrow} />
            </View>
          </View>
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
          title={'LCR List'}
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

export default LCRFilter;
