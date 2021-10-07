import { put, retry } from 'redux-saga/effects';
import { I18nManager, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import logger from '../../utilities/logger';
import * as NavigationService from '../NavigationService'

import { request } from '../../utilities/request';
import { actionTypes, urls, screenNames } from '../../utilities/constants';
import {
  showErrorAlert,
  getAPIError,
  setLocalUserData,
  getLocalUserData,
  extractUserDataFromDBResponse,
  deleteUserDataFromLocal,
  showSuccessAlert,
} from '../../utilities/helperFunctions';
import { getAllCatagories } from '../actions';
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

function* fetchAll({ params }) {
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

function* loginViaEmail({ params }) {
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

    if (
      response &&
      response.data &&
      response.data.success
    ) {
      let updatedObj = response.data.data.user;
      updatedObj['access_token'] = response.data.data.access_token;

      console.log(updatedObj,'response.data.data.access_tokenupdatedObjupdatedObj');

      const loginUserData = extractUserDataFromDBResponse(updatedObj);

      console.log('data to be saved is: ', loginUserData);

      yield setLocalUserData(loginUserData);

      yield put({
        type: actionTypes.LOGIN_WITH_EMAIL_SUCCEEDED,
        userData: loginUserData,
      });

      NavigationService.resetRoute(screenNames.HomeStack);
    }
    else {
      yield put({
        type: actionTypes.LOGIN_WITH_EMAIL_FAIL,
      });
      showErrorAlert(response.data.message)
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
    NavigationService.resetRoute('Home');

  } catch (error) {
    yield put({ type: actionTypes.SESSION_EXPIRED });
    console.log('checkIfLoggedIn error: ', error);
    // navigate(screenNames.AuthNavigator);
    NavigationService.resetRoute('Login');
  }
}

export { fetchAll, loginViaEmail, checkIfLoggedInSaga };
