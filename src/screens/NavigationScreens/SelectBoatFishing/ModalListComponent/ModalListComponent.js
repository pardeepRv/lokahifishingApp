import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image, ImageBackground, LayoutAnimation,
  Platform, SafeAreaView, Text,
  TouchableOpacity, UIManager, View
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import { fonts, icons } from '../../../../../assets';
import { Button, Loader } from '../../../../components/common';
import Circular from '../../../../components/common/Circular';
import { Header } from '../../../../components/common/Header';
import { strings } from '../../../../localization';
import { getsigns } from '../../../../store/actions';
import { colors } from '../../../../utilities/constants';
import styles from './styles.js';


const ModalListComponent = props => {
  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);

  console.log(auth, 'auth>>>>>>>>>>>>', app, 'app>>>>>>>>>>>>>>>>');
  console.log(props, 'props in modal>>>>>>>.');


  const dispatch = useDispatch();
  const { navigation, route } = props;
  const { value, name, getSelectedSigns } = route?.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [open, setopen] = useState(false);
  const [signs, setSignArr] = useState(app && app.signarray);

  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  const onPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setopen(!open);
  };
  console.log(value, 'valuevaluevalue in modal');
  console.log(name, 'namenamename in modal');

  ///toggeling
  const toggleCml = index => {
    console.log(signs, 'before');
    const array = signs.map(v => {
      const newItem = Object.assign({}, v);
      //   newItem.isSelected = false;
      return newItem;
    });
    array[index].isSelected = !array[index].isSelected;
    console.log(array, 'aftre');

    setSignArr(array);
  };

  const sendSelectedValues = () => {
    let arr = [];

    signs.forEach(element => {
      if (element.isSelected) {
        arr.push(element);
      }
    });
    getSelectedSigns(arr);
    navigation.goBack();
  };

  useEffect(() => {
    console.log('in useEfectof modallistComponent >>>>>>>>>>>.');
    const unsubscribe = navigation.addListener('focus', () => {
      if (value == 1) {
        signFun();
        return;
      }
    });
    return unsubscribe;
  }, [navigation, signs]);

  function signFun() {
    let token = auth && auth?.userDetails?.access_token;
    dispatch(getsigns(token, cb => {
      if (cb) {
        console.log(cb, ";cb in sign");
        if (cb?.data?.data) {
          setSignArr(cb?.data?.data?.sign)
        }
      }
    }));
  }

  const _renderView = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.listItem,
        {
          backgroundColor: colors.white1,
        },
      ]}
      activeOpacity={0.8}
      onPress={() => toggleCml(index)}>
      <Text>{item.name}</Text>

      {item && item.isSelected ? (
        <Image
          source={icons.ic_done}
          style={{
            tintColor: colors.secondry,
          }}
        />
      ) : (
        <Image source={icons.ic_not_done} />
      )}
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={icons.ic_signup_bg}
      style={{ flex: 1, height: '100%' }}>
      <SafeAreaView style={styles.content}>
        <Header
          containerStyle={{
            backgroundColor: colors.secondry,
            height: moderateScale(60),
          }}
          title={name}
          titleStyle={{ fontFamily: fonts.bold }}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />
        {value == 1 && (
          <FlatList
            extraData={signs}
            data={signs}
            showsVerticalScrollIndicator={false}
            renderItem={_renderView}
            contentInset={{ bottom: 20 }}
            keyExtractor={(item, index) => 'key' + index}
            ListEmptyComponent={() =>
              signs >= 0 && (
                <Text
                  style={{
                    alignSelf: 'center',
                    marginTop: 20,
                    color: colors.white1,
                    fontFamily: fonts.semiBold,
                  }}>
                  No Friend found
                </Text>
              )
            }
            ListFooterComponent={() => (
              <View
                style={{
                  marginTop: moderateScale(10),
                }}>
                <Button
                  style={styles.btnStyles}
                  label={strings.submit}
                  onPress={() => sendSelectedValues()}
                />
              </View>
            )}
          />
        )}

        {value == 2 && <Text>jkhvtu</Text>}

        {value == 3 && <Text>33333</Text>}



        {value == 5 && <Circular />}
      </SafeAreaView>
      <Loader isLoading={app.loading} isAbsolute />

    </ImageBackground>
  );
};

export default ModalListComponent;
