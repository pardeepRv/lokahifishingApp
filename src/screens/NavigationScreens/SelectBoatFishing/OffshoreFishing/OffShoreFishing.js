import React, {useEffect, useState} from 'react';
import {FlatList, Image, ImageBackground, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {fonts, icons} from '../../../../../assets';
import {Loader} from '../../../../components/common';
import {Header} from '../../../../components/common/Header';
import {strings} from '../../../../localization';
import {getFishesBasedOnID} from '../../../../store/actions';
import {colors, FISHES_IMAGES} from '../../../../utilities/constants';
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

const OffShoreFishing = ({navigation, route}) => {
  const {item, extraFish} = route.params;

  console.log(extraFish, item, 'extraFish in offshore>>>>>>>>>>');
  const [fishingList, setfishingList] = useState([]);

  const [fishType, setfishType] = useState('');
  const [fishTypeId, setfishTypeId] = useState(null);

  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (extraFish) {
        getExtraFishes();
      } else {
        getFishes();
      }
    });
    return unsubscribe;
  }, [navigation]);

  function getFishes() {
    let ob = {};
    ob.first_id = item.lcr_first_category_id;
    ob.second = item.id;
    ob.token = auth && auth?.userDetails?.access_token;
    ob.extraFish = extraFish;

    dispatch(
      getFishesBasedOnID(ob, cb => {
        if (cb) {
          console.log(cb, 'in fishing page>>>>>>>>>');
          if (cb?.data?.data) {
            setfishingList(cb?.data?.data?.lcr_fishes);
            setfishTypeId(cb?.data?.data?.lcr_fishes[0].id);
          }
        }
      }),
    );
  }

  function getExtraFishes() {
    let ob = {};
    ob.first_id = item.lcr_first_category_id;
    ob.second = item.lcr_second_category_id;
    ob.third = item.id;
    ob.token = auth && auth?.userDetails?.access_token;
    ob.extraFish = extraFish;

    dispatch(
      getFishesBasedOnID(ob, cb => {
        if (cb) {
          console.log(cb, 'in fishing page>>>>>>>>>');
          if (cb?.data?.data) {
            setfishingList(cb?.data?.data?.lcr_fishes);
            setfishTypeId(cb?.data?.data?.lcr_fishes[0].id);
          }
        }
      }),
    );
  }

  const _renderView = ({item, index}) => (
    <View style={styles.listView} activeOpacity={0.8}>
      <View style={styles.viewStyle}>
        <Image
          source={{uri: `${FISHES_IMAGES}${item.image}`}}
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
          {item.title}
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
        viewableItems.viewableItems[0].item.title == 'Multiple' ||
        viewableItems.viewableItems[0].item.title == 'Other'
      ) {
        console.log(
          viewableItems.viewableItems[0].item.title,
          'viewableItems.viewableItems[0].item.text',
        );
        // fishT=viewableItems.viewableItems[0].item.title;
        setfishType(viewableItems.viewableItems[0].item.title);
      } else {
        setfishType('');
        setfishTypeId(viewableItems.viewableItems[0].item.id);
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
        {app && app.loading ? (
          <Loader isLoading={app.loading} isAbsolute />
        ) : (
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
                <Text style={styles.nomatch}>No Fish found</Text>
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
        )}
      </View>
      <LCRRequired
        fishType={fishType}
        selectedFish={fishTypeId}
        navigation={navigation}
      />
    </ImageBackground>
  );
};

export default OffShoreFishing;
