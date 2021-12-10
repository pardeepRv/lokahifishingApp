import {put} from 'redux-saga/effects';
import {actionTypes, screenNames, urls} from '../../utilities/constants';
import {
  getAPIError,
  showErrorAlert,
  showSuccessAlert,
} from '../../utilities/helperFunctions';
import * as NavigationService from '../../store/NavigationService';

import {request} from '../../utilities/request';

function* fetchAll({params}) {
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

function* getvediosaga({params}) {
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

function* getNewsSaga({params}) {
  console.log(params, 'params in news api ');
  try {
    const config = {
      url: urls.news,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${params}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'news Api response ');

    if (response?.data?.status) {
      yield put({
        type: actionTypes.GET_NEWS_SUCCEEDED,
        payload: response?.data?.data?.news,
      });
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
      url: `${urls.lcr_Second}/${
        params && params.payload && params.payload.first_id
      }`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${
          params && params.payload && params.payload.token
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
      url: `${urls.lcr_third}/${
        params && params.payload && params.payload.first_id
      }/${params && params.payload && params.payload.second}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${
          params && params.payload && params.payload.token
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
        url: `${urls.lcr_fishes}/${
          params && params.payload && params.payload.first_id
        }/${params && params.payload && params.payload.second}/${
          params && params.payload && params.payload.third
        }`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${
            params && params.payload && params.payload.token
          }`,
        },
      };
    } else {
      config = {
        url: `${urls.lcr_fishes}/${
          params && params.payload && params.payload.first_id
        }/${params && params.payload && params.payload.second}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${
            params && params.payload && params.payload.token
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
  console.log(params, 'params in signs api ');
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

    if (response?.data?.status) {
      yield put({
        type: actionTypes.GET_METHOD_SUCCEEDED,
        payload: response?.data?.data?.category,
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
};
