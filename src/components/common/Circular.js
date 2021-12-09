import React, { useState } from 'react';
import { Text, View } from 'react-native';
import CircularPicker from 'react-native-circular-picker';
import { moderateScale } from 'react-native-size-matters';
import { Button } from '.';
import { fonts, icons } from '../../../assets';
import { Header } from '../../components/common/Header';
import { strings } from '../../localization';
import { colors } from '../../utilities/constants';
import { layout } from '../../utilities/layout';
import TextInputComp from './TextInputComp';

const Circular = ({ navigation, route }) => {
  console.log(route, 'in circleureer');

  if (route != undefined) {
    const { getHrs } = route?.params;

    const [price, setPrice] = useState(0);
    const handleChange = v => setPrice((v * 0.24).toFixed(0));
    const [time, settime] = useState('');



    
    const [errors, setErrors] = useState({
      time: '',
      isLoading: false,
    });
    const name_and_values = [{ name: 'time', value: time }];


    const sendSelectedValues = () => {
      console.log(price, 'price');
      getHrs(price);
      if (price > 0) {
        navigation.goBack();
      } else {
        alert('Please select efforts');
      }
    };
    return (
      <View
        style={{
          flex: 1,

          backgroundColor: colors.white1,
        }}>
        <Header
          containerStyle={{
            backgroundColor: colors.secondry,
            height: moderateScale(60),
          }}
          title={''}
          titleStyle={{ fontFamily: fonts.bold }}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />
        <View
          style={{
            alignItems: 'center',
          }}>
          <CircularPicker
            size={270}
            strokeWidth={40}
            steps={[
              4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68,
              72, 76, 80, 84, 88, 92, 96, 100,
            ]}
            gradients={{
              0: ['rgb(0, 122, 255)', 'rgb(10, 132, 255)'],
              // 0:  ['rgb(255, 97, 99)', 'rgb(247, 129, 119)'],
              // 15: ['rgb(255, 204, 0)', 'rgb(255, 214, 10)'],
              // 40: ['rgb(52, 199, 89)', 'rgb(48, 209, 88)'],
              // 70: ['rgb(0, 122, 255)', 'rgb(10, 132, 255)'],
            }}
            onChange={handleChange}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: moderateScale(24),
                fontFamily: fonts.bold,
                color: colors.primary,
              }}>
              {price} hr(s)
            </Text>
          </CircularPicker>

          <View
            style={{
              marginTop: moderateScale(25),
            }}>
            <TextInputComp
              // label={strings.email}
              value={time}
              placeholder={strings.entertime}
              labelTextStyle={{
                fontFamily: fonts.semiBold,
                fontSize: moderateScale(16),
                color: colors.white1,
              }}
              onFocus={() =>
                setErrors({
                  ...errors,
                  time: '',
                })
              }

            />
            {errors.time ? (
              <Text
                transparent
                style={{ color: colors.primary, bottom: 13, left: 4 }}>
                {errors.time}
              </Text>
            ) : null}
          </View>
          <Button
            style={{
              backgroundColor: colors.secondry,
              width: layout.size.width - 80,
              alignSelf: 'center',
              marginTop: 20,
            }}
            label={strings.submit}
            onPress={() => sendSelectedValues()}
          />
        </View>
      </View>
    );
  }
};
export default Circular;
