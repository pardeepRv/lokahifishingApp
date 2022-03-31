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
import {strings} from '../../../localization';
//extrenal libraries
//internal libraries
import {colors, menu} from '../../../utilities/constants';
import styles from './styles';

const Home = ({navigation}) => {
  const [menus, setMenus] = useState(menu);

  const _renderView = ({item, index}) => (
    <TouchableOpacity
      style={[{backgroundColor: item.bgColor}, styles.renderItem]}
      activeOpacity={0.8}
      onPress={() => navigation.navigate(item.navigate)}>
      <Image source={item.img} style={styles.imageStyle} />
      {/* && strings.Tids_weather */}
      <Text
        style={
          item.name != strings.LeaderBoard && item.name != strings.Tids_weather && item.name != strings.News
            ? styles.textStyle
            : [styles.textStyle, {color: '#2c385e'}]
        }>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white1}}>
      <View
        style={{
          flex: 1,
        }}>
        <ImageBackground source={icons.ic_signup_bg} style={styles.image}>
          <Header
            containerStyle={{
              backgroundColor: 'transparent',
              height: moderateScale(60),
            }}
            title={'Home'}
            titleStyle={{fontFamily: fonts.bold}}
            leftIconSource={icons.ic_menu_white}
            onLeftPress={() => {
              navigation.openDrawer();
            }}
          />
          <FlatList
            extraData={menus}
            data={menus}
            renderItem={_renderView}
            keyExtractor={(item, index) => 'key' + index}
            numColumns={2}
            ListHeaderComponent={() =>
              !menus.length ? (
                <Text style={styles.nomatch}>No Match found</Text>
              ) : null
            }
          />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Home;
