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
            onPress={() => navigation.navigate('LCRDetails')}>
            <Image
              source={item.img}
              resizeMode="contain"
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
              <Text style={styles.dateStyle}>{item.fish}</Text>

              <Text style={styles.dateStyle}>{item.date}</Text>
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
            <TouchableOpacity
              style={{flexDirection: 'row', top: moderateScale(10)}}>
              <Image
                source={icons.like}
                style={{
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
                }}>
                {' '}
                0 likes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', top: moderateScale(10)}}>
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
                0 comments
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                top: moderateScale(10),
                height: moderateScale(25),
                width: layout.size.width / 8,
              }}
              onPress={onShare}
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
      style={{flex: 1, height: '100%'}}>
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
          titleStyle={{fontFamily: fonts.bold , color: colors.black1}}
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
    </ImageBackground>
  );
};

export default LCRlist;
