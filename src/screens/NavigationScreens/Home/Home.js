import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';

//extrenal libraries

//internal libraries
import {colors, menu, screenNames} from '../../../utilities/constants';
import {fonts, icons} from '../../../../assets';
import {strings} from '../../../localization';
import styles from './styles';

const Home = ({navigation}) => {
  const [menus, setMenus] = useState(menu);

  const _renderView = ({item, index}) => (
    <TouchableOpacity
      style={[{backgroundColor: item.bgColor}, styles.renderItem]}
      activeOpacity={0.8}>
      <Image
        source={item.img}
        style={styles.imageStyle}
      />
      <Text
        style={styles.textStyle}>
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
        <ImageBackground
          source={icons.ic_signup_bg}
          style={styles.image}>
          <FlatList
            extraData={menus}
            data={menus}
            renderItem={_renderView}
            keyExtractor={(item, index) => 'key' + index}
            numColumns={2}
            ListHeaderComponent={() =>
              !menus.length ? (
                <Text
                  style={styles.nomatch}>
                  No Match found
                </Text>
              ) : null
            }
          />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Home;
