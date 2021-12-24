import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Pdf from 'react-native-pdf';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {fonts, icons} from '../../../../assets';
import {Loader} from '../../../components/common';
import {Header} from '../../../components/common/Header';
import {tournamentlisting} from '../../../store/actions';
import {colors} from '../../../utilities/constants';
import styles from './styles';

const TournamentHome = ({navigation}) => {
  const [tournamentList, settournamentList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [pdfPath, setPdfPath] = useState('');

  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('coming in this on lcrlist page');
    const unsubscribe = navigation.addListener('focus', () => {
      gettournamentfunc();
    });
    return unsubscribe;
  }, [navigation]);

  function gettournamentfunc() {
    let token = auth && auth?.userDetails?.access_token;

    dispatch(
      tournamentlisting(token, cb => {
        if (cb) {
          console.log(cb, 'callback list arr>>>>>>>>>>');
          if (cb?.data?.data) {
            let updatedLcrList = cb?.data?.data?.leaderboardRankingAnually;
            updatedLcrList.reverse();
            settournamentList(updatedLcrList);
          }
        }
      }),
    );
  }
  //View of flatlist
  const _renderView = ({item, index}) => (
    <TouchableOpacity
      onPress={() => {
        setPdfPath(item.doc);
        setModalVisible(true);
      }}
      style={styles.listView}
      activeOpacity={0.8}>
      <View style={styles.viewStyle}>
        <Image
          source={icons.ic_LokahiLogo}
          style={{
            height: 70,
            width: 70,
          }}
        />
        <View
          style={{
            justifyContent: 'center',
            left: 10,
          }}>
          <Text style={styles.nameStyle}>{item.title}</Text>
          {/* <Text>
          <TimeAgo style={styles.dateStyle} time={item.created_at} />
          </Text> */}
        </View>
      </View>
      <Image source={icons.ic_rightArrow} style={styles.rightArrow} />
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={icons.LeaderBoard1}
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
          titleStyle={{fontFamily: fonts.bold, color: colors.black1}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.black1,
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

        <Modal
          animationType="slide"
          animationType={'slide'}
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {}}>
          <SafeAreaView style={styles.modal}>
            <View
              style={[
                styles.backBtnView,
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
            <Pdf
              source={{uri: pdfPath}}
              // source={{uri:'http://www.africau.edu/images/default/sample.pdf'}}
              style={styles.pdf}
              loading="Loading PDF..."
            />
          </SafeAreaView>
        </Modal>
      </SafeAreaView>

      <Loader isAbsolute isLoading={app.isLoading} />
    </ImageBackground>
  );
};

export default TournamentHome;
