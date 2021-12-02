import {takeLatest} from 'redux-saga/effects';
import {actionTypes} from '../../utilities/constants';
import {getNewsSaga, getvediosaga} from './appSagas';
import {
  change_PasswordSaga,
  checkIfLoggedInSaga,
  editboatsaga,
  editProfilesaga,
  fetchAll,
  forgotPasswordsaga,
  getProfileSaga,
  loginViaEmail,
  logoutSaga,
  sessionExpiredSaga,
  SignupViaEmail,
} from './authSagas';
import {
  getfriendlistsaga,
  getfriendsaga,
  respondRequestsaga,
  editcontactsaga,
} from './userSaga';

export default function* rootSaga() {
  //auth sagas
  yield takeLatest(actionTypes.FETCH_DATA_REQUESTED, fetchAll);
  yield takeLatest(actionTypes.LOGIN_WITH_EMAIL_REQUESTED, loginViaEmail);
  yield takeLatest(actionTypes.SIGNUP_WITH_EMAIL_REQUESTED, SignupViaEmail);
  yield takeLatest(actionTypes.CHECKED_IF_LOGGED_IN, checkIfLoggedInSaga);
  yield takeLatest(actionTypes.LOGOUT_REQUESTED, logoutSaga);
  yield takeLatest(actionTypes.SESSION_EXPIRE_REQUESTED, sessionExpiredSaga);
  yield takeLatest(actionTypes.CHANGE_PASSWORD_REQUESTED, change_PasswordSaga);
  yield takeLatest(actionTypes.FORGOT_PASSWORD_REQUESTED, forgotPasswordsaga);
  yield takeLatest(actionTypes.GET_PROFILE_REQUESTED, getProfileSaga);
  yield takeLatest(actionTypes.UPDATE_PROFILE_REQUESTED, editProfilesaga);
  yield takeLatest(actionTypes.UPDATE_EDIT_BOAT_INFO_REQUESTED, editboatsaga);

  // //user sagas
  yield takeLatest(actionTypes.GET_FRIEND_REQUESTED, getfriendsaga);
  yield takeLatest(actionTypes.RESPOND_FRIEND_REQUESTED, respondRequestsaga);
  yield takeLatest(actionTypes.GET_FRIEND_LIST_REQUESTED, getfriendlistsaga);
  yield takeLatest(actionTypes.UPDATE_EDIT_CONTACT_REQUESTED, editcontactsaga);

  // //app sagas
  yield takeLatest(actionTypes.GET_VIDEO_REQUESTED, getvediosaga);
  yield takeLatest(actionTypes.GET_NEWS_REQUESTED, getNewsSaga);
}
