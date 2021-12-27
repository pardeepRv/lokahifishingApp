import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Pdf from 'react-native-pdf';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../assets';
import {Header} from '../../../components/common/Header';
import { strings } from '../../../localization';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';
import { useDispatch, useSelector } from 'react-redux';
import { termsandcondition } from '../../../store/actions';

const PrivacyPolicy = ({navigation}) => {

  let auth = useSelector(state => state.auth);
    let app = useSelector(state => state.app);


    console.log(app, 'appp in TERMS_AND_CONDITION   page>>>>>>>>>>');
    console.log(auth, 'auth in TERMS_AND_CONDITION page >>>>>>>>>>');

    const dispatch = useDispatch();

    useEffect(() => {
      console.log('coming in this on lcrlist page');
      const unsubscribe = navigation.addListener('focus', () => {
        gettermsfunc();
      });
      return unsubscribe;
    }, [navigation]);
  
    function gettermsfunc() {
      let token = auth && auth?.userDetails?.access_token;
      dispatch(termsandcondition(token));
    }
  return (
    <SafeAreaView style={styles.content}>
      <Header
        containerStyle={{
          backgroundColor: colors.transparent,
          height: moderateScale(60),
        }}
        title={strings.Privacy_Policy}
        titleStyle={{fontFamily: fonts.bold}}
        leftIconSource={icons.ic_back_white}
        leftButtonStyle={{
          tintColor: colors.white1,
        }}
        onLeftPress={() => {
          navigation.goBack();
        }}
      />
      <Pdf
        source={{uri: app && app.pagelist && app.pagelist.doc}}
        style={styles.pdf}
        loading="Loading PDF..."
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: colors.secondry,
  },
  pdf: {
    flex: 1,
    width: layout.size.width,
    height: layout.size.height,
  },
});
export default PrivacyPolicy;
