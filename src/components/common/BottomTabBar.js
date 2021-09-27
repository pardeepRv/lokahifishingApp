import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import AppStyles from '../AppStyles';
import {CommonActions} from '@react-navigation/native';

function BottomTabBar(props) {
  const {state, descriptors, navigation} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#FFFEFE',
        height: 55,
        borderTopWidth: 1,
        borderTopColor: '#CCCCCC',
        alignItems: 'center',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        let image = AppStyles.iconSet.home;
        if (route.name === 'Home') {
          image = AppStyles.iconSet.home;
        } else if (route.name === 'Family Directory') {
          image = AppStyles.iconSet.family;
        } else if (route.name === 'Church Directory') {
          image = AppStyles.iconSet.church;
        }
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        let color = isFocused ? '#CBB26A' : '#999999';

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (
            Object.keys(props.info).length == 0 &&
            (route.name === 'Family Directory' ||
              route.name === 'Church Directory')
          ) {
            navigation.navigate('Auth');
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: 'Home'}],
              }),
            );
            return;
          }

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center'}}>
            <Image
              source={image}
              style={{
                height: '60%',
                width: 25,
                tintColor: color,
                resizeMode: 'contain',
              }}
            />
            <Text style={{color: color}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const mapStateToProps = state => {
  const {info = {}} = state.user;
  return {info};
};
export default connect(mapStateToProps, null)(BottomTabBar);
