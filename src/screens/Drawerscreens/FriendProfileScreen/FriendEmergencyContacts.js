
import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { fonts } from '../../../../assets';
import { Button } from '../../../components/common';
import TextInputComp from '../../../components/common/TextInputComp';
import commonStyles from '../../../utilities/commonStyles';


import { colors } from '../../../utilities/constants';
import { layout } from '../../../utilities/layout';






const FriendEmergencyContacts = Props => {
  console.log(Props, 'props in EmergencyContacts>>>>>>>>>>');
  const { item, EmergencyContacts } = Props;
  console.log(item, 'item in EmergencyContacts>>>>>>>>>>');
  console.log(EmergencyContacts, 'EmergencyContacts lcr  ');
  const [addContact, setAllContact] = useState([1, 2, 3])
  const [state, setState] = useState({
    name:  EmergencyContacts[0].name ? EmergencyContacts[0].name : '',
    relation: EmergencyContacts[0].relation ? EmergencyContacts[0].relation : '',
    phoneNo: EmergencyContacts[0].phone_number ? EmergencyContacts[0].phone_number : '',
    secondName: EmergencyContacts[1].name ? EmergencyContacts[1].name : '',
    secondRelation:  EmergencyContacts[1].relation ? EmergencyContacts[1].relation : '',
    secondPhoneNo:EmergencyContacts[1].phone_number ? EmergencyContacts[1].phone_number : ''
  });
  const { name,
    relation,
    phoneNo,
    secondName,
    secondRelation,
    secondPhoneNo
  } = state;

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
        ...commonStyles.shadow
      }}
    >
      <Text
        style={{
          fontFamily: fonts.bold,
          color: colors.primary,
          padding: 5
        }}
      >
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

  return (
    <ScrollView
      style={{
        flex: 1
      }}
      contentContainerStyle={{
        paddingBottom: moderateScale(40),

      }}
      keyboardShouldPersistTaps={'always'}
      showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1
        }}
      >

        <View
          style={{
            height: layout.size.height / 3 + 20,
            width: layout.size.width - 20,
            backgroundColor: colors.white1,
            alignSelf: 'center',
            margin: 5,
            ...commonStyles.shadow
          }}
        >
          <Text
            style={{
              fontFamily: fonts.bold,
              color: colors.primary,
              padding: 5
            }}
          >
            Contact no. 1
          </Text>

          <TextInputComp
            editable={false}
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
            editable={false}
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
            editable={false}
            label={'Phone no.'}
            value={phoneNo}
            placeholder={'Please Phone no. here.'}
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
            ...commonStyles.shadow
          }}
        >
          <Text
            style={{
              fontFamily: fonts.bold,
              color: colors.primary,
              padding: 5
            }}
          >
            Contact no. 2
          </Text>

          <TextInputComp
          editable={false}
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
            editable={false}
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
            editable={false}
            label={'Phone no.'}
            value={secondPhoneNo}
            placeholder={'Please phone no. here.'}
            labelTextStyle={{
              fontFamily: fonts.semiBold,
              fontSize: moderateScale(16),
              color: colors.black1,
            }}
            onChangeText={_onChangeText('secondPhoneNo')}
          />
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    position: 'relative',
    display: 'flex',
    flex: 1,
  }, image: {
    flex: 1,
    resizeMode: 'cover',
    height: '100%',
  }
});

export default FriendEmergencyContacts;
