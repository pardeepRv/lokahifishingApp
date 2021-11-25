import {put} from 'redux-saga/effects';
import {actionTypes, urls} from '../../utilities/constants';
import {
  getAPIError,
  showErrorAlert,
  showSuccessAlert,
} from '../../utilities/helperFunctions';
import {request} from '../../utilities/request';
import * as NavigationService from '../NavigationService';

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

function* getfriendsaga({params}) {
  try {
    const config = {
      url: urls.getfriend_requests,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${params}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'Frei req api ');

    if (response?.data?.status) {
      yield put({
        type: actionTypes.GET_FRIEND_SUCCEEDED,
        payload: response?.data?.data?.requests,
      });
    } else {
      yield put({
        type: actionTypes.GET_FRIEND_SUCCEEDED,
        payload: [],
      });
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.GET_FRIEND_FAIL,
    });
  }
}

function* respondRequestsaga({params}) {
  console.log('params in it>>>>>>>>>>', params);
  try {
    const config = {
      url: urls.respondtofriendrequest,
      method: 'POST',
      data: params?.formData,
      headers: {
        Authorization: `Bearer ${params && params.token}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'getting response from BLOCK OR ACCEPT api ');

    if (response && response.data && response.data.status) {
      yield put({
        type: actionTypes.RESPOND_FRIEND_SUCCEEDED,
      });
      return showSuccessAlert(response?.data?.message);
    }
  } catch (error) {
    console.log(error, 'coming in catch');
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.RESPOND_FRIEND_FAIL,
    });
  }
}

function* getfriendlistsaga({params}) {
    console.log(`params>>>>>>>`, params)
  try {
    const config = {
      url: urls.getfriend_list,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${params}`,
      },
    };
    const response = yield request(config);
    console.log(response, 'Freind list req api ');

    if (response?.data?.status) {
      yield put({
        type: actionTypes.GET_FRIEND_LIST_SUCCEEDED,
        payload: response?.data?.data?.friends,
      });
    } else {
      yield put({
        type: actionTypes.GET_FRIEND_LIST_SUCCEEDED,
        payload: [],
      });
    }
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.GET_FRIEND_LIST_FAIL,
    });
  }
}

function* editcontactsaga(params) {
    console.log(`params`, params);
  try {
    
    const config = {
      url: urls.edit_emergency_contacts,
      method: 'POST',
      data: params?.params?.formData,
      headers: {
        Authorization: `Bearer ${params?.params?.token}`,
      },
    };

    const response = yield request(config);
      console.log(response, 'emergency contacts  api ');

    if (response && response.data && response.data.success) {
      yield put({
        type: actionTypes.UPDATE_EDIT_CONTACT_SUCCEEDED,
      });
      showSuccessAlert(response.data.message);
    }
    NavigationService.navigate('MYprofile')
  } catch (error) {
    showErrorAlert(getAPIError(error));

    yield put({
      type: actionTypes.UPDATE_EDIT_CONTACT_FAIL,
    });
  }
}

export {
  fetchAll,
  getfriendsaga,
  respondRequestsaga,
  getfriendlistsaga,
  editcontactsaga,
};
