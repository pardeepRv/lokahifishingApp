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
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../../assets';
import {Header} from '../../../../components/common/Header';
import {colors} from '../../../../utilities/constants';
import styles from './styles';

const LCRDetails = ({navigation}) => {
  return (
    <ImageBackground
      source={icons.signin_bg_ic}
      style={{flex: 1, height: '100%'}}
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
          titleStyle={{fontFamily: fonts.bold}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.black1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
          onRightPress={() => {
            navigation.navigate('EditLCRDetails');
          }}
          rightIconSource={icons.ic_edit}
          rightIconStyle={{
            height: 20,
            width: 20,
            tintColor: colors.primary,
          }}
        />
        <ScrollView style={{flex: 1}}>
          <View style={styles.content}>
            <View style={styles.picView}>
              <Image
                source={icons.loginLogo}
                // onLoadStart={() => setImgIsLoading(true)}
                // onLoadEnd={() => setImgIsLoading(false)}

                style={styles.pic}
                // style={styles.pic}
              />
              {/* <ActivityIndicator size='large' color='#ffffff' style={    styles.loading } /> */}
            </View>
            <View style={styles.userInfo}>
              <Image source={icons.loginLogo} style={styles.profilePic} />
              <Text style={styles.text}>mahi</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={[styles.text, styles.date]}>Caught on:</Text>
              <Text style={[styles.text, styles.date]}>12/oct/2021</Text>
            </View>
            <View style={styles.commentView}>
              <Text style={[styles.text, styles.fishText]}>
                weight not given
              </Text>
              <Text style={[styles.comment]}>Effort: 22 hrs</Text>
              <Text style={styles.comment}>
                Fishing type : Boat fishing, Offshore Fishing
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
    </ImageBackground>
  );
};

export default LCRDetails;
