import React, {useState , useEffect} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SegmentedControl from 'rn-segmented-control';
import {moderateScale} from 'react-native-size-matters';
import {fonts, icons} from '../../../../assets';
import {Button} from '../../../components/common/Button';
import {Header} from '../../../components/common/Header';
import {strings} from '../../../localization';
import {colors} from '../../../utilities/constants';
import {layout} from '../../../utilities/layout';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import { questionsurvey } from '../../../store/actions';

let members = [
  {
    img: icons.signin_bg_ic,
    name: 'DO YOU CURRENTLU HOLD A COMMERCIAL MARINE LICENSE (CML) ?',
    date: 'September 27,2021 2:21 PM',
    text: 'Export to Photosharing',
    srno: 'Q 1:',
  },
  {
    img: icons.signin_bg_ic,
    srno: 'Q 2:',
    name: 'HAVE YOU READ THE PROPOSED AMENDMENTS IN BOTH BILLS ?',
    date: 'September 27,2021 2:21 PM',
    text: 'Export to Photosharing',
  },
  {
    img: icons.signin_bg_ic,
    srno: 'Q 3:',
    name: 'DO YOU SUPPOT THE INCLUSION OF REQUIRING CMLs FOR "GUIDE" SERVICES ?',
    date: 'September 27,2021 2:21 PM',
    text: 'Export to Photosharing',
  },
  {
    img: icons.signin_bg_ic,
    srno: 'Q 4:',
    name: 'DO YOU SUPPORT ESTABLISHING COMMERCIAL MARINE VESSEL LICENSES (CMVLs) ?',
    date: 'September 27,2021 2:21 PM',
    text: 'Export to Photosharing',
  },
];

const QuestionAnswer = ({navigation}) => {
  const [membersList, setMembersList] = useState([]);
  const [tabIndex, setTabIndex] = React.useState(1);
  const [theme, setTheme] = React.useState('LIGHT');

  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);
  console.log(auth, 'auth>>>>>>>>>>>>', app, 'app>>>>>>>>>>>>>>>>');
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('in useEfectof news>>>>>>>>>>>.');
    const unsubscribe = navigation.addListener('focus', () => {
      surevyfunc();
    });
    return unsubscribe;
  }, [navigation]);

  //get news taken list
  function surevyfunc() {
    let ob = {};
    ob.token = auth && auth?.userDetails?.access_token;
    dispatch
    // (questionsurvey(token));
   ( questionsurvey(ob, cb => {
      if (cb) {
        console.log(cb, 'in Questionpage  page>>>>>>>>>');
        if (cb?.data?.data) {
          let fishArr = cb?.data?.data?.questions;

          // fishArr.forEach(element => {
          //   element.imgUrl = cb && cb.data && cb.data.base_url;
          // });
          setMembersList(fishArr);
          // setTabIndex(fishArr)
        }
      }
    }),
   )
  }
  const toggleTheme = () =>
    theme === 'LIGHT' ? setTheme('DARK') : setTheme('LIGHT');
  const handleTabsChange = (index) => {
    console.log(index , 'mmmmmmmmmmmmmmmmmm');
    setTabIndex(index);
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
        activeOpacity={0.8}>
        {/* <View
              style={{
                
                flexDirection: 'row',
                flex: 0.9,
                backgroundColor:colors.black1
              }}>
              <Button
                style={{}}
              />
            </View> */}
        <View style={styles.viewStyle}>
          <View style={{alignSelf: 'center'}}>
            <View style={{flexDirection: 'row', bottom: moderateScale(10)}}>
              <Text style={styles.nameStyle1}>Q.{index + 1}</Text>
              <Text style={styles.nameStyle}>{item.question}</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
          <SegmentedControl
          tabs={['Yes', 'No']}
          onChange={() => {}}
          paddingVertical={6}
          segmentedControlBackgroundColor="#86c4fD"
          activeSegmentBackgroundColor="#0482f7"
          activeTextColor="white"
          textColor="black"
          width={layout.size.width - 50}
          containerStyle={{
            marginVertical: 5,
            top: 1,
            color: colors.primary,
          }}
          textStyle={{
            fontFamily: fonts.bold,
            fontSize: 20,
            color: colors.white1,
          }}
          currentIndex={tabIndex}
          onChange={handleTabsChange}
          theme={theme}
        />
         
        
        </View>
      </TouchableOpacity>
      <View
        style={{
          height: 2,
          width: layout.size.width / 1,
          backgroundColor: colors.white1,
        }}></View>
    </View>
  );

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
          title={strings.LokhaiSurvey}
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

export default QuestionAnswer;
