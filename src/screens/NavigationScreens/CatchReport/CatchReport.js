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
import {getLcrFirst} from '../../../store/actions';
import {colors, LCR_IMAGES, screenNames} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';
import styles from './styles';

let fishingArr = [
  {
    img: icons.BoatFishing,
    name: 'Annual Leaderboard',
    date: 'Winners 2020',
    navigate: screenNames.SelectBoatFishing,
  },
  {
    img: icons.ShorelineFishing,
    name: 'WBC Labour',
    date: 'Day tournament',
    navigate: 'ShorLineFishing',
  },
];

const CatchReport = ({navigation}) => {
  const [fishingList, setfishingList] = useState([]);

  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getLCRS();
    });
    return unsubscribe;
  }, [navigation]);

  function getLCRS() {
    let token = auth && auth?.userDetails?.access_token;
    dispatch(
      getLcrFirst(token, cb => {
        if (cb) {
          console.log(cb, ';cb in lcr');
          if (cb?.data?.data) {
            setfishingList(cb?.data?.data?.lcr_first_level);
          }
        }
      }),
    );
  }

  //View of flatlist
  const _renderView = ({item, index}) => (
    <View style={styles.listView} activeOpacity={0.8}>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() =>
          navigation.navigate(screenNames.SelectBoatFishing, {
            first_id: item.id,
          })
        }>
        <Image
          source={{uri: `${LCR_IMAGES}${item.image}`}}
          style={{
            height: layout.size.height / 3,
            width: moderateScale(200),
          }}
        />
      </TouchableOpacity>
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
          title={'Select fishing type'}
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
          extraData={fishingList}
          data={fishingList}
          renderItem={_renderView}
          keyExtractor={(item, index) => 'key' + index}
          ListHeaderComponent={() =>
            !fishingList.length ? (
              <Text style={styles.nomatch}>No Result found</Text>
            ) : null
          }
        />
      </SafeAreaView>
      <Loader isLoading={app.loading} isAbsolute />
    </ImageBackground>
  );
};

export default CatchReport;
