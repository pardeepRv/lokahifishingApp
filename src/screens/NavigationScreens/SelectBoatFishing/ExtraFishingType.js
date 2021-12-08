import React, {useState, useEffect} from 'react';
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
import {useSelector, useDispatch} from 'react-redux';
import {fonts, icons} from '../../../../assets';
import {Loader} from '../../../components/common';
import {Header} from '../../../components/common/Header';
import {getLcrSecond, getLcrThird} from '../../../store/actions';
import {colors, LCR_IMAGES} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';
import styles from './styles';

let fishingArr = [
  {
    img: icons.OffshoreFishing,
    name: 'Annual Leaderboard',
    date: 'Winners 2020',
    text: 'Offshore Fishing',
    navigate: 'OffShoreFishing',
  },
  {
    img: icons.BottomFishing,
    name: 'WBC Labour',
    date: 'Day tournament',
    text: 'Bottom Fishing',
    navigate: 'BottomFishing',
  },
];

const ExtraFishingType = ({navigation, route}) => {
  console.log(route, 'item in extra>>>>>>>>>>>> ');

  const {item} = route.params;
  console.log(item, 'c');

  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);
  const [fishingList, setfishingList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getThirdLCRS();
    });
    return unsubscribe;
  }, [navigation]);

  const getThirdLCRS = () => {
    let ob = {};
    ob.first_id = item.lcr_first_category_id;
    ob.second = item.id;
    ob.token = auth && auth?.userDetails?.access_token;

    dispatch(
      getLcrThird(ob, cb => {
        if (cb) {
          console.log(cb, ';cb in extra lcr<><><>');
          if (
            cb &&
            cb.data &&
            cb.data.data &&
            cb.data.data.lcr_third_level &&
            cb.data.data.lcr_third_level.length > 0
          ) {
            console.log('do something here');
            setfishingList(cb?.data?.data?.lcr_third_level);
          }
          //   else {
          //     navigation.navigate('OffShoreFishing', {item: val});
          //   }
        }
      }),
    );
  };

  // checking here for bottom fishing
  const checkLogicForThirdLevel = item => {
    getThirdLCRS(item);
  };

  //View of flatlist
  const _renderView = ({item, index}) => (
    <View style={styles.listView} activeOpacity={0.8}>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() =>
          navigation.navigate('OffShoreFishing', {item: item, extraFish: true})
        }>
        <Image
          source={{uri: `${LCR_IMAGES}${item.image}`}}
          style={{
            height: layout.size.height / 3,
            width: layout.size.width / 1.5,
          }}
        />
      </TouchableOpacity>
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
          title={'Select Boat fishing type'}
          blackTitle
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
          style={{flex: 1}}
          renderItem={_renderView}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() =>
            !fishingList.length ? (
              <View style={{}}>
                <Text style={styles.nomatch}>No Result found</Text>
              </View>
            ) : null
          }
        />
      </SafeAreaView>
      <Loader isLoading={app.loading} isAbsolute />
    </ImageBackground>
  );
};

export default ExtraFishingType;
