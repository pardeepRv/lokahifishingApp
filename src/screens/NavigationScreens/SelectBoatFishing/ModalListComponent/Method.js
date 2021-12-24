import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
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
const cloneDeep = require('clone-deep');

const Tab = createMaterialTopTabNavigator();
const Bait = props => {
  console.log(props, 'props in bait>>>>>>>>>>');
  const {baitMethods, getSelectedbaits} = props;

  console.log(baitMethods, 'baitMethods');
  let emptyArr = [];
  const [baitArry, setBaitArry] = useState([]);

  useEffect(() => {
    setBaitArry(baitMethods);
  }, []);

  const onClickInner = (index, idx1, idx2, first, second, third, status) => {
    console.log(
      index,
      idx1,
      idx2,
      first,
      second,
      third,
      status,
      'index',
      'idx1',
      'idx2',
      'first',
      'second',
      'third',
      'status',
    );

    console.log(baitArry, 'baitArrybaitArry');

    // console.log(emptyArr, 'before this.emptyArr');

    // if (status == false) {
    //   emptyArr.push([index]);

    //   emptyArr.forEach(elements => {
    //     console.log(elements, 'in loop 166');
    //     if (elements && elements.length <= 1) {
    //       elements.push(idx1);
    //       if (elements && elements.length <= 2) {
    //         elements.push(idx2);
    //       }
    //     }
    //   });
    // } else {
    //   emptyArr.forEach((elements, i) => {
    //     return console.log(elements, 'in loop 176');

    //     if (elements[0] == index && elements[1] == idx) {
    //       console.log('coming in else loop2', i);
    //       emptyArr.splice(i, 1);
    //     }
    //   });
    // }

    // console.log(emptyArr, 'after emptyArr');

    const temp = baitArry.slice();
    temp[index].subcategory[idx1].methods[idx2].isSelected =
      !temp[index].subcategory[idx1].methods[idx2].isSelected;

    setBaitArry(temp);
    getSelectedbaits(temp);
  };

  const _renderItem = ({item, index}) => {
    return (
      <>
        {item.name == 'Bait' && (
          <>
            {item.subcategory.map((val, idx1) => {
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
                  {val.methods.map((v, idx2) => {
                    return (
                      <TouchableOpacity
                        key={idx2}
                        style={{
                          padding: 10,
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                        }}
                        onPress={() =>
                          onClickInner(
                            index,
                            idx1,
                            idx2,
                            item,
                            val,
                            v,
                            v.isSelected,
                          )
                        }>
                        <View
                          style={{
                            margin: 2,
                            padding: 5,
                          }}>
                          <Text
                            style={{
                              fontFamily: fonts.regular,
                            }}>
                            {v.method_name}
                          </Text>
                        </View>
                        {v && v.isSelected ? (
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
                  })}
                </>
              );
            })}
          </>
        )}
      </>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={baitArry}
        contentInset={{bottom: 40}}
        extraData={baitArry}
        renderItem={_renderItem}
        removeClippedSubviews={true}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const Lure = props => {
  console.log(props, 'props in bait>>>>>>>>>>');
  const {lureMethods} = props;
  return (
    <ScrollView
      style={{
        flex: 1,
      }}>
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
                        <TouchableOpacity>
                          {/* onPress={() => alert(i)} */}
                          <Text
                            style={{
                              padding: 10,
                              fontFamily: fonts.regular,
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
    </ScrollView>
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

const Method = props => {
  console.log(props, 'props in methoddd');
  const [modalVisible, setModalVisible] = useState(false);
  const [Index, setIndex] = useState(0);

  const [allBait, setAllBait] = useState([]);

  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);

  console.log(auth, 'auth>>>>>>>>>>>>auth', app, 'app>>>>>>>>>>>>>>>>app');

  const setMethod = state => {
    console.log('press>>>>>>>>>>>>q', state);
    setModalVisible(state);
  };

  const submitAllSelctedThings = selectedIndex => {
    if (selectedIndex == 0) {
      props.baiArr(allBait && allBait.length > 0 ? allBait : []);
    }
    props.navigation.goBack();
  };

  //get selected baits
  const getSelectedbaits = vals => {
    console.log(vals, 'value in me');
    let arr = [];
    if (vals && vals.length > 0) {
      vals.forEach(element => {
        if (element && element.subcategory) {
          element.subcategory.forEach(val => {
            if (val && val.methods) {
              val.methods.forEach(v => {
                if (v.isSelected) {
                  v.mainName = 'Bait';
                  arr.push(v);
                }
              });
            }
          });
        }
      });
    }
    console.log(arr, 'vals in arrarr');
    return setAllBait(arr);
  };

  return (
    <SafeAreaView style={styles.content}>
      <Tab.Navigator
        screenListeners={({navigation}) => ({
          state: e => {
            console.log('state changed', e.data);
            setIndex(e.data.state.index);
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
          children={() => (
            <Bait
              baitMethods={app.methodarray}
              getSelectedbaits={getSelectedbaits}
            />
          )}
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
          onPress={() => submitAllSelctedThings(Index)}
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
