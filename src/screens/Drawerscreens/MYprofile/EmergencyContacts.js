
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
import { Button } from '../../../components/common/Button';
import TextInputComp from '../../../components/common/TextInputComp';
import { strings } from '../../../localization';
import commonStyles from '../../../utilities/commonStyles';
import { colors } from '../../../utilities/constants';
import { layout } from '../../../utilities/layout';


const EmergencyContacts = () => {

  const [addContact, setAllContact] = useState([1, 2, 3])
  const [state, setState] = useState({
    name: '',
    relation: '',
    phoneNo: '',
    secondName: '',
    secondRelation: '',
    secondPhoneNo: ''
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
            marginBottom: 30
          }}
          label={'Save'}
        // onPress={() => Done()}
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

export default EmergencyContacts;
