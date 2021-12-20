import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  I18nManager,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {fonts} from '../../../assets';
import {colors} from '../../utilities/constants';

const TextInputComp = ({
  value,
  onChangeText,
  placeholder,
  inputStyle,
  textStyle,
  marignBottom = 16,
  label,
  required = true,
  labelTextStyle,
  keyboardType,
  onFocus,
  editable,
  editProfile = false,
  secureTextEntry,
  onkeypress,
  ...props
}) => {
  const textAlign = I18nManager.isRTL ? 'right' : 'left';
  return (
    <View
      style={{
        marginBottom: marignBottom,
      }}>
      <View style={{flexDirection: 'row'}}>
        {label && (
          <Text style={{...styles.labelText, ...labelTextStyle}}>{label}</Text>
        )}
      </View>

      <TextInput
        onFocus={onFocus}
        placeholder={placeholder}
        style={{
          ...styles.inputStyle,
          ...inputStyle,
          textAlign,
          borderRadius: moderateScale(20),
        }}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={colors.grey1}
        // placeholderTextColor={colors.blueDarkColor}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry ? secureTextEntry : false}
        onKeyPress={({ nativeEvent }) => {
          nativeEvent.key === 'Backspace' ?  nativeEvent.key === 'Backspace' : false
        }}
        editable={editable}
        autoCapitalize="none"
        {...props}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputStyle: {
    fontSize: RFValue(16),
    backgroundColor: colors.white1,
    paddingVertical: moderateVerticalScale(10),
    paddingHorizontal: moderateScale(10),
    borderBottomWidth: 1,
    borderColor: colors.grey12,
    alignItems: 'center',
    height: moderateVerticalScale(42),
  },
  labelText: {
    fontFamily: fonts.semiBold,
    color: colors.black1,
    fontSize: RFValue(14),
    paddingHorizontal: 5,
  },
});

export default TextInputComp;
