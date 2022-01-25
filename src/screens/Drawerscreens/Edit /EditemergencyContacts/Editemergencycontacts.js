import React, { useState } from 'react';
import {
  ImageBackground,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import { fonts, icons } from '../../../../../assets';
import { Button } from '../../../../components/common/Button';
import { Loader } from '../../../../components/common/Loader';
import TextInputComp from '../../../../components/common/TextInputComp';
import { updatecontacts } from '../../../../store/actions';
import commonStyles from '../../../../utilities/commonStyles';
import { colors } from '../../../../utilities/constants';
import { layout } from '../../../../utilities/layout';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const EditContacts = () => {
  let auth = useSelector(state => state.auth);
  console.log(auth, 'auth in Emergency contact  page>>>>>>>>>>');

  const dispatch = useDispatch();
  const [addContact, setAllContact] = useState([1, 2, 3]);
  const [state, setState] = useState({
    name:
      auth &&
        auth.userAllData &&
        auth.userAllData.emergency_contacts &&
        auth.userAllData.emergency_contacts.length > 0
        ? auth.userAllData.emergency_contacts[0].name
        : '',
    relation:
      auth &&
        auth.userAllData &&
        auth.userAllData.emergency_contacts &&
        auth.userAllData.emergency_contacts.length > 0
        ? auth.userAllData.emergency_contacts[0].relation
        : '',
    phoneNo:
      auth &&
        auth.userAllData &&
        auth.userAllData.emergency_contacts &&
        auth.userAllData.emergency_contacts.length > 0
        ? auth.userAllData.emergency_contacts[0].phone_number
        : '',
    secondName:
      auth &&
        auth.userAllData &&
        auth.userAllData.emergency_contacts &&
        auth.userAllData.emergency_contacts.length > 0
        ? auth.userAllData.emergency_contacts[1].name
        : '',
    secondRelation:
      auth &&
        auth.userAllData &&
        auth.userAllData.emergency_contacts &&
        auth.userAllData.emergency_contacts.length > 0
        ? auth.userAllData.emergency_contacts[1].relation
        : '',
    secondPhoneNo:
      auth &&
        auth.userAllData &&
        auth.userAllData.emergency_contacts &&
        auth.userAllData.emergency_contacts.length > 0
        ? auth.userAllData.emergency_contacts[1].phone_number
        : '',
  });
  const [errors, setErrors] = useState({
    name: '',
    relation: '',
    phoneNo: '',
    secondPhoneNo: '',
    isLoading: false,
    secondName: '',
    secondRelation: '',
  });
  const { name, relation, phoneNo, secondName, secondRelation, secondPhoneNo } =
    state;

  const _onChangeText = key => val => {
    setState({ ...state, [key]: val });
  };

  const _renderView = ({ item, index }) => (
    <View
      style={{
        height: layout.size.height / 4,
        width: layout.size.width - 20,
        backgroundColor: colors.white1,
        alignSelf: 'center',
        margin: 5,
        ...commonStyles.shadow,
      }}>
      <Text
        style={{
          fontFamily: fonts.bold,
          color: colors.primary,
          padding: 5,
        }}>
        Contact no. {index + 1}
      </Text>

      <TextInputComp
        label={'Name'}
        value={name}
        placeholder={'Please enter name here.'}
        labelTextStyle={{
          fontFamily: fonts.semiBold,
          fontSize: moderateScale(16),
          color: colors.white1,
        }}
        onChangeText={_onChangeText('name')}
      />
    </View>
  );

  function Done() {
    Keyboard.dismiss();

    //email error

    let token = auth && auth?.userDetails?.access_token;
    let formData = new FormData();

    formData.append('name_1', name);
    formData.append('relation_1', relation);
    formData.append('phone_number_1', phoneNo);
    formData.append('name_2', secondName);
    formData.append('relation_2', secondRelation);
    formData.append('phone_number_2', secondPhoneNo);

    console.log(formData, 'sending to  emergency api aApi');

    dispatch(updatecontacts({ formData, token }));
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white1 }}>
      <View
        style={{
          flex: 1,
        }}>
        <ImageBackground source={icons.ic_signup_bg} style={styles.image}>
          <KeyboardAwareScrollView
            enableOnAndroid={true}
            style={{ flex: 1 }}
            contentContainerStyle={{
              paddingBottom: moderateScale(40), paddingHorizontal: moderateScale(15),
              // marginLeft: 15,
            }}
            keyboardShouldPersistTaps={'always'}
            showsVerticalScrollIndicator={false}>
            <View
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  height: layout.size.height / 3 + 20,
                  width: layout.size.width - 20,
                  backgroundColor: colors.white1,
                  alignSelf: 'center',
                  margin: 5,
                  ...commonStyles.shadow,
                }}>
                <Text
                  style={{
                    fontFamily: fonts.bold,
                    color: colors.primary,
                    padding: 5,
                  }}>
                  Contact no. 1
                </Text>

                <TextInputComp
                  label={'Name'}
                  value={name}
                  placeholder={'Please enter name here.'}
                  labelTextStyle={{
                    fontFamily: fonts.semiBold,
                    fontSize: moderateScale(16),
                    color: colors.black1,
                  }}
                  onChangeText={_onChangeText('name')}
                />

                <TextInputComp
                  label={'Relation'}
                  value={relation}
                  placeholder={'Please enter Relation here.'}
                  labelTextStyle={{
                    fontFamily: fonts.semiBold,
                    fontSize: moderateScale(16),
                    color: colors.black1,
                  }}
                  onChangeText={_onChangeText('relation')}
                />
                <TextInputComp
                  label={'Phone no.'}
                  value={phoneNo}
                  placeholder={'Please Phone no. here.'}
                  keyboardType="number-pad"
                  labelTextStyle={{
                    fontFamily: fonts.semiBold,
                    fontSize: moderateScale(16),
                    color: colors.black1,
                  }}
                  onChangeText={_onChangeText('phoneNo')}
                />
              </View>
              <View
                style={{
                  height: layout.size.height / 3 + 20,
                  width: layout.size.width - 20,
                  backgroundColor: colors.white1,
                  alignSelf: 'center',
                  margin: 5,
                  ...commonStyles.shadow,
                }}>
                <Text
                  style={{
                    fontFamily: fonts.bold,
                    color: colors.primary,
                    padding: 5,
                  }}>
                  Contact no. 2
                </Text>

                <TextInputComp
                  label={'Name'}
                  value={secondName}
                  placeholder={'Please enter name here.'}
                  labelTextStyle={{
                    fontFamily: fonts.semiBold,
                    fontSize: moderateScale(16),
                    color: colors.black1,
                  }}
                  onChangeText={_onChangeText('secondName')}
                />

                <TextInputComp
                  label={'Relation'}
                  value={secondRelation}
                  placeholder={'Please relation here.'}
                  labelTextStyle={{
                    fontFamily: fonts.semiBold,
                    fontSize: moderateScale(16),
                    color: colors.black1,
                  }}
                  onChangeText={_onChangeText('secondRelation')}
                />

                <TextInputComp
                  label={'Phone no.'}
                  value={secondPhoneNo}
                  keyboardType="number-pad"
                  placeholder={'Please phone no. here.'}
                  labelTextStyle={{
                    fontFamily: fonts.semiBold,
                    fontSize: moderateScale(16),
                    color: colors.black1,
                  }}
                  onChangeText={_onChangeText('secondPhoneNo')}
                />
              </View>

              <Button
                style={{
                  backgroundColor: colors.primary,
                  borderRadius: 20,
                  width: layout.size.width - 50,
                  alignSelf: 'center',
                  marginBottom: 30,
                }}
                label={'Save'}
                onPress={() => Done()}
              />

              {/* <FlatList
        extraData={addContact}
        data={addContact}
        renderItem={_renderView}
        keyExtractor={(item, index) => 'key' + index}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() =>
          !addContact.length ? (
            <Text style={styles.nomatch}>No Match found</Text>
          ) : null
        }

        ListFooterComponent={() =>
          <Button
            style={{
              backgroundColor: colors.primary,
              borderRadius: 20,
              width: layout.size.width - 50,
              alignSelf: 'center',
              marginBottom: 30
            }}
            label={'Save'}
          // onPress={() => Done()}
          />
        }

      /> */}
            </View>
          </KeyboardAwareScrollView>
          <Loader isLoading={auth.loading} isAbsolute />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    position: 'relative',
    display: 'flex',
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    height: '100%',
  },
});

export default EditContacts;
