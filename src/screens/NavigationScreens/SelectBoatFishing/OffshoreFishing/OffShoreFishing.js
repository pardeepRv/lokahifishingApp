import React, {useEffect, useState, useContext, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  FlatList,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../../assets';
import {Header} from '../../../../components/common/Header';
import {colors} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';
import styles from './styles';

let fishingArr = [
  {
    img: icons.Aku,
    text: 'Aku',
    navigate: 'FishDetails',
  },
  {
    img: icons.Mahi,
    text: 'Mahi Mahi',
    navigate: 'FishDetails',
  },
  {
    img: icons.Ono,
    text: 'Ono',
    navigate: 'FishDetails',
  },
  {
    img: icons.AhiFish,
    text: 'Ahi',
    navigate: 'FishDetails',
  },
  {
    img: icons.BluemarlinFish,
    text: 'Blue Marlin',
    navigate: 'FishDetails',
  },
  {
    img: icons.SPEARFISH,
    text: 'Spearfish',
    navigate: 'FishDetails',
  },
  {
    img: icons.StripedMarlinFish,
    text: 'Striped Marlin',
    navigate: 'FishDetails',
  },
  {
    img: icons.KawakawaFish,
    text: 'Kawakawa',
    navigate: 'FishDetails',
  },
  {
    img: icons.Other_fish,
    text: 'Other',
    navigate: 'FishDetails',
  },
  {
    img: icons.MultipleFishes,
    text: 'Multiple',
    navigate: 'FishDetails',
  },
  {
    img: icons.NoFish,
    text: 'No Fish',
    navigate: 'FishDetails',
  },
];
const OffShoreFishing = ({navigation}) => {
  const [fishingList, setfishingList] = useState(fishingArr);

  const _renderView = ({item, index}) => (
    <View style={styles.listView} activeOpacity={0.8}>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate(item.navigate)}>
        <Image
          source={item.img}
          resizeMode="contain"
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
            top: moderateScale(25),
            fontSize: moderateScale(25),
            fontFamily: fonts.bold,
            color:colors.secondry
          }}>
          {item.text}
        </Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={icons.LeaderBoard} style={styles.bgImg}>
      <Header
        containerStyle={{
          backgroundColor: 'transparent',
          height: moderateScale(60),
        }}
        blackTitle
        title={'Select Fish Type'}
        titleStyle={{fontFamily: fonts.bold}}
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
        indicatorActiveWidth={40}
        contentContainerStyle={{paddingHorizontal: 16}}
      />
    </ImageBackground>
  );
};

export default OffShoreFishing;
