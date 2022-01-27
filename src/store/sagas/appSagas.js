import { put } from 'redux-saga/effects';
import * as NavigationService from '../../store/NavigationService';
import { actionTypes, screenNames, urls } from '../../utilities/constants';
import {
  getAPIError,
  showErrorAlert,
  showSuccessAlert
} from '../../utilities/helperFunctions';
import { request } from '../../utilities/request';

function* fetchAll({ params }) {
  try {
    const config = {
      url: 'https://dog.ceo/api/breeds/image/random',
    };

    const response = yield request(config);
    yield put({
      type: actionTypes.FETCH_DATA_SUCCEEDED,
      url: response.data.message,
    });
  } catch (error) {
    yield put({
      type: actionTypes.FETCH_DATA_FAIL,
    });
  }
}

function* getvediosaga({ params }) {
  try {
    const config = {
      url: urls.videos,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${params}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'Video alll >>>>>> api ');

    if (response?.data?.status) {
      yield put({
        type: actionTypes.GET_VIDEO_SUCCEEDED,
        payload: response?.data?.data?.videos,
      });
    } else {
      yield put({
        type: actionTypes.GET_VIDEO_SUCCEEDED,
        payload: [],
      });
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.GET_VIDEO_FAIL,
    });
  }
}

function* getNewsSaga(params) {
  console.log(params, 'params in news api ');
  try {
    const config = {
      url: urls.news,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${params && params.payload}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'news Api response ');

    if (response?.data?.status) {
      yield put({
        type: actionTypes.GET_NEWS_SUCCEEDED,
      });
      params.cb(response);
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.GET_NEWS_FAIL,
    });
  }
}

function* getSignsSaga(params) {
  console.log(params, 'params in signs api ');
  try {
    const config = {
      url: urls.signs,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${params && params.payload}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'news signs response  >>>>>>>>>>>>>>>>>');

    if (response?.data?.status) {
      yield put({
        type: actionTypes.GET_SIGNS_SUCCEEDED,
        payload: response?.data?.data?.sign,
      });

      params.cb(response);
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.GET_SIGNS_FAIL,
    });
  }
}

function* getPositionSaga(params) {
  console.log(params, 'params in POSITION api ');
  try {
    const config = {
      url: urls.positions,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${params && params.payload}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'position  response ');

    if (response?.data?.status) {
      yield put({
        type: actionTypes.GET_POSITION_SUCCEEDED,
        payload: response?.data?.data?.position,
      });
      params.cb(response);
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.GET_POSITION_FAIL,
    });
  }
}

function* getLcrFirstsaga(params) {
  console.log(params, 'params in LCR api ');
  try {
    const config = {
      url: urls.lcr_first,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${params && params.payload}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'LCR  response ');

    if (response?.data?.status) {
      yield put({
        type: actionTypes.GET_LCR_FIRST_SUCCEEDED,
      });
      params.cb(response);
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.GET_LCR_FIRST_FAIL,
    });
  }
}

function* getLcrSecondsaga(params) {
  console.log(params, 'params in LCR second api ');
  try {
    const config = {
      url: `${urls.lcr_Second}/${params && params.payload && params.payload.first_id
        }`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${params && params.payload && params.payload.token
          }`,
      },
    };

    const response = yield request(config);
    console.log(response, 'LCR  response second');

    if (response?.data?.status) {
      yield put({
        type: actionTypes.GET_LCR_SECOND_SUCCEEDED,
      });
      params.cb(response);
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.GET_LCR_FIRST_FAIL,
    });
  }
}

function* getLcrThirdsaga(params) {
  console.log(params, 'params in LCR third api ');
  try {
    const config = {
      url: `${urls.lcr_third}/${params && params.payload && params.payload.first_id
        }/${params && params.payload && params.payload.second}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${params && params.payload && params.payload.token
          }`,
      },
    };

    const response = yield request(config);
    console.log(response, 'LCR  response lcr_third');

    if (response?.data?.status) {
      yield put({
        type: actionTypes.GET_LCR_THIRD_SUCCEEDED,
      });
      params.cb(response);
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.GET_LCR_THIRD_FAIL,
    });
  }
}

function* getAllFishesSaga(params) {
  console.log(params, 'in fish Api>>>>>>>>>>');
  try {
    let config = {};

    if (params && params.payload && params.payload.extraFish) {
      config = {
        url: `${urls.lcr_fishes}/${params && params.payload && params.payload.first_id
          }/${params && params.payload && params.payload.second}/${params && params.payload && params.payload.third
          }`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${params && params.payload && params.payload.token
            }`,
        },
      };
    } else {
      config = {
        url: `${urls.lcr_fishes}/${params && params.payload && params.payload.first_id
          }/${params && params.payload && params.payload.second}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${params && params.payload && params.payload.token
            }`,
        },
      };
    }

    const response = yield request(config);
    console.log(response, 'Fish response');

    if (response?.data?.status) {
      yield put({
        type: actionTypes.GET_FISHES_SUCCEEDED,
      });
      params.cb(response);
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.GET_FISHES_FAIL,
    });
  }
}

function* getWeaherSaga(params) {
  console.log(params, 'params in weahet api ');
  try {
    const config = {
      url: urls.weather,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${params && params.payload}`,
      },
    };
    const response = yield request(config);
    console.log(response, '<<<<<<<< weather response  >>>>>>>>>>>>>>>>>');

    if (response?.data?.status) {
      yield put({
        type: actionTypes.GET_WEATHER_SUCCEEDED,
        payload: response?.data?.data?.weather,
      });

      params.cb(response);
    }
    // if (response?.data) {
    //   yield put({
    //     type: actionTypes.GET_WEATHER_SUCCEEDED,
    //     payload: response?.data,
    //   });

    //   params.cb(response);
    // }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.GET_WEATHER_FAIL,
    });
  }
}

function* getMethodsaga(params) {
  console.log(params, 'params in signs api ');
  try {
    const config = {
      url: urls.method,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${params && params.payload}`,
      },
    };
    const response = yield request(config);
    console.log(response, '<<<<<<<< method response  >>>>>>>>>>>>>>>>>');

    let gettingArr = response?.data?.data?.category;

    gettingArr.forEach(element => {
      element.subcategory.forEach(e => {
        e.selected = false;
        e.methods.forEach(v => {
          v.isSelected = false;
        });
      });
    });

    console.log(gettingArr, 'gettingArrgettingArrgettingArrgettingArr');

    if (response?.data?.status) {
      yield put({
        type: actionTypes.GET_METHOD_SUCCEEDED,
        // payload: response?.data?.data?.category,
        payload: gettingArr,
      });

      params.cb(response);
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.GET_METHOD_FAIL,
    });
  }
}

function* savelcrreport(params) {
  console.log('params sedning to LCR', params);
  try {
    const config = {
      url: urls.save_lcr_report,
      method: 'POST',
      data: params && params.payload,
      headers: {
        Authorization: `Bearer ${params && params.cb}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'getting response from LCR api ');

    if (response?.data?.success) {
      yield put({
        type: actionTypes.SAVE_LCR_REPORT_SUCCEEDED,
      });
      showSuccessAlert(response?.data?.message);
      NavigationService.resetRoute(screenNames.HomeStack);
    } else {
      showErrorAlert(response?.data?.message);
      yield put({
        type: actionTypes.SAVE_LCR_REPORT_FAIL,
      });
    }
  } catch (error) {
    console.log(error, 'in Api error');
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.SAVE_LCR_REPORT_FAIL,
    });
  }
}
function* getlcrlistsaga(params) {
  console.log(params, 'params in signs api ');
  try {
    const config = {
      url: urls.lcr_list,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${params && params.payload}`,
      },
    };
    const response = yield request(config);
    console.log(response, '<<<<<<<< lcrlist response  >>>>>>>>>>>>>>>>>');

    if (response?.data?.success) {
      yield put({
        type: actionTypes.LCR_LIST_SUCCEEDED,
      });
      params.cb(response);
    } else {
      yield put({
        type: actionTypes.LCR_LIST_FAIL,
      });
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.LCR_LIST_FAIL,
    });
  }
}
function* UpdateLcrReportsaga(params) {
  console.log('params sedning to LCR', params);
  try {
    const config = {
      url: urls.update_lcr_report,
      method: 'POST',
      data: params && params.cb,
      headers: {
        Authorization: `Bearer ${params && params.payload}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'getting response from LCR api ');

    if (response?.data?.success) {
      yield put({
        type: actionTypes.UPDATE_LCR_REPORT_SUCCEEDED,
      });
      showSuccessAlert(response?.data?.message);
      NavigationService.resetRoute(screenNames.HomeStack);
    } else {
      showErrorAlert(response?.data?.message);
      yield put({
        type: actionTypes.UPDATE_LCR_REPORT_FAIL,
      });
    }
  } catch (error) {
    console.log(error, 'in Api error');
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.UPDATE_LCR_REPORT_FAIL,
    });
  }
}

function* addCommentSaga(params) {
  console.log('params in it>>>>>>>>>>', params);
  try {
    const config = {
      url: urls.comment_lcr,
      method: 'POST',
      data: params?.params,
      headers: {
        Authorization: `Bearer ${params && params.cb}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'getting response Add comment Api ');

    if (response && response.data && response.data.status) {
      yield put({
        type: actionTypes.ADD_COMMENT_SUCCEEDED,
      });
      showSuccessAlert(response?.data?.message);
      return NavigationService.goBack();
    }
  } catch (error) {
    console.log(error, 'coming in catch');
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.ADD_COMMENT_FAIL,
    });
  }
}

function* commentListLcr(params) {
  console.log('params in it>>>>>>>>>>', params);
  try {
    const config = {
      url: urls.lcr_comments_listing,
      method: 'POST',
      data: { lcr_id: params?.params?.lcr_id },
      headers: {
        Authorization: `Bearer ${params?.params?.token}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'getting response Add comment Api ');

    if (response && response.data && response.data.status) {
      yield put({
        type: actionTypes.GET_LCR_COMMENTS_SUCCEEDED,
      });
      return params.cb(response);
    }
  } catch (error) {
    console.log(error, 'coming in catch');
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.GET_LCR_COMMENTS_FAIL,
    });
  }
}

function* likesListLcr(params) {
  console.log('params in it>>>>>>>>>>', params);
  try {
    const config = {
      url: urls.lcr_likes_listing,
      method: 'POST',
      data: { lcr_id: params?.params?.lcr_id },
      headers: {
        Authorization: `Bearer ${params?.params?.token}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'getting response likes Api ');

    if (response && response.data && response.data.status) {
      yield put({
        type: actionTypes.GET_LCR_LIKES_SUCCEEDED,
      });
      return params.cb(response);
    }
  } catch (error) {
    console.log(error, 'coming in catch');
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.GET_LCR_LIKES_FAIL,
    });
  }
}

function* addLikeInSaga(params) {
  console.log('params in like', params);
  try {
    const config = {
      url: urls.lcr_addlike,
      method: 'POST',
      data: { lcr_id: params?.params?.lcr_id, user_id: params?.params?.user_id },
      headers: {
        Authorization: `Bearer ${params?.params?.token}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'getting response post likes Api ');

    if (response && response.data && response.data.status) {
      yield put({
        type: actionTypes.ADD_LCR_LIKE_SUCCEEDED,
      });
      params.cb(response);
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.ADD_LCR_LIKE_FAIL,
    });
  }
}

function* saveVideosaga(params) {
  try {
    const config = {
      url: urls.save_video,
      method: 'POST',
      data: params && params.params,
      headers: {
        Authorization: `Bearer ${params && params.cb}`,
      },
    };
    const response = yield request(config);

    if (response && response.data && response.data.success) {
      yield put({
        type: actionTypes.SAVE_VIDEO_SUCCEEDED,
      });
      showSuccessAlert(response?.data?.message);
      NavigationService.goBack();
    } else {
      showErrorAlert(response?.data?.message);
      yield put({
        type: actionTypes.SAVE_VIDEO_FAIL,
      });
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.SAVE_VIDEO_FAIL,
    });
  }
}

function* savephotosharingsaga(params) {
  console.log(
    params,
    'params in photo scren in photo sharing ???????????????????????',
  );
  try {
    const config = {
      url: urls.save_photo_sharing,
      method: 'POST',
      data: params && params.params,
      headers: {
        Authorization: `Bearer ${params && params.cb}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'response in api ?>>>>>>>>>>>>>>>>>>>>>>>>');
    if (response && response.data && response.data.success) {
      yield put({
        type: actionTypes.SAVE_PHOTO_SHARING_SUCCEEDED,
      });
      showSuccessAlert(response?.data?.message);
      NavigationService.goBack();
    } else {
      showErrorAlert(response?.data?.message);
      yield put({
        type: actionTypes.SAVE_PHOTO_SHARING_FAIL,
      });
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.SAVE_PHOTO_SHARING_FAIL,
    });
  }
}

function* gettimeline(params) {
  console.log(params, 'params in timelien api ');
  try {
    const config = {
      url: urls.timeline,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${params && params.params}`,
      },
    };
    const response = yield request(config);
    console.log(response, '<<<<<<<< timeline  response  >>>>>>>>>>>>>>>>>');

    if (response?.data?.success) {
      yield put({
        type: actionTypes.TIMELINE_LIST_SUCCEEDED,
      });
      params.cb(response);
    } else {
      yield put({
        type: actionTypes.TIMELINE_LIST_FAIL,
      });
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.TIMELINE_LIST_FAIL,
    });
  }
}

function* addLikeInphotoshareSaga(params) {
  console.log('params in photosharing like like', params);
  try {
    const config = {
      url: urls.photoshareaddlike,
      method: 'POST',
      data: {
        photoshare_id: params?.params?.photoshare_id,
        user_id: params?.params?.user_id,
      },
      headers: {
        Authorization: `Bearer ${params?.params?.token}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'getting response post likes Api ');

    if (response && response.data && response.data.status) {
      yield put({
        type: actionTypes.PHOTOSHARE_ADDLIKE_SUCCEEDED,
      });
      params.cb(response);
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.PHOTOSHARE_ADDLIKE_FAIL,
    });
  }
}
function* likesphotosharinglist(params) {
  console.log('params in it>>>>>>>>>>', params);
  try {
    const config = {
      url: urls.photoshare_like_list,
      method: 'POST',
      data: { photoshare_id: params?.params?.photoshare_id },
      headers: {
        Authorization: `Bearer ${params?.params?.token}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'getting response likes Api ');

    if (response && response.data && response.data.status) {
      yield put({
        type: actionTypes.PHOTO_SHARE_LIKES_SUCCEEDED,
      });
      return params.cb(response);
    }
  } catch (error) {
    console.log(error, 'coming in catch');
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.PHOTO_SHARE_LIKES_FAIL,
    });
  }
}

function* addcommentphotodharingsaga(params) {
  console.log('params in it photosharing comment >>>>>>>>>>', params);
  try {
    const config = {
      url: urls.photoshare_addcomment,
      method: 'POST',
      data: params?.params,
      headers: {
        Authorization: `Bearer ${params && params.cb}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'getting response Add comment Api ');

    if (response && response.data && response.data.status) {
      yield put({
        type: actionTypes.PHOTO_ADDCOMMENT_SUCCEEDED,
      });
      return showSuccessAlert(response?.data?.message);
    }
  } catch (error) {
    console.log(error, 'coming in catch');
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.PHOTO_ADDCOMMENT_FAIL,
    });
  }
}

function* commentListphotoharing(params) {
  console.log('params in it photo sharing list >>>>>>>>>>', params);
  try {
    const config = {
      url: urls.photoshare_comment_list,
      method: 'POST',
      data: { photoshare_id: params?.params?.photoshare_id },
      headers: {
        Authorization: `Bearer ${params?.params?.token}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'getting response Add comment Api ');

    if (response && response.data && response.data.status) {
      yield put({
        type: actionTypes.PHOTOSHARE_COMMENT_LIST_SUCCEEDED,
      });
      return params.cb(response);
    }
  } catch (error) {
    console.log(error, 'coming in catch');
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.PHOTOSHARE_COMMENT_LIST_FAIL,
    });
  }
}

function* getleaderboardfishlist(params) {
  console.log(params, 'params in leaderboard fish list api ');
  try {
    const config = {
      url: urls.leaderboard_fish_list,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${params && params.params && params.params.token
          }`,
      },
    };
    const response = yield request(config);
    console.log(
      response,
      '<<<<<<<< leader board list  response  >>>>>>>>>>>>>>>>>',
    );

    if (response?.data?.status) {
      yield put({
        type: actionTypes.LEADERBOARD_FISH_LIST_SUCCEEDED,
        payload: response?.data?.data?.leaderboardFishListing,
      });

      params.cb(response);
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.LEADERBOARD_FISH_LIST_FAIL,
    });
  }
}
function* leaderboardrankingsaga(params) {
  console.log('params in it>>>>>>>>>>', params);
  try {
    const config = {
      url: urls.leaderboard_ranking,
      method: 'POST',
      data: { fish_id: params?.params?.fish_id },
      headers: {
        Authorization: `Bearer ${params?.params?.token}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'getting response likes Api ');

    if (response && response.data && response.data.status) {
      yield put({
        type: actionTypes.LEADERBOARD_RANKING_SUCCEEDED,
        payload: response?.data?.data?.leaderboardRankingAnually,
      });
      return params.cb(response);
    }
  } catch (error) {
    console.log(error, 'coming in catch');
    // showErrorAlert(getAPIError(error));  //commented for personla use
    yield put({
      type: actionTypes.LEADERBOARD_RANKING_FAIL,
    });
  }
}

function* leaderboardfiltersaga(params) {
  console.log('params in it>>>>>>>>>>', params);
  try {
    const config = {
      url: urls.leaderboard_filter,
      method: 'POST',
      data: {
        fish_id: params?.params?.fish_id,
        month: params?.params?.month,
        year: params?.params?.year,
      },
      headers: {
        Authorization: `Bearer ${params?.params?.token}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'getting response leaderboard filter  Api ');

    if (response && response.data && response.data.status) {
      yield put({
        type: actionTypes.LEADERBOARD_FILTER_SUCCEEDED,
        payload: response?.data?.data?.leaderboardRankingAnually,
      });
      return params.cb(response);
    }
  } catch (error) {
    console.log(error, 'coming in catch');
    // showErrorAlert(getAPIError(error)); //commented for personla use
    yield put({
      type: actionTypes.LEADERBOARD_FILTER_FAIL,
    });
  }
}

function* gettournamentlistingsaga(params) {
  console.log(params, 'params in signs api ');
  try {
    const config = {
      url: urls.tournament_listing,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${params && params.params}`,
      },
    };
    const response = yield request(config);
    console.log(response, '<<<<<<<< tournament response  >>>>>>>>>>>>>>>>>');

    if (response?.data?.status) {
      yield put({
        type: actionTypes.TOURNAMENT_LISTING_SUCCEEDED,
      });
      params.cb(response);
    } else {
      yield put({
        type: actionTypes.TOURNAMENT_LISTING_FAIL,
      });
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.TOURNAMENT_LISTING_FAIL,
    });
  }
}

function* gettermsconditionsaga(params) {
  console.log(params, 'params in terms and condition api ');
  try {
    const config = {
      url: urls.terms_and_condition,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${params && params.params}`,
      },
    };
    const response = yield request(config);
    console.log(response, '<<<<<<<< terms and condition  response  >>>>>>>>>>>>>>>>>');

    if (response?.data?.status) {
      yield put({
        type: actionTypes.TERMS_AND_CONDITION_SUCCEEDED,
        payload: response?.data?.data?.page,
      });
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.TERMS_AND_CONDITION_FAIL,
    });
  }
}

function* getmemberlist(params) {
  console.log(params, 'params in members .....api ');
  try {
    const config = {
      url: urls.member_listing,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${params && params.params}`,
      },
    };
    const response = yield request(config);
    console.log(response, '<<<<<<<< memberlist response  >>>>>>>>>>>>>>>>>');

    if (response?.data?.status) {
      yield put({
        type: actionTypes.MEMBER_LISTING_SUCCEEDED,
        payload: response?.data?.data?.memberListing,
      });
      params.cb(response);
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.MEMBER_LISTING_FAIL,
    });
  }
}
function* sendfriendrequestsaga({ params }) {
  console.log('params in it>>>>>>>>>>', params);
  try {
    const config = {
      url: urls.send_friend_request,
      method: 'POST',
      data: params?.formData,
      headers: {
        Authorization: `Bearer ${params && params?.token}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'getting response from send friend request  api ');

    if (response && response.data && response.data.status) {
      yield put({
        type: actionTypes.SEND_FRIEND_REQUESTS_SUCCEEDED,
      });
      showSuccessAlert(response?.data?.message);
      NavigationService.goBack();
    }
  } catch (error) {
    console.log(error, 'coming in catch');
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.SEND_FRIEND_REQUESTS_FAIL,
    });
  }
}

function* unblockusersaga({ params }) {
  console.log('params in it>>>>>>>>>>', params);
  try {
    const config = {
      url: urls.unblock_user,
      method: 'POST',
      data: params?.formData,
      headers: {
        Authorization: `Bearer ${params && params?.token}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'getting response from send friend request  api ');

    if (response && response.data && response.data.status) {
      yield put({
        type: actionTypes.UNBLOCK_USER_SUCCEEDED,
      });
      showSuccessAlert(response?.data?.message);
      NavigationService.goBack();
    }
  } catch (error) {
    console.log(error, 'coming in catch');
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.UNBLOCK_USER_FAIL,
    });
  }
}
function* postmemberlistsaga(params) {
  console.log(params, 'params in members .....api ');
  try {
    const config = {
      url: urls.member_loadmore,
      method: 'POST',
      data: params?.params?.formData,
      headers: {
        Authorization: `Bearer ${params && params.params && params.params.token}`,
      },
    };
    const response = yield request(config);
    return console.log(response, '<<<<<<<< memberlist response  >>>>>>>>>>>>>>>>>');

    if (response?.data?.status) {
      yield put({
        type: actionTypes.MEMBER_LOADMORE_SUCCEEDED,
        payload: response?.data?.data?.memberListing,
      });
      params.cb(response);
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.MEMBER_LOADMORE_FAIL,
    });
  }
}

function* getimprtantlinks({ params }) {
  try {
    const config = {
      url: urls.important_links,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${params}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'important links  >>>>>> api ');

    if (response?.data?.status) {
      yield put({
        type: actionTypes.IMPORTANT_LINKS_SUCCEEDED,
        payload: response?.data?.data?.important_links,
      });
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.IMPORTANT_LINKS_FAIL,
    });
  }
}
function* getsurveyquestion(params) {
  console.log('params in it>>>>>>>>>>', params);

  try {
    const config = {
      url: urls.survey_questions,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${params && params.params && params.params.token}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'surevey imppppp   >>>>>> api ');

    if (response?.data?.status) {
      yield put({
        type: actionTypes.SURVEY_QUESTION_SUCCEEDED,
        payload: response?.data?.data?.questions,
      });
      params.cb(response);
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.SURVEY_QUESTION_FAIL,
    });
  }
}
function* postquestioninarry(params) {
  console.log('params in surbey>>>>>>>>>>', params);
  console.log(params?.params, 'params?.params?.formData');
  try {
    const config = {
      url: urls.save_survey_questions,
      method: 'POST',
      data: params?.params,
      headers: {
        Authorization: `Bearer ${params && params?.token}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'getting response from save servey api ');

    if (response && response.data && response.data.status) {
      yield put({
        type: actionTypes.SAVE_SURVEY_QUESTION_SUCCEEDED,
      });
      showSuccessAlert(response?.data?.message);
      NavigationService.goBack();

    } else {
      yield put({
        type: actionTypes.SAVE_SURVEY_QUESTION_FAIL,
      });
    }
  } catch (error) {
    console.log(error, 'coming in catch');
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.SAVE_SURVEY_QUESTION_FAIL,
    });
  }
}
export {
  fetchAll,
  getvediosaga,
  getNewsSaga,
  getSignsSaga,
  getPositionSaga,
  getLcrFirstsaga,
  getLcrSecondsaga,
  getLcrThirdsaga,
  getAllFishesSaga,
  getWeaherSaga,
  getMethodsaga,
  savelcrreport,
  getlcrlistsaga,
  UpdateLcrReportsaga,
  addCommentSaga,
  commentListLcr,
  likesListLcr,
  addLikeInSaga,
  saveVideosaga,
  savephotosharingsaga,
  gettimeline,
  addLikeInphotoshareSaga,
  likesphotosharinglist,
  addcommentphotodharingsaga,
  commentListphotoharing,
  getleaderboardfishlist,
  leaderboardrankingsaga,
  leaderboardfiltersaga,
  gettournamentlistingsaga,
  gettermsconditionsaga,
  getmemberlist,
  sendfriendrequestsaga,
  unblockusersaga,
  postmemberlistsaga,
  getimprtantlinks,
  getsurveyquestion,
  postquestioninarry
};
