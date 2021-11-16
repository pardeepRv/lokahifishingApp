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
import { strings } from '../../../../localization';
import {colors} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';
import LCRRequired from '../LCRRequired';
import styles from './styles';

let fishingArr = [
  {
    img: icons.AkuleFish,
    text: 'Akule',
    navigate: 'FishDetails',
  },
  {
    img: icons.OpeluFish,
    text: 'Opelu',
    navigate: 'FishDetails',
  },
  {
    img: icons.MenpachiFish,
    text: 'Menpachi',
    navigate: 'FishDetails',
  },
  {
    img: icons.MoanoFish,
    text: 'Moano',
    navigate: 'FishDetails',
  },
  {
    img: icons.omilu,
    text: 'omilu',
    navigate: 'FishDetails',
  },
  {
    img: icons.WhiteUlua,
    text: 'White Ulua',
    navigate: 'FishDetails',
  },
  {
    img: icons.Yellowspot,
    text: 'Yellow spot',
    navigate: 'FishDetails',
  },
  {
    img: icons.WekeFish,
    text: 'Weke Ula',
    navigate: 'FishDetails',
  },
  {
    img: icons.MoanaKaliFish,
    text: 'Moana Kali',
    navigate: 'FishDetails',
  },
  {
    img: icons.TaapeFish,
    text: 'Taape',
    navigate: 'FishDetails',
  },
  {
    img: icons.ToauFish,
    text: 'Toau',
    navigate: 'FishDetails',
  },
  {
    img: icons.BarracudaFish,
    text: 'Barracuda',
    navigate: 'FishDetails',
  },
  {
    img: icons.KahalaFish,
    text: 'Kahala',
    navigate: 'FishDetails',
  },
  {
    img: icons.DeepSeaAweoweo,
    text: 'Aweoweo',
    navigate: 'FishDetails',
  },
  {
    img: icons.RoiFish,
    text: 'Roi',
    navigate: 'FishDetails',
  },
  {
    img: icons.KumaFish,
    text: 'Kuma',
    navigate: 'FishDetails',
  },
  {
    img: icons.MaluFish,
    text: 'Malu',
    navigate: 'FishDetails',
  },
  {
    img: icons.Hage_Triggerfish,
    text: 'Hage/Triggerfish',
    navigate: 'FishDetails',
  },
  {
    img: icons.Shibi,
    text: 'Shibi',
    navigate: 'FishDetails',
  },
  {
    img: icons.Aku,
    text: 'Aku',
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
const ShallowBottom = ({navigation}) => {
  const [fishingList, setfishingList] = useState(fishingArr);
  const [fishType, setfishType] = useState('');

  const _renderView = ({item, index}) => (
    <View style={styles.listView} activeOpacity={0.8}>
      <View
        style={styles.viewStyle}
>
        <Image
          source={item.img}
          resizeMode="contain"
          style={{
            height: layout.size.height / 10,
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
      </View>
      <View style={styles.viewStyle}>
        <Text
          style={{
            top: moderateScale(20),
            fontSize: moderateScale(25),
            fontFamily: fonts.bold,
            color:colors.secondry
          }}>
          {item.text}
        </Text>
      </View>
    </View>
  );
  const onViewRef = React.useRef(viewableItems => {
    console.log(viewableItems, 'viewwwww>>>>>>>>>>>>>>>>');
    // Use viewable items in state or as intended

    if (
      viewableItems &&
      viewableItems.viewableItems &&
      viewableItems.viewableItems.length > 0
    ) {
      if (
        viewableItems.viewableItems[0].item.text == 'Multiple' ||
        viewableItems.viewableItems[0].item.text == 'Other'
      ) {
        console.log(
          viewableItems.viewableItems[0].item.text,
          'viewableItems.viewableItems[0].item.text',
        );
        // fishT=viewableItems.viewableItems[0].item.text;
        setfishType(viewableItems.viewableItems[0].item.text);
      } else {
        setfishType('');
      }
    }
  });
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});


  return (
    <ImageBackground source={icons.LeaderBoard1} style={styles.bgImg}>
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
<Text style={styles.nomatch}>{strings.infobelow}</Text>
      <View style={{flex: 0.4}}>
      <FlatList
        extraData={fishingList}
        data={fishingList}
        renderItem={_renderView}
        keyExtractor={(item, index) => 'key' + index}
        horizontal
        pagingEnabled
        ListEmptyComponent={() =>
          !fishingList.length ? (
            <Text style={styles.nomatch}>No Match found</Text>
          ) : null
        }
        showsHorizontalScrollIndicator={false}


        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
      />
      </View>
      <LCRRequired fishType={fishType}
      navigation={navigation}/>
    </ImageBackground>
  );
};

export default ShallowBottom;
