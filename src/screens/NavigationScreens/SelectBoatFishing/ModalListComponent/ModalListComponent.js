import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  View,
  Image,
  Text,
  FlatList,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../../assets';
import {Button} from '../../../../components/common';
import {Header} from '../../../../components/common/Header';
import {strings} from '../../../../localization';
import {colors} from '../../../../utilities/constants';
import styles from './styles.js';

const ModalListComponent = props => {
  console.log(props, 'props in modal>>>>>>>.');

  const {navigation, route} = props;
  const {value, name} = route?.params;

  const [modalVisible, setModalVisible] = useState(false);

  const [signs, setSignArr] = useState([
    {name: 'Blind', id: 1},
    {name: 'Matori/Shearwater', id: 2},
    {name: 'Booby (White)', id: 3},
    {name: 'Booby (brown)', id: 4},
    {name: 'lwa/frigatebird', id: 5},
    {name: 'Bullshit/fairy tern', id: 6},
    {name: 'Noddy tern', id: 7},
    {name: 'Tropicbird(red tail)', id: 8},
    {name: 'Tropicbird(white tail)', id: 1},
    {name: 'Other', id: 2},
  ]);

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

  const _renderView = ({item, index}) => (
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
        <Image source={icons.ic_done} />
      ) : (
        <Image source={icons.ic_not_done} />
      )}
    </TouchableOpacity>
  );

  return (
    // <ImageBackground source={icons.ic_signup_bg} style={styles.image}>
      <SafeAreaView style={styles.content}>
        <Header
          containerStyle={{
            backgroundColor: colors.secondry,
            height: moderateScale(60),
          }}
          title={name}
          titleStyle={{fontFamily: fonts.bold}}
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
            renderItem={_renderView}
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
                  onPress={() => navigation.goBack()}
                />
              </View>
            )}
          />
        )}

        {/* <Modal
          animationType="slide"
          animationType={'slide'}
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {}}>
          <SafeAreaView style={styles.modal}>
            <TouchableOpacity
              style={{width: 100}}
              onPress={() => {
                setModalVisible(false);
              }}>
              <Image
                source={icons.ic_back_white}
                style={{
                  top: 10,
                  left: 10,
                }}
              />
            </TouchableOpacity>
          </SafeAreaView>
        </Modal>
         */}
      </SafeAreaView>
    // </ImageBackground>
  );
};

export default ModalListComponent;
