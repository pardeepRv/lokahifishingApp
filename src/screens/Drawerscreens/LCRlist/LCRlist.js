import React, { useEffect, useState } from 'react';

import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  Share,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import TimeAgo from 'react-native-timeago';
import { fonts, icons } from '../../../../assets';
import { Header } from '../../../components/common/Header';
import { colors, screenNames } from '../../../utilities/constants';
import { layout } from '../../../utilities/layout';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../../components/common/Loader';
import { addLikeUnlike, getlcrlist } from '../../../store/actions';

let members = [
  {
    img: icons.signin_bg_ic,
    fish: 'Omilu',
    name: 'kunal',
    date: 'September 27,2021 2:21 PM',
    text: 'Export to Photosharing',
  },
  {
    img: icons.signin_bg_ic,
    fish: 'Ahi',
    name: 'pardeep',
    date: 'September 27,2021 2:21 PM',
    text: 'Export to Photosharing',
  },
  {
    img: icons.signin_bg_ic,
    fish: 'Ahi',
    name: 'dhrmu',
    date: 'September 27,2021 2:21 PM',
    text: 'Export to Photosharing',
  },
  {
    img: icons.signin_bg_ic,
    fish: 'Omilu',
    name: 'ashutosh',
    date: 'September 27,2021 2:21 PM',
    text: 'Export to Photosharing',
  },
];

const LCRlist = ({ navigation }) => {
  const [membersList, setMembersList] = useState([]);
  const [allDropDown, setAllDropDown] = useState({});

  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);

  console.log(app, 'appp in lcrlist   page>>>>>>>>>>');
  console.log(auth, 'auth in lcrlist page >>>>>>>>>>');

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('coming in this on lcrlist page');
    const unsubscribe = navigation.addListener('focus', () => {
      getlcrlistfunc();
    });
    return unsubscribe;
  }, [navigation]);

  function getlcrlistfunc() {
    let token = auth && auth?.userDetails?.access_token;

    dispatch(
      getlcrlist(token, cb => {
        if (cb) {
          console.log(cb, 'callback list arr>>>>>>>>>>');
          if (cb?.data?.data) {
            let updatedLcrList = cb?.data?.data?.List;
            updatedLcrList.reverse();
            setMembersList(updatedLcrList);
            setAllDropDown(cb?.data?.dropdowns);
          }
        }
      }),
    );
  }

  const onShare = async (imgUrl) => {
    console.log(imgUrl,'link');
    try {
      const result = await Share.share({
        title: 'Lokahi fishing',
        // message: 'Sharing from lokahi',
        url: imgUrl
      });
      console.log(result, 'result on share >>>>>>>>>>>>>>>>>');
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  // /like dislike
  const likeAdded = lcr_id => {
    let obj = {};

    obj.token = auth && auth?.userDetails?.access_token;
    obj.lcr_id = lcr_id;
    obj.user_id = auth && auth?.userDetails?.id;

    dispatch(
      addLikeUnlike(obj, cb => {
        if (cb) {
          console.log(cb, 'callback list like arr>>>>>>>>>>');
          if (cb?.data?.status) {
            getlcrlistfunc();
          }
        }
      }),
    );
  };

  const _renderView = ({ item, index }) => (
    <View style={{ flex: 1 }}>
      <View
        style={[
          styles.listView,
          {
            backgroundColor: colors.secondry,
          },
        ]}
        activeOpacity={0.8}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: colors.transparent,
          }}>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('PhotoSharingPost')}
            style={{
              backgroundColor: colors.lightTransparent,
              borderRadius: 8,
              height: moderateScale(25),
              width: layout.size.width / 2.2,
              alignSelf: 'flex-end',
              alignItems:'center',
            }}>
            <Text style={styles.sharingtext}>
              {strings.exporttophotosharing}
            </Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            style={styles.viewStyle}
            onPress={() =>
              navigation.navigate(screenNames.LCRDetails, {
                item: item,
                allDropDown: allDropDown,
              })
            }>
            <Image
              // source={item.user.profile_picture}
              source={{
                // uri: item && item.user && item.user.profile_picture,
                // uri: `https://server3.rvtechnologies.in/LokahiFishing_Admin/public/LCR_images/user_fishes/${item.image}`,
                uri: `http://admin.lokahifishing.com/LCR_images/user_fishes/${item.image}`,

              }}
              resizeMode="cover"
              style={{
                height: moderateScale(100),
                width: moderateScale(100),
                backgroundColor: colors.lightTransparent,
                borderRadius: 50,
              }}
            />
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Text style={styles.nameStyle}>{item?.user?.user_name}</Text>
              <Text style={styles.dateStyle}>{item?.fish?.title}</Text>

              {/* <Text style={styles.dateStyle}>{item.date}</Text> */}
              <TimeAgo style={styles.dateStyle} time={item?.created_at} />
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignSelf: 'center',
                top: 5,
              }}>
              <Image source={icons.ic_rightArrow} style={styles.rightArrow} />
            </View>
          </TouchableOpacity>
          <View style={styles.viewStyle}>
            <View style={{ flexDirection: 'row', top: moderateScale(10) }}>
              {item && item.lcr_liked ? (
                <TouchableOpacity style={{}} onPress={() => likeAdded(item.id)}>
                  <Image
                    source={icons.like_me}
                    style={{
                      height: 25,
                      width: 25,
                    }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={{}} onPress={() => likeAdded(item.id)}>
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

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Like', { lcr_id: item.id , list : '1'});
                }}>
                <Text
                  style={{
                    fontFamily: fonts.semiBold,
                    fontSize: moderateScale(15),   
                    color: colors.white1,
                  }}>
                  {' '}
                  {item.likes_count} likes
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Comment', { lcr_id: item.id  , list : '1'});
              }}
              style={{ flexDirection: 'row', top: moderateScale(10)}}>
              <Image
                source={icons.photoComment}
                style={{
                  tintColor: colors.white1,
                }}
              />

              <Text
                style={{
                  fontFamily: fonts.semiBold,
                  fontSize: moderateScale(15),
                  color: colors.white1,
                }}>
                {' '}
                {item.comments_count} comments
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                top: moderateScale(10),
                height: moderateScale(25),
                width: layout.size.width / 8,
              }}
              onPress={() => onShare(`https://server3.rvtechnologies.in/LokahiFishing_Admin/public/LCR_images/user_fishes/${item.image}`)}
              title="Share">
              <Image
                source={icons.sharearrow}
                style={{
                  height: 25,
                  width: 25,
                  alignSelf: 'center',
                  tintColor: colors.white1,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={icons.LeaderBoard1}
      style={{ flex: 1, height: '100%' }}>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <Header
          containerStyle={{
            backgroundColor: 'transparent',
            height: moderateScale(60),
          }}
          title={'Recent Local Catches'}
          titleStyle={{ fontFamily: fonts.bold, color: colors.black1 }}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.black1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />

        <FlatList
          extraData={membersList}
          data={membersList}
          renderItem={_renderView}
          keyExtractor={(item, index) => 'key' + index}
          ListHeaderComponent={() =>
            !membersList.length ? (
              <Text style={styles.nomatch}>No Match found</Text>
            ) : null
          }
        />
      </SafeAreaView>
      <Loader isLoading={app.loading} isAbsolute />
    </ImageBackground>
  );
};

export default LCRlist;
