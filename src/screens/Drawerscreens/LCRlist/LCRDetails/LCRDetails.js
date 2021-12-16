import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { fonts, icons } from '../../../../../assets';
import { Header } from '../../../../components/common/Header';
import { colors, FISHES_IMAGES, screenNames } from '../../../../utilities/constants';
import TimeAgo from 'react-native-timeago';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import { Loader } from '../../../../components/common';

const LCRDetails = ({ navigation, route }) => {
  const { item,allDropDown } = route.params;
  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);

  console.log(app, 'appp in lcrlist   page>>>>>>>>>>');
  console.log(auth, 'auth in lcrlist page >>>>>>>>>>');
  console.log(item, 'lcrlist  in lcrdetails >>>>>>>>>>');
  console.log(allDropDown, 'allDropDown  in lcrdetails >>>>>>>>>>');

  
  return (
    <ImageBackground
      source={icons.signin_bg_ic}
      style={{ flex: 1, height: '100%' }}
      blurRadius={6}
      opacity={0.8}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <Header
          containerStyle={{
            backgroundColor: 'transparent',
            height: moderateScale(60),
          }}
          blackTitle
          title={'LCR Detail'}
          titleStyle={{ fontFamily: fonts.bold }}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.black1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
          onRightPress={() =>
            navigation.navigate(screenNames.EditLCRDetails, { item: item, allDropDown: allDropDown })
          }
          rightIconSource={auth.userDetails.id===item.user.id ?icons.ic_edit :null}
          rightIconStyle={{
            height: 20,
            width: 20,
            tintColor: colors.primary,
          }}
        />
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.content}>
            <View style={styles.picView}>
              <Image
                // source={icons.loginLogo}
                source={{
                  uri: item && item.user && item.user.profile_picture
                  // uri: `https://server3.rvtechnologies.in/LokahiFishing_Admin/public/LCR_images/user_fishes/${item.image}`,
                }}
                // onLoadStart={() => setImgIsLoading(true)}
                // onLoadEnd={() => setImgIsLoading(false)}

                style={styles.pic}
              // style={styles.pic}
              />
              {/* <ActivityIndicator size='large' color='#ffffff' style={    styles.loading } /> */}
            </View>
            <View style={styles.userInfo}>
              <Image source={{ uri: `${FISHES_IMAGES}${item && item.fish && item.fish.image}` }}
                style={styles.profilePic}
              resizeMode="stretch"
              />
              <Text style={styles.text}>mahi</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={[styles.text, styles.date]}>Caught on:</Text>
              {/* <Text style={[styles.text, styles.date]}>12/oct/2021</Text> */}
              <TimeAgo style={[styles.text, styles.date]}time={item.created_at} />
            </View>
            <View style={styles.commentView}>
              <Text style={[styles.text, styles.fishText]}>
              {item.Fish_weight} lbs
              </Text>
              <Text style={[styles.comment]}>Effort: {item.effort}hrs</Text>
              <Text style={styles.comment}>
                Fishing type : {item.fish.first_category ? item.fish.first_category.title  : item.fish.first_category },{item.fish.second_categor ? item.fish.second_category.title  : item.fish.second_categor }, {item.fish.third_category ? item.fish.third_category.title  : item.fish.third_category}
              </Text>
            </View>
            <View style={styles.likecommentview}>
              <View style={styles.likecomment}>
                <TouchableOpacity>
                  <Image
                    source={icons.like}
                    style={{
                      height: 25,
                      width: 25,
                      tintColor: colors.white1,
                    }}
                  />
                </TouchableOpacity>
                <Text style={styles.likecommenttext}>Likes</Text>
              </View>
              <View style={styles.likecomment}>
                <TouchableOpacity>
                  <Image
                    source={icons.photoComment}
                    style={{
                      tintColor: colors.white1,
                    }}
                  />
                </TouchableOpacity>
                <Text style={styles.likecommenttext}>Comments</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <Loader isLoading={app.loading} isAbsolute />

    </ImageBackground>
  );
};

export default LCRDetails;
