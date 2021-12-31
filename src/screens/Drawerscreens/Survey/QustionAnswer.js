import React, { useEffect, useState } from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import SegmentedControl from 'rn-segmented-control';
import { fonts, icons } from '../../../../assets';
import { Loader } from '../../../components/common';
import { Header } from '../../../components/common/Header';
import { strings } from '../../../localization';
import { postsurvey, questionsurvey } from '../../../store/actions';
import { colors } from '../../../utilities/constants';
import { layout } from '../../../utilities/layout';
import styles from './styles';

const QuestionAnswer = ({ navigation }) => {
  const [questionList, setquestionList] = useState([]);
  const [tabIndex, setTabIndex] = useState(1);

  let auth = useSelector(state => state.auth);
  let app = useSelector(state => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('in useEfectof ques>>>>>>>>>>>.');
    const unsubscribe = navigation.addListener('focus', () => {
      surevyfunc();
    });
    return unsubscribe;
  }, [navigation]);

  function surevyfunc() {
    let ob = {};
    ob.token = auth && auth?.userDetails?.access_token;
    dispatch(
      questionsurvey(ob, cb => {
        if (cb) {
          console.log(cb, 'in Questionpage  page>>>>>>>>>');
          if (cb?.data?.data) {
            let questionArr = cb?.data?.data?.questions;

            // questionArr.forEach(element => {
            //   element.isAns = 0;
            // });
            console.log(questionArr, 'questionArrquestionArrquestionArr');
            setquestionList(questionArr);
          }
        }
      }),
    );
  }

  const handleTabsChange = (v, i) => {
    const tempArr = questionList.slice();

    if (tempArr[i].isAns == 1) {
      tempArr[i].isAns = 0;
    } else {
      tempArr[i].isAns = 1;
    }
    console.log(tempArr, 'tempArr arr');
    setquestionList(tempArr);
  };

  //hitting Api here
  const _postServey = () => {
    let selectedquestion = [];

    let updateArr = questionList;

    if (updateArr && updateArr.length > 0) {
      updateArr.forEach(element => {
        selectedquestion.push([element.id]);
        selectedquestion.forEach(e => {
          if (e && e.length < 2) {
            e.push(element.isAns)
            // if (element.isAns === 1) {
            //   e.push(element.isAns = 0)
            // } else {
            //   e.push(element.isAns = 1)
            // }
          }
        });
      });
    }

    console.log(selectedquestion, 'selectedquestion');
    let formData = new FormData();

    for (let i = 0; i < selectedquestion.length; i++) {
      console.log(selectedquestion[i], 'selectedquestion[i]');
      let index = selectedquestion[i];
      // formData.append(`userresponse[${i}]`, index[0]);
      formData.append(`userresponse[${index[0]}]`, index[1]);

    }

    // formData.append('userresponse', selectedquestion);
    // formData.append('userresponse1', 1);


     console.log(formData, 'consoling formadta');
    let token = auth && auth.userDetails.access_token;

    dispatch(postsurvey(formData, token));
  };

  const _renderView = ({ item, index }) => (
    <View style={{ flex: 1 }}>
      <View
        style={[
          styles.listView,
          {
            backgroundColor: colors.lightTransparent,
          },
        ]}
        activeOpacity={0.8}>
        <View style={styles.viewStyle}>
          <View style={{ alignSelf: 'center' }}>
            <View style={{ flexDirection: 'row', bottom: moderateScale(10) }}>
              <Text style={styles.nameStyle1}>Q.{index + 1}</Text>
              <Text style={styles.nameStyle}>{item.question}</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <SegmentedControl
            tabs={['No', 'Yes']}
            paddingVertical={6}
            segmentedControlBackgroundColor="#86c4fD"
            activeSegmentBackgroundColor="#0482f7"
            activeTextColor="white"
            textColor="black"
            width={layout.size.width - 50}
            containerStyle={{
              marginVertical: 5,
              top: 1,
            }}
            textStyle={{
              fontFamily: fonts.bold,
              fontSize: 20,
              color: colors.white1,
            }}
            currentIndex={item.isAns}
            onChange={() => handleTabsChange(item, index)}
          />
        </View>
      </View>
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
          title={strings.LokhaiSurvey}
          titleStyle={{ fontFamily: fonts.bold }}
          leftIconSource={icons.ic_back_white}
          leftButtonStyle={{
            tintColor: colors.white1,
          }}
          onLeftPress={() => {
            navigation.goBack();
          }}
          onRightPress={_postServey}
          rightIconSource={icons.post}
          rightIconStyle={{
            height: 30,
            width: 30,
            tintColor: colors.primary,
          }}
        />

        <FlatList
          extraData={questionList}
          data={questionList}
          renderItem={_renderView}
          keyExtractor={(item, index) => 'key' + index}
          ListHeaderComponent={() =>
            !questionList.length ? (
              <Text style={styles.nomatch}>No Match found</Text>
            ) : null
          }
        />
      </SafeAreaView>

      <Loader isAbsolute isLoading={app.loading} />
    </ImageBackground>
  );
};

export default QuestionAnswer;
