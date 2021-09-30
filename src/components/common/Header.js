import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {colors} from '../../utilities/constants';
import {fonts, icons} from '../../../assets';

const Header = ({
  containerStyle,
  showBottomBorder,

  leftIconSource,
  onLeftPress,
  disableLeft,
  leftButtonStyle,

  rightIconSource,
  onRightPress,
  disableRight,
  rightButtonStyle,
  renderRightButton,
  rightIconStyle,

  title,
  titleStyle,
  renderCenterTitle,
  titlePosition = 'center',
  blackTitle,
}) => {
  const renderLeft = () => {
    if (!disableLeft && leftIconSource) {
      return (
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.leftStyle, leftButtonStyle]}
          onPress={onLeftPress}>
          <Image source={leftIconSource} style={leftButtonStyle} />
        </TouchableOpacity>
      );
    }
    return <View style={styles.leftStyle} />;
  };

  const renderRight = () => {
    if (renderRightButton) {
      return renderRightButton();
    } else if (!disableRight && rightIconSource) {
      return (
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.rightStyle, rightButtonStyle]}
          onPress={onRightPress}>
          <Image source={rightIconSource} style={rightIconStyle} />
        </TouchableOpacity>
      );
    }

    return <View style={styles.leftStyle} />;
  };

  const renderTitle = () => {
    if (renderCenterTitle) {
      return renderCenterTitle();
    } else if (title) {
      return (
        <Text
          style={[
            {
              ...styles.titleStyle,
              textAlign: titlePosition,
              marginHorizontal:
                titlePosition === 'center' ? moderateScale(10) : 0,
              color: blackTitle ? colors.black1 : colors.white1,
            },
            titleStyle,
          ]}
          numberOfLines={1}
          ellipsizeMode={'tail'}>
          {title}
        </Text>
      );
    }
    return <View />;
  };

  return (
    <View
      style={[
        styles.containerStyle,
        containerStyle,
        {
          borderBottomWidth: showBottomBorder ? moderateScale(0.5) : 0,
          borderBottomColor: colors.grey4,
        },
      ]}>
      {renderLeft()}
      {renderTitle()}
      {renderRight()}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: moderateScale(56),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftStyle: {
    height: moderateScale(56),
    width: moderateScale(56),
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightStyle: {
    height: moderateScale(56),
    width: moderateScale(56),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: moderateScale(18),
    fontFamily: fonts.semiBold,
    flex: 1,
  },
});

export {Header};
