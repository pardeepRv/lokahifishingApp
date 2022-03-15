import React ,  {useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import TimeAgo from 'react-native-timeago';
import { useSelector } from 'react-redux';
import { fonts, icons } from '../../../../../assets';
import { Loader } from '../../../../components/common';
import { Header } from '../../../../components/common/Header';
import ImgViewer from '../../../../components/common/ImgViewer';
import {
  colors,
  FISHES_IMAGES,
  screenNames
} from '../../../../utilities/constants';
import { layout } from '../../../../utilities/layout';
import styles from './styles';

let images = [];

const LCRDetails = ({ navigation, route }) => {
  const { item, allDropDown } = route.params;
  const [modal, setmodal] = useState(false);
  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);
  const setmodalFun = (v) => {
    setmodal(v)
}

const setImages = () => {
    images = [];
}

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
            navigation.navigate(screenNames.EditLCRDetails, {
              item: item,
              allDropDown: allDropDown,
            })
          }
          rightIconSource={
            auth.userDetails.id === item.user.id ? icons.ic_edit : null
          }
          rightIconStyle={{
            height: 20,
            width: 20,
            tintColor: colors.primary,
          }}
        />
        <ScrollView style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <TouchableOpacity style={styles.picView}
                onPress={() => {
                  images.push({ url: item && item.user && item.user.profile_picture})
                  setmodal(true)
              }}
            >
              <Image
                // source={icons.loginLogo}
                source={{
                  uri: item && item.user && item.user.profile_picture
                  // uri: `https://server3.rvtechnologies.in/LokahiFishing_Admin/public/LCR_images/user_fishes/${item.image}`,
                // uri: `http://admin.lokahifishing.com/LCR_images/user_fishes/${item.image}`,

                }}
                // onLoadStart={() => setImgIsLoading(true)}
                // onLoadEnd={() => setImgIsLoading(false)}

                style={styles.pic}
              // style={styles.pic}
              />
              {/* <ActivityIndicator size='large' color='#ffffff' style={    styles.loading } /> */}
            </TouchableOpacity>
            <View style={styles.userInfo}>
              <TouchableOpacity 
                onPress={() => {
                  images.push({ url: `http://admin.lokahifishing.com/LCR_images/user_fishes/${item.image}`})
                  setmodal(true)
              }}
              >
              <Image
                source={{
                  uri: `http://admin.lokahifishing.com/LCR_images/user_fishes/${item.image}`,
                }}
                style={styles.profilePic}
                resizeMode="contain"
              />
              </TouchableOpacity>
              <Text style={styles.text}>
                {item && item.fish && item.fish.title}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: layout.size.width,
                top: 10
              }}>
              <Text style={[styles.text, styles.date]}>Caught on:</Text>
              <TimeAgo
                style={[styles.text, styles.date]}
                time={item.created_at}
              />
            </View>
            <View style={styles.commentView}>
              <Text style={[styles.text, styles.fishText]}>
                {item.Fish_weight} lbs
              </Text>
              <Text style={[styles.comment]}>Effort: {item.effort}hrs</Text>
              <Text style={styles.comment}>
                Fishing type :{' '}
                {item.fish.first_category
                  ? item.fish.first_category.title
                  : item.fish.first_category}
                ,
                {item.fish.second_category
                  ? item.fish.second_category.title
                  : item.fish.second_category}
                ,{' '}
                {item.fish.third_category
                  ? item.fish.third_category.title
                  : item.fish.third_category}
              </Text>
            </View>
            {/* <View style={styles.likecommentview}>
              <View style={styles.likecomment}>
                {item && item.lcr_liked ? (
                  <TouchableOpacity style={{}} >
                    <Image
                      source={icons.like_me}
                      style={{
                        height: 25,
                        width: 25,
                      }}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={{}} >
                    <Image
                      source={icons.like}
                      style={{
                        height: 25,
                        width: 25,
                        tintColor: colors.white1,
                      }}
                    />
                  </TouchableOpacity>
                )}

                <Text style={styles.likecommenttext}>{item.likes_count}Likes</Text>
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
                <Text style={styles.likecommenttext}>{item.comments_count} Comments</Text>
              </View>
            </View> */}
          </View>
        </ScrollView>
        {modal ? <ImgViewer
                    setmodalFun={setmodalFun}
                    modal={modal}
                    images={images}
                    setImages={setImages}
                /> : null}
      </SafeAreaView>
      <Loader isLoading={app.loading} isAbsolute />
    </ImageBackground>
  );
};

export default LCRDetails;
