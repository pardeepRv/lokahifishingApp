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
    img: icons.OffshoreFishing,
    name: 'Annual Leaderboard',
    date: 'Winners 2020',
    text: 'Offshore Fishing',
    navigate: 'OffShoreFishing'

  },
  {
    img: icons.BottomFishing,
    name: 'WBC Labour',
    date: 'Day tournament',
    text: 'Bottom Fishing',
    navigate: 'BottomFishing'

  },
  {
    img: icons.TagAndRelease,
    name: 'WBC Labour',
    date: 'Day tournament',
    text: 'Tag and Release',
    navigate: 'TagandRealse'

  },
];

const SelectBoatFishing = ({navigation}) => {
  const [fishingList, setfishingList] = useState(fishingArr);

  //View of flatlist
  const _renderView = ({item, index}) => (
    <View style={styles.listView} activeOpacity={0.8}>
      <TouchableOpacity style={styles.viewStyle}
      onPress={() => navigation.navigate(item.navigate)}>
        <Image
          source={item.img}
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

export default SelectBoatFishing;
