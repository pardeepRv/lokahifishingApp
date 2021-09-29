import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

//extrenal libraries
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RFValue} from 'react-native-responsive-fontsize';

//internal libraries
import {colors, screenNames} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';
import {fonts, icons} from '../../../../assets';
import {Button} from '../../../components/common/Button';
import {strings} from '../../../localization';

const Home = ({navigation}) => {
  const [state, setState] = useState({
    email: '',

    isLoading: false,
  });

  const {email, isLoading} = state;

  const _onChangeText = key => val => {
    setState({...state, [key]: val});
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white1}}>
      <View
        style={{
          flex: 1,
        }}>
        <Text>
          byu
          {strings.fullname}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
