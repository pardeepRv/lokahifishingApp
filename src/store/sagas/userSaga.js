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

    yield put({
      type: actionTypes.GET_FRIEND_SUCCEEDED,
      payload: [],
    });
  } catch (error) {
    showErrorAlert(getAPIError(error));
    yield put({
      type: actionTypes.GET_FRIEND_FAIL,
    });
  }
}

export {fetchAll, getfriendsaga};
