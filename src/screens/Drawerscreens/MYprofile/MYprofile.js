// ecternal libraries
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useState, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
// internal libraries
import {fonts, icons} from '../../../../assets';
import {Header} from '../../../components/common/Header';
import {Loader} from '../../../components/common/Loader';
import {strings} from '../../../localization';
import {getLoginUserProfile} from '../../../store/actions';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';
import BoatInfo from './BoatInfo';
import EmergencyContacts from './EmergencyContacts';
import LCR from './LCR';
import styles from './styles';

const Tab = createMaterialTopTabNavigator();

const MYprofile = ({navigation}) => {
  const dispatch = useDispatch();

  let auth = useSelector(state => state.auth);
  console.log(auth, 'auth in myprofile  page>>>>>>>>>>');
  const [state, setState] = useState({
    refreshing: false,
  });

  useEffect(() => {
    console.log('coming in this on frindz page');
    const unsubscribe = navigation.addListener('focus', () => {
      getprofile();
    });
    return unsubscribe;
  }, [navigation]);

  function getprofile() {
    Keyboard.dismiss();
    let token = auth && auth.userDetails.access_token;
    dispatch(getLoginUserProfile(token));
  }

  function _onRefresh() {
    setState({refreshing: true});
    getprofile();
  }
  return (
    <ImageBackground source={icons.ic_signup_bg} style={styles.image}>
      <SafeAreaView style={styles.content}>
        <Header
          containerStyle={{
            backgroundColor: colors.transparent,
            height: moderateScale(60),
          }}
          title={strings.My_Profile}
          titleStyle={{fontFamily: fonts.bold}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
          onRightPress={() => {
            navigation.navigate('Edit');
          }}
          rightIconSource={icons.ic_edit}
          rightIconStyle={{
            height: 20,
            width: 20,
          }}
        />
        <ScrollView
          style={{flex: 1}}
          refreshControl={
            <RefreshControl
              // refreshing={state.refreshing}
              refreshing={auth.loading}
              onRefresh={_onRefresh.bind(this)}
              title="Pull to refresh"
              tintColor={colors.white1}
              titleColor={colors.white1}
            />
          }>
          <View style={styles.contentcontainer}>
            <View style={styles.uploadContainer}>
              <Image
                source={
                  auth?.userDetails?.profile_picture
                    ? {uri: auth?.userDetails?.profile_picture}
                    : icons.loginLogo
                }
                resizeMode="cover"
                style={{
                  borderRadius: moderateScale(100),
                  height: layout.size.height / 5,
                  width: layout.size.height / 5,
                }}
              />
            </View>
            <Text style={styles.nameStyle}>{auth?.userDetails?.user_name}</Text>
            <Text style={styles.nameStyle}>{auth?.userDetails?.full_name}</Text>
            {/* <Text style={styles.nameStyle}>
              {auth.userDetails.phone_number}
            </Text> */}
            {/* <Text style={styles.nameStyle}>{auth.userDetails.CML}</Text> */}
            <Text style={styles.nameStyle}>{auth?.userDetails?.city}</Text>
          </View>
        </ScrollView>

        <Tab.Navigator
          tabBarOptions={{
            style: {
              backgroundColor: colors.secondry,
            },
            allowFontScaling: false,
            labelStyle: {
              color: colors.white1,
              fontWeight: '700',
              shadowColor: colors.black1,
              shadowOffset: {width: 1, height: 1},
              shadowOpacity: 1,
              shadowRadius: 0,
              textTransform: 'none',
              fontSize: 14,
            },
            indicatorStyle: {
              backgroundColor: colors.white1,
            },
          }}>
            <Tab.Screen name="Boat Info" component={BoatInfo} />
          <Tab.Screen
            name="Emergency Contact"
            children={() => <EmergencyContacts {...auth} />}
          />
          <Tab.Screen name="LCR" component={LCR} />
        </Tab.Navigator>
      </SafeAreaView>
      <Loader isLoading={auth.loading} isAbsolute />
    </ImageBackground>
  );
};

export default MYprofile;
