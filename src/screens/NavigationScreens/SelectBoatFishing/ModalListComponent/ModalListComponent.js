import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  SectionList,
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../../assets';
import {Button} from '../../../../components/common';
import Circular from '../../../../components/common/Circular';
import {Header} from '../../../../components/common/Header';
import {strings} from '../../../../localization';
import {colors} from '../../../../utilities/constants';
import styles from './styles.js';

const ModalListComponent = props => {
  console.log(props, 'props in modal>>>>>>>.');

  const {navigation, route} = props;
  const {value, name, getSelectedSigns} = route?.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [open, setopen] = useState(false);

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
          showsVerticalScrollIndicator={false}
          renderItem={_renderView}
          contentInset={{bottom: 20}}
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

      {/* {value == 2 && <Text>jkhvtu</Text>}

      {value == 3 && (
        <SectionList
          sections={[
            {
              title: 'A',
              data: ['ALTERED', 'ABBY', 'ACTION U.S.A.', 'AMUCK', 'ANGUISH'],
            },
            {
              title: 'B',
              data: [
                'BEST MEN',
                'BEYOND JUSTICE',
                'BLACK GUNN',
                'BLOOD RANCH',
                'BEASTIES',
              ],
            },
            {
              title: 'C',
              data: [
                'CARTEL',
                'CASTLE OF EVIL',
                'CHANCE',
                'COP GAME',
                'CROSS FIRE',
              ],
            },
          ]}
          renderItem={({item}) => (
            <Text style={{padding: 10, fontSize: 18, height: 44}}>{item}</Text>
          )}
          renderSectionHeader={({section,index}) => (
            <Text style={styles.sectionHeader} onPress={onPress}>
              {section.title}{index}
            </Text>
          )}
          keyExtractor={(item, index) => index}
        />
      )} */}

      {value == 5 && <Circular />}
    </SafeAreaView>
  );
};

export default ModalListComponent;
