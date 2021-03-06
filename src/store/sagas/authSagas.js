import {put} from 'redux-saga/effects';
import {actionTypes, screenNames, urls} from '../../utilities/constants';
import {
  deleteUserDataFromLocal,
  extractUserDataFromDBResponse,
  getAPIError,
  getLocalUserData,
  setLocalUserData,
  showErrorAlert,
  showSuccessAlert,
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

function* SignupViaEmail({params}) {
  try {
    console.log('params sedning to signuop', params);

    let dataToBesend = {
      email: params.email,
      password: params.password,
      user_name: params.user_name,
      full_name: params.full_name,
      island: params.island,
      city: params.city,
      password_confirmation: params.password_confirmation,
      image: params.image,
      cml: params.cml,
    };

    console.log('dataToBesend', JSON.stringify(dataToBesend));
    const config = {
      url: urls.register_url,
      method: 'POST',
      data: params,
    };

    const response = yield request(config);
    console.log(response, 'getting response from signup api ');

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
        type: actionTypes.SIGNUP_WITH_EMAIL_SUCCEEDED,
        userData: loginUserData,
      });

      NavigationService.resetRoute(screenNames.HomeStack);
    } else {
      yield put({
        type: actionTypes.SIGNUP_WITH_EMAIL_FAIL,
      });
      showErrorAlert(response.data.message);
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));

    yield put({
      type: actionTypes.SIGNUP_WITH_EMAIL_FAIL,
    });
  }
}
function* change_PasswordSaga({params}) {
  try {
    console.log('params', params);

    let dataToBesend = {
      old_password: params.old_password,
      new_password: params.new_password,
      confirm_password: params.confirm_password,
    };

    console.log('dataToBesend', JSON.stringify(dataToBesend));
    const config = {
      url: urls.change_password,
      method: 'POST',
      data: dataToBesend,
      headers: {
        Authorization: `Bearer ${params && params.token}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'getting response from change pasword api ');

    if (response && response.data && response.data.status == 200) {
      yield put({
        type: actionTypes.CHANGE_PASSWORD_SUCCEEDED,
      });
      showSuccessAlert(response.data.message);
      yield put({
        type: actionTypes.SESSION_EXPIRE_REQUESTED,
      });
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.CHANGE_PASSWORD_FAIL,
    });
  }
}

function* forgotPasswordsaga({params}) {
  try {
    console.log('params', params);

    let dataToBesend = {
      email: params.email,
    };

    console.log('dataToBesend', JSON.stringify(dataToBesend));
    const config = {
      url: urls.forgotPassword,
      method: 'POST',
      data: dataToBesend,
      headers: {
        Authorization: `Bearer ${params && params.token}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'getting response from forgot pasword api ');

    if (response && response.status == 200) {
      yield put({
        type: actionTypes.FORGOT_PASSWORD_SUCCEEDED,
      });
      showSuccessAlert(response.data.message);
      yield put({
        type: actionTypes.SESSION_EXPIRE_REQUESTED,
      });
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.FORGOT_PASSWORD_FAIL,
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

function* getProfileSaga({params}) {
  try {
    console.log('params in get profile', params);

    const config = {
      url: urls.my_profile,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${params}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'getting response from get profile api ');

    const token = yield getLocalUserData();
    console.log(token, 'token coming>>>>>>>>>>>');

    if (response && response.data && response.data.status) {
      let updatedObj = response.data.data.user;
      updatedObj['access_token'] = token.access_token;

      console.log(
        updatedObj,
        'response.data.data.access_tokenupdatedObjupdatedObj',
      );

      const profileData = extractUserDataFromDBResponse(updatedObj);

      console.log('data to be saved is: ', profileData);

      yield setLocalUserData(profileData);
      yield put({
        type: actionTypes.GET_PROFILE_SUCCEEDED,
        payload: profileData,
      });
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.GET_PROFILE_FAIL,
    });
  }
}

function* editProfilesaga(params) {
  try {
    const result = yield getLocalUserData();
    let token = result?.access_token;

    console.log(token,'tokentoken');
    const config = {
      url: urls.editProfile,
      method: 'POST',
      data: params.params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = yield request(config);
    console.log(response, 'getting response from edit api ');

    if (response && response.data && response.data.success) {
      let updatedObj = response.data.data.user;
      updatedObj['access_token'] = token;

      console.log(
        updatedObj,
        'response.data.data.access_tokenupdatedObjupdatedObj',
      );

      const editProfiledata = extractUserDataFromDBResponse(updatedObj);

      console.log('data to be saved is: ', editProfiledata);

      yield setLocalUserData(editProfiledata);

      yield put({
        type: actionTypes.UPDATE_PROFILE_SUCCEEDED,
        payload: editProfiledata,
      });

      NavigationService.goBack();
    } else {
      yield put({
        type: actionTypes.UPDATE_PROFILE_FAIL,
      });
      showErrorAlert(response.data.message);
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));

    yield put({
      type: actionTypes.UPDATE_PROFILE_FAIL,
    });
  }
}

export {
  fetchAll,
  loginViaEmail,
  checkIfLoggedInSaga,
  logoutSaga,
  SignupViaEmail,
  sessionExpiredSaga,
  change_PasswordSaga,
  forgotPasswordsaga,
  getProfileSaga,
  editProfilesaga,
};
