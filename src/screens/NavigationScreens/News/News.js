import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Dimensions,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import WebView from 'react-native-webview';
import {useDispatch, useSelector} from 'react-redux';
import {fonts, icons} from '../../../../assets';
import {Loader} from '../../../components/common';
import {Header} from '../../../components/common/Header';
import {getNewsFromAdmin} from '../../../store/actions';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';
import styles from './styles';

let members = [
  {
    img: icons.ic_LokahiLogo,
    name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    img: icons.ic_LokahiLogo,
    name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    img: icons.ic_LokahiLogo,
    name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    img: icons.ic_LokahiLogo,
    name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  },
];

const News = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [membersList, setMembersList] = useState(members);
  const [saveHtml, setHtml] = useState(null);

  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);

  console.log(auth, 'auth>>>>>>>>>>>>', app, 'app>>>>>>>>>>>>>>>>');

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('in useEfectof news>>>>>>>>>>>.');
    const unsubscribe = navigation.addListener('focus', () => {
      newsFun();
    });
    return unsubscribe;
  }, [navigation]);

  //get news taken list
  function newsFun() {
    let token = auth && auth?.userDetails?.access_token;
    dispatch(getNewsFromAdmin(token));
  }

  const _renderView = ({item, index}) => (
    <TouchableOpacity
      style={[
        styles.listView,
        {
          backgroundColor: colors.white1,
        },
      ]}
      activeOpacity={0.8}
      onPress={() => {
        setHtml(item.body);
        setModalVisible(true);
      }}>
      <View style={styles.viewStyle}>
        <Image
          source={{uri: `${item.image_folder}/${item.image}`}}       
          style={{
            height: moderateScale(70),
            width: moderateScale(70),
            left: 10,
            backgroundColor: colors.secondry,
            borderRadius: 70 / 2,
            resizeMode: 'cover',
          }}
        />
        <View
          style={{
            justifyContent: 'center',

            left: 12,
            width: moderateScale(270),
          }}>
          <Text style={styles.nameStyle} numberOfLines={5} ellipsizeMode="tail">
            {item.title}
          </Text>
        </View>
      </View>
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
          title={'Lokahi News'}
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
          extraData={app?.newsList}
          data={app?.newsList}
          renderItem={_renderView}
          keyExtractor={(item, index) => 'key' + index}
          ListHeaderComponent={() =>
            !app?.newsList.length ? (
              <Text style={styles.nomatch}>No Match found</Text>
            ) : null
          }
        />
      </SafeAreaView>
      <Loader isLoading={app.loading} isAbsolute />

      <Modal
        animationType="slide"
        animationType={'slide'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {}}>
        <SafeAreaView
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.white1,
          }}>
          <View
            style={[
              {
                width: Dimensions.get('window').width,
                backgroundColor: colors.secondry,
                height: moderateScale(50),
              },
              {flexDirection: 'row', justifyContent: 'space-between'},
            ]}>
            <TouchableOpacity
              style={{width: 100}}
              onPress={() => {
                setModalVisible(false);
              }}>
              <Image
                source={icons.ic_back_white}
                style={{
                  top: 15,
                  left: 10,
                  tintColor: colors.white1,
                }}
              />
            </TouchableOpacity>
          </View>

          <WebView
            startInLoadingState={true}
            originWhitelist={['*']}
            source={{html: saveHtml}}
            style={{width: layout.size.width, marginBottom: 0}}
          />
        </SafeAreaView>
      </Modal>
    </ImageBackground>
  );
};

export default News;
