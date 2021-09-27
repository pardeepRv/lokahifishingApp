import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import {moderateScale, verticalScale} from 'react-native-size-matters';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {colors, screenNames} from '../../utilities/constants';
import {fonts, icons} from '../../../assets';
import {layout} from '../../utilities/layout';
import {RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView} from 'react-native-safe-area-context';

class Progress extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      weight: null,
    };
  }
  componentDidMount() {}

  render() {
    const {navigation} = this.props;
    const {weight} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flex: 1,
          }}>
          <Text>HOME</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white1,
  },
});
export default Progress;
