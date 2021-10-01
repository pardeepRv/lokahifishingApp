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
import { layout } from '../../../utilities/layout';
import styles from './styles';

let members = [
  {
    img: icons.ic_LokahiLogo,
    name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
   },
  {
    img: icons.ic_LokahiLogo,
    name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",

  },
  {
    img: icons.ic_LokahiLogo,
    name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",

  },
  {
    img: icons.ic_LokahiLogo,
    name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",

  },
];

const News = ({navigation}) => {
  const [membersList, setMembersList] = useState(members);

  const _renderView = ({item, index}) => (
    <TouchableOpacity
      style={[
        styles.listView,
        // {
        //   backgroundColor: index % 2 == 0 ? '#3c264a' : '#553456',
        // },
      ]}
      activeOpacity={0.8}>
      <View style={styles.viewStyle}>
        <Image
          source={icons.moneygraphics}
          resizeMode="contain"
          style={{
            height: moderateScale(80),
            width: moderateScale(80),
            left:10,
            backgroundColor:"#fff",
            borderRadius:80/2
          }}
        />
        <View
          style={{
            justifyContent: 'center',
          
          left:15,
            width:moderateScale(270),
          }}>
          <Text style={styles.nameStyle}     numberOfLines={5} ellipsizeMode="tail">{item.name}</Text>

        </View>
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
          title={'Lokahi News'}
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

export default News;
