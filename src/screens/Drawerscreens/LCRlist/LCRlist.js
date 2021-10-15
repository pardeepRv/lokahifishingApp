import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Share,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../assets';
import {Button} from '../../../components/common/Button';
import {Header} from '../../../components/common/Header';
import {strings} from '../../../localization';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';
import PhotoSharingPost from '../PhotoSharingPost/PhotoSharingPost';
import styles from './styles';

let members = [
  {
    img: icons.signin_bg_ic,
    name: 'Omilu',
    date: 'September 27,2021 2:21 PM',
    text: 'Export to Photosharing',
  },
  {
    img: icons.signin_bg_ic,

    name: 'Ahi',
    date: 'September 27,2021 2:21 PM',
    text: 'Export to Photosharing',
  },
  {
    img: icons.signin_bg_ic,

    name: 'Ahi',
    date: 'September 27,2021 2:21 PM',
    text: 'Export to Photosharing',
  },
  {
    img: icons.signin_bg_ic,

    name: 'Omilu',
    date: 'September 27,2021 2:21 PM',
    text: 'Export to Photosharing',
  },
];

const LCRlist = ({navigation}) => {
  const [membersList, setMembersList] = useState(members);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
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

  const _renderView = ({item, index}) => (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={[
          styles.listView,
          {
            backgroundColor: colors.lightTransparent,
          },
        ]}
        onPress={() => navigation.navigate('LCRDetails')}
        activeOpacity={0.8}>
        <View
          style={{
            flexDirection: 'column',
            backgroundColor: colors.transparent,
          }}>
          <TouchableOpacity
           onPress={() => navigation.navigate('PhotoSharingPost')}
            style={{
              backgroundColor: colors.lightTransparent,
              borderRadius: 8,
              height: moderateScale(25),
              width: layout.size.width /2.2,
              alignSelf: 'flex-end',
              right:2
            }}>
            <Text style={styles.sharingtext}>
              {strings.exporttophotosharing}
            </Text>
          </TouchableOpacity>

          <View style={styles.viewStyle}>
            <Image
              source={item.img}
              resizeMode='cover'
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
              <Text style={styles.nameStyle}>{item.name}</Text>
              <Text style={styles.dateStyle}>{item.date}</Text>
            </View>

            <Image source={icons.ic_rightArrow} style={styles.rightArrow} />
          </View>
          <View style={styles.viewStyle}>
            <TouchableOpacity style={{flexDirection:'row', top:moderateScale(10),}}>
              <Image
                source={icons.like}
                style={{
                  // alignSelf:'flex-end',
                  height: 25,
                  width: 25,
                  tintColor: colors.white1,
                }}
              />
              <Text
                style={{
                  fontFamily: fonts.semiBold,
                  fontSize: moderateScale(15),
                  color: colors.white1,
                  paddingHorizontal: moderateScale(8),
                }}>
                {' '}
                0 likes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', top:moderateScale(10), left :moderateScale(26),}}>
              <Image
                source={icons.photoComment}
                style={{
                  // alignSelf:'flex-end',
                  height: 25,
                  width: 25,
                  tintColor: colors.white1,
                }}
              />
               <Text
                style={{
                  fontFamily: fonts.semiBold,
                  fontSize: moderateScale(15),
                  color: colors.white1,
                  paddingHorizontal: moderateScale(8),
                }}>
                {' '}
                0 comments
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={{ top:moderateScale(10),left:moderateScale(48)}}
            onPress={onShare} title="Share">
              <Image
                source={icons.sharearrow}
                style={{
                  // alignSelf:'flex-end',
                  height: 25,
                  width: 25,
                  tintColor: colors.white1,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <ImageBackground
      source={icons.ic_signup_bg}
      style={{flex: 1, height: '100%' }}>
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
          titleStyle={{fontFamily: fonts.bold}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
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
    </ImageBackground>
  );
};

export default LCRlist;
