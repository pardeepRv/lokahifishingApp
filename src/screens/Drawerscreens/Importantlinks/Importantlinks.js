import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  FlatList,
  Dimensions,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';

import { moderateScale } from 'react-native-size-matters';
// import Carousel from 'react-native-snap-carousel';
import { fonts, icons } from '../../../../assets';
import { Button } from '../../../components/common/Button';
import { Header } from '../../../components/common/Header';
import { strings } from '../../../localization';
import { colors } from '../../../utilities/constants';
import { layout } from '../../../utilities/layout';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import { getimprtantlinks } from '../../../store/sagas/appSagas';
import { linksimportant } from '../../../store/actions';



const Importantlinks = ({ navigation }) => {
  const [active, setActive] = useState(0);
  const [carousel, setCarousel] = useState('');
  const [ad, setAd] = useState('');
  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);

  console.log(auth, 'auth>>>>>>>>>>>>', app, 'app>>>>>>>>>>>>>>>>');

  const dispatch = useDispatch();
 
  useEffect(() => {
    console.log('in useEfectof news>>>>>>>>>>>.');
    const unsubscribe = navigation.addListener('focus', () => {
      importantfunc();
    });
    return unsubscribe;
  }, [navigation]);

  //get news taken list
  function importantfunc() {
    let token = auth && auth?.userDetails?.access_token;
    dispatch(linksimportant(token));
  }
  
  const _renderView = ({ item, index }) => (
    <TouchableOpacity
    onPress={() => navigation.navigate('FishingWebsite',{title: item.title, url: item.url})}
    style={[
      styles.listView,
      {
        backgroundColor: colors.white1,
      },
    ]}>
    <View style={styles.viewStyle}>
      <View
        style={{
          justifyContent: 'center',
        }}>
        <Text style={styles.nameStyle}>{item.title}</Text>
        <Text style={styles.dateStyle}>{item.description}</Text>
      </View>
    </View>

  </TouchableOpacity>
  );
  return (
    <ImageBackground
      source={icons.ic_signup_bg}
      style={{ flex: 1, height: '100%' }}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <Header
          containerStyle={{
            backgroundColor: 'transparent',
            height: moderateScale(60),
          }}
          title={'Important links'}
          titleStyle={{ fontFamily: fonts.bold }}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />



<FlatList
          extraData={app?.linkslist}
          data={app?.linkslist}
          renderItem={_renderView}
          keyExtractor={(item, index) => 'key' + index}
          ListEmptyComponent={() =>
            app?.linkslist >= 0 && <Text style={{}}>No links found</Text>
          }
        // refreshControl={
        //   <RefreshControl
        //     refreshing={user.loading}
        //     onRefresh={_onRefresh.bind(this)}
        //     title="Pull to refresh"
        //     tintColor={colors.white1}
        //     titleColor={colors.white1}
        //   />
        // }
        />
       
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Importantlinks;


