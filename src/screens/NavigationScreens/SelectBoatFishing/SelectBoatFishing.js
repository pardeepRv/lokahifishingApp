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

const SelectBoatFishing = ({navigation, route}) => {
  const {first_id} = route.params;

  console.log(first_id, 'first_idfirst_idfirst_id ');

  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);
  const [fishingList, setfishingList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getSecondLCRS();
    });
    return unsubscribe;
  }, [navigation]);

  function getSecondLCRS() {
    let ob = {};
    ob.first_id = first_id;
    ob.token = auth && auth?.userDetails?.access_token;

    dispatch(
      getLcrSecond(ob, cb => {
        if (cb) {
          console.log(cb, ';cb in second lcr');
          if (cb?.data?.data) {
            setfishingList(cb?.data?.data?.lcr_second_level);
          }
        }
      }),
    );
  }

  const getThirdLCRS = val => {
    console.log(val, 'val getting on presss');

    let ob = {};
    ob.first_id = val.lcr_first_category_id;
    ob.second = val.id;
    ob.token = auth && auth?.userDetails?.access_token;

    dispatch(
      getLcrThird(ob, cb => {
        if (cb) {
          console.log(cb, ';cb in second and third lcr');
          if (
            cb &&
            cb.data &&
            cb.data.data &&
            cb.data.data.lcr_third_level &&
            cb.data.data.lcr_third_level.length > 0
          ) {
            navigation.navigate('ExtraFishingType', {item: val});
          } else {
            navigation.navigate('OffShoreFishing', {
              item: val,
              extraFish: false,
            });
          }
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
        onPress={() => checkLogicForThirdLevel(item)}>
        <Image
          source={{uri: `${LCR_IMAGES}${item.image}`}}
          style={{
            height: layout.size.height / 3,
            width: layout.size.width / 1.5,
          }}
        />
      </TouchableOpacity>
      {/* <View style={styles.viewStyle}>
        <Text
          style={{
            top: 60,
            fontSize: moderateScale(20),
            fontFamily: fonts.bold,
          }}>
          {item.title}
        </Text>
      </View> */}
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

export default SelectBoatFishing;
