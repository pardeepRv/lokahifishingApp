import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useState} from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
import {fonts, icons} from '../../../../../assets';
import {Button} from '../../../../components/common';
import TextInputComp from '../../../../components/common/TextInputComp';
import {strings} from '../../../../localization';
import {colors} from '../../../../utilities/constants';
import {layout} from '../../../../utilities/layout';

const Tab = createMaterialTopTabNavigator();
let Methodlist = [
  {
    name: 'Live',
    value: [
      {label: 'Hawaii Kai', value: 'Hawaii Kai'},
      {label: 'Keehi', value: 'Keehi'},
      {label: 'Kaneohe', value: 'Kaneohe'},
      {label: 'Haleiwa', value: 'Haleiwa'},
      {label: 'Waianae', value: 'Waianae'},
    ],
  },
  {
    name: 'dead',
    value: [
      {label: 'Hawaii Kai', value: 'Hawaii Kai'},
      {label: 'Keehi', value: 'Keehi'},
      {label: 'Kaneohe', value: 'Kaneohe'},
      {label: 'Haleiwa', value: 'Haleiwa'},
      {label: 'Waianae', value: 'Waianae'},
    ],
  },
];
let lurelist = [
  {
    name: 'color',
    value: [
      {label: 'Hawaii Kai', value: 'Hawaii Kai'},
      {label: 'Keehi', value: 'Keehi'},
      {label: 'Kaneohe', value: 'Kaneohe'},
      {label: 'Haleiwa', value: 'Haleiwa'},
      {label: 'Waianae', value: 'Waianae'},
    ],
  },
  {
    name: 'type',
    value: [
      {label: 'Hawaii Kai', value: 'Hawaii Kai'},
      {label: 'Keehi', value: 'Keehi'},
      {label: 'Kaneohe', value: 'Kaneohe'},
      {label: 'Haleiwa', value: 'Haleiwa'},
      {label: 'Waianae', value: 'Waianae'},
    ],
  },
  {
    name: 'Lure Maker',
    value: [
      {label: 'Hawaii Kai', value: 'Hawaii Kai'},
      {label: 'Keehi', value: 'Keehi'},
      {label: 'Kaneohe', value: 'Kaneohe'},
      {label: 'Haleiwa', value: 'Haleiwa'},
      {label: 'Waianae', value: 'Waianae'},
    ],
  },
  {
    name: 'size',
    value: [
      {label: 'Hawaii Kai', value: 'Hawaii Kai'},
      {label: 'Keehi', value: 'Keehi'},
      {label: 'Kaneohe', value: 'Kaneohe'},
      {label: 'Haleiwa', value: 'Haleiwa'},
      {label: 'Waianae', value: 'Waianae'},
    ],
  },
];
const Bait = props => {
  console.log(props, 'props in bait>>>>>>>>>>');
  const {baitMethods} = props;
  return (
    <View style={{flex: 1}}>
      {baitMethods &&
      baitMethods.subcategory &&
      baitMethods.subcategory.length > 0
        ? baitMethods.subcategory.map((val, i) => {
            return (
              <>
                <View
                  style={{
                    width: layout.size.width - 20,
                    height: moderateScale(35),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: 'red',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: fonts.semiBold,
                      color: colors.black1,
                    }}>
                    {val.name}
                  </Text>
                  <Image
                    source={icons.ic_rightArrow}
                    style={{
                      height: 20,
                      width: 20,
                      alignSelf: 'center',
                      tintColor: colors.black1,
                    }}
                  />
                </View>
                <>
                  {val.methods.map((v, i) => {
                    return (
                      <View>
                        <Text>{v.method_name}</Text>
                      </View>
                    );
                  })}
                </>
              </>
            );
          })
        : null}
    </View>
  );
};

const Lure = props => {
  console.log(props, 'props in bait>>>>>>>>>>');
  const {lureMethods} = props;
  return (
    <View style={{flex: 1}}>
      {lureMethods &&
      lureMethods.subcategory &&
      lureMethods.subcategory.length > 0
        ? lureMethods.subcategory.map((val, i) => {
            return (
              <>
                <TouchableOpacity
                  style={{
                    width: layout.size.width - 20,
                    height: moderateScale(35),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: fonts.semiBold,
                      color: colors.black1,
                    }}>
                    {val.name}
                  </Text>
                  <Image
                    source={icons.ic_rightArrow}
                    style={{
                      height: 20,
                      width: 20,
                      alignSelf: 'center',
                      tintColor: colors.black1,
                    }}
                  />
                </TouchableOpacity>
                <>
                  {val.methods.map((v, i) => {
                    return (
                      <TouchableOpacity onPress={() => alert(i)}>
                        <Text
                          style={{
                            padding: 10,
                          }}>
                          {v.method_name}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </>
              </>
            );
          })
        : null}
    </View>
  );
};

const Other = props => {
  console.log(props, 'props in meee>>>>>>>>>>>');
  const {otherMethods} = props;
  const [modalVisible1, setModalVisible1] = useState(props.modalVisible);
  const [state, setState] = useState({
    text: '',
  });
  const {text} = state;
  const _onChangeText = key => val => {
    setState({...state, [key]: val});
  };
  const [errors, setErrors] = useState({
    text: '',
    isLoading: false,
  });
  const name_and_values = [{name: 'text', value: text}];

  return (
    <>
      <>
        <TouchableOpacity
          style={{
            width: layout.size.width - 20,
            height: moderateScale(35),
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}
          onPress={() => {
            props.setMethod(true);
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: fonts.semiBold,
              color: colors.black1,
            }}>
            Other
          </Text>
        </TouchableOpacity>
      </>
      <Modal
        animationType={'none'}
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {}}>
        <SafeAreaView>
          <View style={styles.modalcontent}>
            <View style={styles.modalcontainer}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={styles.modaltextlogo}>
                Enter Other Method
              </Text>
              <View
                style={{
                  marginTop: moderateScale(15),
                  width: layout.size.width / 2,
                }}>
                <TextInputComp
                  value={text}
                  placeholder={strings.enterother}
                  labelTextStyle={styles.labelTextStyle}
                  onFocus={() =>
                    setErrors({
                      ...errors,
                      text: '',
                    })
                  }
                  onChangeText={_onChangeText('text')}
                />
                {errors.text ? (
                  <Text
                    transparent
                    style={{color: colors.primary, bottom: 13, left: 4}}>
                    {errors.text}
                  </Text>
                ) : null}
              </View>
              <View style={styles.modalbuttonviewstyle}>
                <TouchableOpacity
                  style={styles.modalbuttonstyle}
                  underlayColor={colors.white1}
                  onPress={() => {
                    props.setMethod(false);
                  }}>
                  <Text style={styles.modalbuttontextstyle}>cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalbuttonstyle}
                  underlayColor={colors.white1}
                  onPress={() => {
                    props.setMethod(false);
                  }}>
                  <Text style={styles.modalbuttontextstyle}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
};

const Method = ({props, navigation}) => {
  console.log(props, 'props in methoddd');
  const [modalVisible, setModalVisible] = useState(false);
  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);

  console.log(auth, 'auth>>>>>>>>>>>>auth', app, 'app>>>>>>>>>>>>>>>>app');

  const setMethod = state => {
    console.log('press>>>>>>>>>>>>q', state);
    setModalVisible(state);
  };

  return (
    <SafeAreaView style={styles.content}>
      <Tab.Navigator
        screenListeners={({navigation}) => ({
          state: e => {
            console.log('state changed', e.data);
            if (e && e.data && e.data.state && e.data.state.index == 2) {
              setModalVisible(false);
            } else {
              setModalVisible(false);
            }
          },
        })}
        swipeEnabled={false}
        tabBarOptions={{
          style: {
            backgroundColor: colors.secondry,
          },
          allowFontScaling: false,
          swipeEnabled: false,
          labelStyle: {
            color: colors.white1,
            fontWeight: '800',
            shadowColor: colors.black1,
            shadowOffset: {width: 1, height: 1},
            shadowOpacity: 1,
            shadowRadius: 0,
            textTransform: 'none',
            fontSize: 20,
          },
          indicatorStyle: {
            backgroundColor: colors.white1,
          },
        }}>
        <Tab.Screen
          name="Bait"
          children={() => <Bait baitMethods={app.methodarray[0]} />}
        />
        <Tab.Screen
          name="Lure"
          children={() => <Lure lureMethods={app.methodarray[1]} />}
        />
        <Tab.Screen
          name="Other"
          children={() => (
            <Other
              otherMethods={app.methodarray[2]}
              modalVisible={modalVisible}
              setMethod={setMethod}
              listeners={({navigation, route}) => ({
                tabPress: e => {
                  alert('tygi');
                  e.preventDefault();
                },
              })}
            />
          )}
        />
      </Tab.Navigator>
      <View
        style={{
          marginTop: moderateScale(10),
        }}>
        <Button
          style={{
            backgroundColor: colors.secondry,
            width: layout.size.width - 80,
            alignSelf: 'center',
          }}
          label={strings.submit}
          //   onPress={() => this.sendSelectedValues()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: colors.secondry,
  },
  pdf: {
    flex: 1,
    width: '100%',
  },
  modalcontent: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black4,
  },
  modalcontainer: {
    height: layout.size.height / 4.2,
    width: layout.size.width / 1.5,
    backgroundColor: colors.lightTransparent,
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: moderateScale(20),
    borderColor: '#D3D3D3',
  },
  modaltextlogo: {
    height: moderateScale(25),
    fontFamily: fonts.bold,
    fontSize: moderateScale(20),
    color: colors.white1,
    top: 10,
  },
  modaltextstyle: {
    height: moderateScale(45),
    top: moderateScale(10),

    textAlign: 'center',
    fontFamily: fonts.bold,
    fontSize: moderateScale(15),
    color: colors.white1,
  },
  modalbuttonviewstyle: {
    padding: moderateScale(5),
    height: moderateScale(55),
    width: layout.size.width / 1.6,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalbuttonstyle: {
    backgroundColor: colors.lightTransparent,
    // borderColor: colors.black15,
    borderRadius: moderateScale(6),
    width: moderateScale(100),
    height: moderateScale(40),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    elevation: 3,
  },
  modalbuttontextstyle: {
    color: colors.white1,
    fontFamily: fonts.bold,
    fontSize: moderateScale(16),
    alignSelf: 'center',
    fontWeight: 'bold',
    margin: moderateScale(10),
  },
  labelTextStyle: {
    fontFamily: fonts.semiBold,
    fontSize: moderateScale(16),
    color: colors.white1,
  },
});

export default Method;
