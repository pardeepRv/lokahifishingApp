import {takeLatest} from 'redux-saga/effects';
import {actionTypes} from '../../utilities/constants';
import {
  change_PasswordSaga,
  checkIfLoggedInSaga,
  editProfilesaga,
  fetchAll,
  forgotPasswordsaga,
  getProfileSaga,
  loginViaEmail,
  logoutSaga,
  sessionExpiredSaga,
  SignupViaEmail,
} from './authSagas';
import {getfriendlistsaga, getfriendsaga, respondRequestsaga} from './userSaga';

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

  // //user sagas
  yield takeLatest(actionTypes.GET_FRIEND_REQUESTED, getfriendsaga);
  yield takeLatest(actionTypes.RESPOND_FRIEND_REQUESTED, respondRequestsaga);
  yield takeLatest(actionTypes.GET_FRIEND_LIST_REQUESTED, getfriendlistsaga);


  // //app sagas
  // yield takeLatest(actionTypes.SEARCH_ARTIST_REQUESTED, getSearchSaga);
}
