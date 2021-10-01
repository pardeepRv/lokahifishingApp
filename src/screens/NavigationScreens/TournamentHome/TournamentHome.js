import React, { useState } from 'react';
import {
    FlatList,
    Image,
    ImageBackground,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { fonts, icons } from '../../../../assets';
import { Header } from '../../../components/common/Header';
import { colors } from '../../../utilities/constants';
import styles from './styles';

let tournaMents = [
  {
    img: icons.ic_LokahiLogo,
    name: 'Annual Leaderboard',
    date: 'Winners 2020',
  },
  {
    img: icons.ic_LokahiLogo,
    name: 'WBC Labour',
    date: 'Day tournament',
  },
  {
    img: icons.ic_LokahiLogo,
    name: 'September 2020 Lokahi',
    date: 'App Winners',
  },
  {
    img: icons.ic_LokahiLogo,
    name: 'dev_pardeep',
    date: 'App Tournament Winners',
  },
];

const TournamentHome = ({navigation}) => {
  const [tournamentList, settournamentList] = useState(tournaMents);

  //View of flatlist
  const _renderView = ({item, index}) => (
    <TouchableOpacity style={styles.listView} activeOpacity={0.8}>
      <View style={styles.viewStyle}>
        <Image
          source={item.img}
          style={{
            height: 70,
            width: 70,
          }}
        />
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Text style={styles.nameStyle}>{item.name}</Text>
          <Text style={styles.dateStyle}>{item.date}</Text>
        </View>
      </View>
      <Image source={icons.ic_rightArrow} style={styles.rightArrow} />
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
          title={'Tournament Result List'}
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
          extraData={tournamentList}
          data={tournamentList}
          renderItem={_renderView}
          keyExtractor={(item, index) => 'key' + index}
          ListHeaderComponent={() =>
            !tournamentList.length ? (
              <Text style={styles.nomatch}>No Match found</Text>
            ) : null
          }
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default TournamentHome;
