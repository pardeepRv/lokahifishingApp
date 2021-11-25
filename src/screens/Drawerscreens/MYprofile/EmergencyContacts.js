import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../assets';
import TextInputComp from '../../../components/common/TextInputComp';
import commonStyles from '../../../utilities/commonStyles';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';

const EmergencyContacts = props => {
  console.log(props, 'datadata in emememeenekebev');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white1}}>
      <View
        style={{
          flex: 1,
        }}>
        <ImageBackground source={icons.ic_signup_bg} style={styles.image}>
          <ScrollView
            style={{
              flex: 1,
            }}
            contentContainerStyle={{
              paddingBottom: moderateScale(40),
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
                  value={
                    props &&
                    props.userAllData &&
                    props.userAllData.emergency_contacts &&
                    props.userAllData.emergency_contacts.length > 0 &&
                    props.userAllData.emergency_contacts[0].name
                  }
                  editable={false}
                  placeholder={'Please enter name here.'}
                  labelTextStyle={{
                    fontFamily: fonts.semiBold,
                    fontSize: moderateScale(16),
                    color: colors.black1,
                  }}
                />

                <TextInputComp
                  label={'Relation'}
                  value={
                    props &&
                    props.userAllData &&
                    props.userAllData.emergency_contacts &&
                    props.userAllData.emergency_contacts.length > 0 &&
                    props.userAllData.emergency_contacts[0].relation
                  }
                  editable={false}
                  placeholder={'Please enter Relation here.'}
                  labelTextStyle={{
                    fontFamily: fonts.semiBold,
                    fontSize: moderateScale(16),
                    color: colors.black1,
                  }}
                />
                <TextInputComp
                  label={'Phone no.'}
                  value={
                    props &&
                    props.userAllData &&
                    props.userAllData.emergency_contacts &&
                    props.userAllData.emergency_contacts.length > 0 &&
                    props.userAllData.emergency_contacts[0].phone_number
                  }
                  editable={false}
                  placeholder={'Please Phone no. here.'}
                  labelTextStyle={{
                    fontFamily: fonts.semiBold,
                    fontSize: moderateScale(16),
                    color: colors.black1,
                  }}
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
                  value={
                    props &&
                    props.userAllData &&
                    props.userAllData.emergency_contacts &&
                    props.userAllData.emergency_contacts.length > 0 &&
                    props.userAllData.emergency_contacts[1].name
                  }
                  editable={false}
                  placeholder={'Please enter name here.'}
                  labelTextStyle={{
                    fontFamily: fonts.semiBold,
                    fontSize: moderateScale(16),
                    color: colors.black1,
                  }}
                />

                <TextInputComp
                  label={'Relation'}
                  value={
                    props &&
                    props.userAllData &&
                    props.userAllData.emergency_contacts &&
                    props.userAllData.emergency_contacts.length > 0 &&
                    props.userAllData.emergency_contacts[1].relation
                  }
                  editable={false}
                  placeholder={'Please relation here.'}
                  labelTextStyle={{
                    fontFamily: fonts.semiBold,
                    fontSize: moderateScale(16),
                    color: colors.black1,
                  }}
                />

                <TextInputComp
                  label={'Phone no.'}
                  value={
                    props &&
                    props.userAllData &&
                    props.userAllData.emergency_contacts &&
                    props.userAllData.emergency_contacts.length > 0 &&
                    props.userAllData.emergency_contacts[1].phone_number
                  }
                  editable={false}
                  placeholder={'Please phone no. here.'}
                  labelTextStyle={{
                    fontFamily: fonts.semiBold,
                    fontSize: moderateScale(16),
                    color: colors.black1,
                  }}
                />
              </View>
            </View>
          </ScrollView>
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

export default EmergencyContacts;
