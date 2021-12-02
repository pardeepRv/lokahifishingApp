import React, {useState} from 'react';
import {FlatList, Image, ImageBackground, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../../assets';
import {Header} from '../../../../components/common/Header';
import {strings} from '../../../../localization';
import {colors} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';
import LCRRequired from '../LCRRequired';
import styles from './styles';

let fishingArr = [
  {
    img: icons.Aku,
    text: 'Aku',
  },
  {
    img: icons.Mahi,
    text: 'Mahi Mahi',
  },
  {
    img: icons.Ono,
    text: 'Ono',
  },
  {
    img: icons.AhiFish,
    text: 'Ahi',
  },
  {
    img: icons.BluemarlinFish,
    text: 'Blue Marlin',
  },
  {
    img: icons.SPEARFISH,
    text: 'Spearfish',
  },
  {
    img: icons.StripedMarlinFish,
    text: 'Striped Marlin',
  },
  {
    img: icons.KawakawaFish,
    text: 'Kawakawa',
  },
  {
    img: icons.Other_fish,
    text: 'Other',
  },
  {
    img: icons.MultipleFishes,
    text: 'Multiple',
  },
  {
    img: icons.NoFish,
    text: 'No Fish',
  },
];

let fishT = '';
const OffShoreFishing = ({navigation}) => {
  const [fishingList, setfishingList] = useState(fishingArr);
  const [fishType, setfishType] = useState('');

  const _renderView = ({item, index}) => (
    <View style={styles.listView} activeOpacity={0.8}>
      <View style={styles.viewStyle}>
        <Image
          source={item.img}
          resizeMode="contain"
          style={{
            height: layout.size.height / 10,
            width: layout.size.width / 1.5,
          }}
        />
      </View>
      <View style={styles.viewStyle}>
        <Text
          style={{
            top: moderateScale(20),
            fontSize: moderateScale(25),
            fontFamily: fonts.bold,
            color: colors.secondry,
          }}>
          {item.text}
        </Text>
      </View>
    </View>
  );
  // const _onViewableItemsChanged = ({viewableItems, changed}) => {
  //   console.log('Visible items are', viewableItems);
  //   console.log('Changed in this iteration', changed);
  //   if (viewableItems && viewableItems.length > 0) {
  //     if (
  //       viewableItems[0].item.text == 'Multiple' ||
  //       viewableItems[0].item.text == 'Other'
  //     ) {
  //       console.log(viewableItems[0].item.text, 'viewableItems[0].item.text');
  //       fishT=viewableItems[0].item.text;
  //       // setfishType(viewableItems[0].item.text);
  //     }
  //   }
  // };

  // const _viewabilityConfig = {
  //   itemVisiblePercentThreshold: 50,
  // };

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
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() =>
            !fishingList.length ? (
              <Text style={styles.nomatch}>No Match found</Text>
            ) : null
          }
          indicatorActiveWidth={40}
          contentContainerStyle={{paddingHorizontal: 16}}
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}

          // onViewableItemsChanged={_onViewableItemsChanged}
          // viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}

          // viewabilityConfig={_viewabilityConfig}
        />
      </View>
      <LCRRequired fishType={fishType} navigation={navigation} />
    </ImageBackground>
  );
};

export default OffShoreFishing;
