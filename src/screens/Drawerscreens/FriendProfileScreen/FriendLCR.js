import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView, StyleSheet, Text, View,
  TouchableOpacity
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import TimeAgo from 'react-native-timeago';
import { fonts, icons } from '../../../../assets';
import { colors, screenNames } from '../../../utilities/constants';



const FriendLCR = Props => {
  const [lcrList, setLcrList] = useState([]);
  const [allDropDown, setAllDropDown] = useState({});
  console.log(Props, 'props in friendLcr>>>>>>>>>>');
  const { item, lcrdata } = Props;
  console.log(item, lcrdata, 'friend lcr  ', 'item in friendLcr>>>>>>>>>>');
  console.log(lcrdata, 'friend lcr  ');

  useEffect(() => {
    setLcrList(lcrdata);
  }, []);

  const _renderView = ({ item, index }) => (
    <View
      style={[
        styles.listView,
        {
          backgroundColor: colors.secondry,
        },
      ]}
      activeOpacity={0.8
      } >
      <View style={styles.viewStyle}>
        <Image
          source={{
            uri: `https://server3.rvtechnologies.in/LokahiFishing_Admin/public/LCR_images/user_fishes/${item.image}`,
          }}
          style={{
            height: moderateScale(70),
            width: moderateScale(70),
            left: 10,
            backgroundColor: colors.secondry,
            borderRadius: 70 / 2,
            resizeMode: 'cover',
          }}
        />
        <View
          style={{
            justifyContent: 'center',
            left: 20,
            width: moderateScale(270),
          }}>
             <Text style={styles.nameStyle}  >
            {item?.fish?.title}
          </Text>
          <Text style={styles.nameStyle}  >
            Weight :{item.Fish_weight}
          </Text>
          <Text style={styles.dateStyle}>LCR posted :
                <TimeAgo
                time={item.LCR_DateTime}
              />
                  </Text>
         
          <Text style={styles.nameStyle}  >
            {item.Fish_weight}
          </Text>
        </View>
        </View>
        <View style={{  flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',}}>
            <View style={{ flexDirection: 'row', top: moderateScale(10) }}>
            {item && item.lcr_liked ? (
                <View style={{}} >
                  <Image
                    source={icons.like_me}
                    style={{
                      height: 25,
                      width: 25,
                    }}
                  />
                </View>
              ) : (
                <View style={{}} >
                  <Image
                    source={icons.like}
                    style={{
                      height: 25,
                      width: 25,
                      tintColor: colors.white1,
                    }}
                  />
                </View>
              )}
                <Text
                  style={{
                    fontFamily: fonts.semiBold,
                    fontSize: moderateScale(15),   
                    color: colors.white1,
                  }}>
                  {' '}
                  {item.likes_count} likes
                </Text>
            
            </View>
            <View
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
                {item.comment_count} comments
              </Text>
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
        <FlatList
          extraData={lcrList}
          data={lcrList}
          renderItem={_renderView}
          keyExtractor={(item, index) => 'key' + index}
          ListHeaderComponent={() =>
            !lcrList.length ? (
              <Text style={styles.nomatch}>No Match found</Text>
            ) : null
          }
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  sharingtext: {
    fontFamily: fonts.bold,
    fontSize: moderateScale(12),
    color: colors.primary,
    textAlign: 'center',
    top: 5,
  },

  nomatch: {
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: fonts.semiBold,
  },
  listView: {
    margin: moderateScale(12),
    flexDirection: 'column',
    paddingVertical: moderateScale(10),
    backgroundColor: colors.lightTransparent,
    borderRadius: moderateScale(27)
  },
  viewStyle: {
    flexDirection: 'row',
  },
  nameStyle: {
    fontFamily: fonts.semiBold,
    fontSize: moderateScale(16),
    color: colors.white1,


  },
  dateStyle: {
    fontFamily: fonts.semiBold,
    fontSize: moderateScale(14),
    color: colors.white1,
    paddingHorizontal: moderateScale(3),
  }
});
export default FriendLCR;
