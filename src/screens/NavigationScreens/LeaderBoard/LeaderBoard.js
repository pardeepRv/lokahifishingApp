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

let fishingArr = [
  {
    img: icons.Mahi,
    text: 'Mahi Mahi',
  },
  {
    img: icons.Ono,
    text: 'Ono',
  },
  {
    img: icons.Aku,
    text: 'Aku',
  },
  {
    img: icons.Ulua,
    text: 'Ulua',
  },
  {
    img: icons.omilu,
    text: 'Omilu',
  },
  {
    img: icons.OnagaFish,
    text: 'Onaga',
  },
  {
    img: icons.OpakapakaFish,
    text: 'Opakapaka',
  },
  {
    img: icons.EhuFish,
    text: 'Ehu',
  },
  {
    img: icons.UkuFish,
    text: 'Uku',
  },
  {
    img: icons.OpeluFish,
    text: 'Opelu',
  },
  {
    img: icons.MenpachiFish,
    text: 'Menpachi',
  },
  {
    img: icons.NoFish,
    text: 'No Fish',
  },
  {
    img: icons.BluemarlinFish,
    text: 'Blue Marlin',
  },
  {
    img: icons.StripedMarlinFish,
    text: 'Striped Marlin',
  },
  {
    img: icons.SPEARFISH,
    text: 'Spearfish',
  },
  {
    img: icons.AhiFish,
    text: 'Ahi',
  },
];

const LeaderBoard = ({navigation}) => {
  const [fishingList, setfishingList] = useState(fishingArr);

  //View of flatlist
  const _renderView = ({item, index}) => (
    <View style={styles.listView} activeOpacity={0.8}>
      <TouchableOpacity style={styles.viewStyle}>
        <Image
          source={item.img}
          resizeMode='contain'
          style={{
            height: layout.size.height / 3,
            width: layout.size.width / 1.5,
            shadowColor: colors.primary,
            borderRadius: 20,
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
          }}
        />
      </TouchableOpacity>
      <View style={styles.viewStyle}>
        <Text
          style={{
            top: 60,
            fontSize: moderateScale(20),
            fontFamily: fonts.bold,
            
          }}>
          {item.text}
        </Text>
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={icons.LeaderBoard}
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
          title={'Leader Board- Bigest Fish'}
          blackTitle
          titleStyle={{fontFamily: fonts.bold , }}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.black1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />

        <FlatList
          extraData={fishingList}
          data={fishingList}
          renderItem={_renderView}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          ListHeaderComponent={() =>
            !fishingList.length ? (
              <Text style={styles.nomatch}>No Match found</Text>
            ) : null
          }
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LeaderBoard;
