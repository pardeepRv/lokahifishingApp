import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import SegmentedControl from 'rn-segmented-control';
import {fonts, icons} from '../../../../assets';
import {Header} from '../../../components/common/Header';
import TextInputComp from '../../../components/common/TextInputComp';
import {colors} from '../../../utilities/constants';
import styles from './styles';

let members = [
  {
    img: icons.ic_LokahiLogo,
    username: 'princepardeepkmr',
    date: 'Member since 1 oct 2021',
    fullname:'Pardeep kumar'
  },
  {
    img: icons.ic_LokahiLogo,
    username: 'rv_kunal',
    date: 'Member since 2 oct 2021',
    fullname:'Kunal Chauhan'

  },
  {
    img: icons.ic_LokahiLogo,
    username: 'rvtechnologies',
    date: 'Member since 1 oct 2021',
    fullname:'Prince Pardeep'

  },
  {
    img: icons.ic_LokahiLogo,
    username: 'dev_pardeep',
    date: 'Member since 2 oct 2021',
    fullname:'New Name'

  },
];

const Friends = ({navigation}) => {
  const [membersList, setMembersList] = useState(members);
  const [searchMember, setSearchMember] = useState('');
  const [tabIndex, setTabIndex] = React.useState(0);
  const [tabAscDscIndex, settabAscDscIndex] = React.useState(0);

  const _renderView = ({item, index}) => (
    <TouchableOpacity
      style={[
        styles.listView,
        {
          backgroundColor: colors.white1//index % 2 == 0 ? '#3c264a' : '#553456',
        },
      ]}
      activeOpacity={0.8}>
      <View style={styles.viewStyle}>
        <Image
          source={icons.fish2}
          style={{
            height: moderateScale(70),
            width: moderateScale(70),
            borderRadius: moderateScale(40),
          }}
        />
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Text style={styles.nameStyle}>{item.username}</Text>
          <Text style={styles.dateStyle}>{item.date}</Text>
        </View>
      </View>
      <Image source={icons.ic_rightArrow} style={styles.rightArrow} />
    </TouchableOpacity>
  );

  const handleTabsChange = index => {
    setTabIndex(index);
  };

  const handleTabsChangeAscDsc = index => {
    settabAscDscIndex(index);
  };

  return (
    <ImageBackground
      source={icons.ic_signup_bg}
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
          title={'Members'}
          titleStyle={{fontFamily: fonts.bold}}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
        />

        <TextInputComp
          value={searchMember}
          placeholder={'Please enter something!'}
          labelTextStyle={{
            fontFamily: fonts.semiBold,
            fontSize: moderateScale(16),
            color: colors.white1,
          }}
          onChangeText={text => setSearchMember(text)}
        />

        <View
          style={{
            flexDirection: 'row',
          }}>
          <SegmentedControl
            tabs={['Username', 'Date Joined', 'Fullname']}
            paddingVertical={5}
            containerStyle={{
              marginVertical: 10,
            }}
            onChange={handleTabsChange}
            currentIndex={tabIndex}
            width={Dimensions.get('screen').width - 90}
            textStyle={{
              fontWeight: '300',
              fontSize: 14,
            }}
          />
          <SegmentedControl
            tabs={['Asc', 'Dsc']}
            paddingVertical={10}
            containerStyle={{
              marginVertical: 10,
            }}
            onChange={handleTabsChangeAscDsc}
            currentIndex={tabAscDscIndex}
            width={Dimensions.get('screen').width / 5}
            textStyle={{
              fontWeight: '300',
              fontSize: 14,
            }}
          />
        </View>

        {tabIndex == 0 ? (
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
        ) : tabIndex == 2 ? (
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
        ) : null}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Friends;
