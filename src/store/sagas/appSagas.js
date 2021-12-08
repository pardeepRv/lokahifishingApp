import {put} from 'redux-saga/effects';
import {actionTypes, urls} from '../../utilities/constants';
import {getAPIError, showErrorAlert} from '../../utilities/helperFunctions';
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
};
