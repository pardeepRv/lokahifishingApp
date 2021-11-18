import {put} from 'redux-saga/effects';
import {actionTypes, screenNames, urls} from '../../utilities/constants';
import {
  deleteUserDataFromLocal,
  extractUserDataFromDBResponse,
  getAPIError,
  getLocalUserData,
  setLocalUserData,
  showErrorAlert,
} from '../../utilities/helperFunctions';
import {request} from '../../utilities/request';
import * as NavigationService from '../NavigationService';

const languages = [
  {
    code: 'en',
    name: 'English',
    isRTL: false,
  },
  {
    code: 'ar',
    name: 'Arabic',
    isRTL: true,
  },
];

function* fetchAll({params}) {
  debugger;
  try {
    const config = {
      url: 'https://dog.ceo/api/breeds/image/random',
    };

    const response = yield request(config);
    console.log(response, 'getting response');
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

function* loginViaEmail({params}) {
  try {
    console.log('params', params);

    let dataToBesend = {
      email: params.email,
      password: params.password,
    };

    console.log('dataToBesend', JSON.stringify(dataToBesend));
    const config = {
      url: urls.login_url,
      method: 'POST',
      data: dataToBesend,
    };

    const response = yield request(config);
    console.log(response, 'getting response from login api ');

    if (response && response.data && response.data.success) {
      let updatedObj = response.data.data.user;
      updatedObj['access_token'] = response.data.data.access_token;

      console.log(
        updatedObj,
        'response.data.data.access_tokenupdatedObjupdatedObj',
      );

      const loginUserData = extractUserDataFromDBResponse(updatedObj);

      console.log('data to be saved is: ', loginUserData);

      yield setLocalUserData(loginUserData);

      yield put({
        type: actionTypes.LOGIN_WITH_EMAIL_SUCCEEDED,
        userData: loginUserData,
      });

      NavigationService.resetRoute(screenNames.HomeStack);
    } else {
      yield put({
        type: actionTypes.LOGIN_WITH_EMAIL_FAIL,
      });
      showErrorAlert(response.data.message);
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));

    yield put({
      type: actionTypes.LOGIN_WITH_EMAIL_FAIL,
    });
  }
}

function* checkIfLoggedInSaga() {
  try {
    const userData = yield getLocalUserData();
    console.log('userData', userData);
    if (!userData) {
      const error = 'User data not found';
      throw error;
    }

    yield put({
      type: actionTypes.LOGIN_WITH_EMAIL_SUCCEEDED,
      userData: userData,
    });
    NavigationService.resetRoute(screenNames.HomeStack);
  } catch (error) {
    yield put({type: actionTypes.SESSION_EXPIRED});
    console.log('checkIfLoggedIn error: ', error);
    // navigate(screenNames.AuthNavigator);
    NavigationService.resetRoute('authStack');
  }
}

function* logoutSaga() {
  debugger;
  try {
    const {token} = yield getLocalUserData();
    console.log(token, 'token coming>>>>>>>>>>>');
    if (token == undefined) {
      yield put({
        type: actionTypes.SESSION_EXPIRE_REQUESTED,
      });
    }
  } catch (error) {
    console.log('logout error', error);
    yield put({
      type: actionTypes.SESSION_EXPIRE_REQUESTED,
    });
  }
}

function* sessionExpiredSaga() {
  try {
    yield deleteUserDataFromLocal();
    NavigationService.resetRoute('authStack');
    yield put({type: actionTypes.SESSION_EXPIRED});
  } catch (error) {
    console.log('Logout user error: ', error);
    NavigationService.resetRoute('authStack');
    yield put({type: actionTypes.SESSION_EXPIRED});
  }
}

export {
  fetchAll,
  loginViaEmail,
  checkIfLoggedInSaga,
  logoutSaga,
  sessionExpiredSaga,
};
