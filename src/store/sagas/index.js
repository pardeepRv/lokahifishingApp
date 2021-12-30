import {takeLatest} from 'redux-saga/effects';
import {actionTypes} from '../../utilities/constants';
import {
  addcommentphotodharingsaga,
  addCommentSaga,
  addLikeInphotoshareSaga,
  addLikeInSaga,
  commentListLcr,
  commentListphotoharing,
  getAllFishesSaga,
  getimprtantlinks,
  getLcrFirstsaga,
  getlcrlistsaga,
  getLcrSecondsaga,
  getLcrThirdsaga,
  getleaderboardfishlist,
  getmemberlist,
  getMethodsaga,
  getNewsSaga,
  getPositionSaga,
  getSignsSaga,
  getsurveyquestion,
  gettermsconditionsaga,
  gettimeline,
  gettournamentlistingsaga,
  getvediosaga,
  getWeaherSaga,
  leaderboardfiltersaga,
  leaderboardrankingsaga,
  likesListLcr,
  likesphotosharinglist,
  postmemberlistsaga,
  postquestioninarry,
  savelcrreport,
  savephotosharingsaga,
  saveVideosaga,
  sendfriendrequestsaga,
  unblockusersaga,
  UpdateLcrReportsaga,
} from './appSagas';
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
  editcontactsaga,
  getfriendlistsaga,
  getfriendsaga,
  respondRequestsaga,
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
  yield takeLatest(actionTypes.GET_SIGNS_REQUESTED, getSignsSaga);
  yield takeLatest(actionTypes.GET_POSITION_REQUESTED, getPositionSaga);
  yield takeLatest(actionTypes.GET_LCR_FIRST_REQUESTED, getLcrFirstsaga);
  yield takeLatest(actionTypes.GET_LCR_SECOND_REQUESTED, getLcrSecondsaga);
  yield takeLatest(actionTypes.GET_LCR_THIRD_REQUESTED, getLcrThirdsaga);
  yield takeLatest(actionTypes.GET_FISHES_REQUESTED, getAllFishesSaga);
  yield takeLatest(actionTypes.GET_WEATHER_REQUESTED, getWeaherSaga);
  yield takeLatest(actionTypes.GET_METHOD_REQUESTED, getMethodsaga);
  yield takeLatest(actionTypes.SAVE_LCR_REPORT_REQUESTED, savelcrreport);
  yield takeLatest(actionTypes.LCR_LIST_REQUESTED, getlcrlistsaga);
  yield takeLatest(
    actionTypes.UPDATE_LCR_REPORT_REQUESTED,
    UpdateLcrReportsaga,
  );
  yield takeLatest(actionTypes.ADD_COMMENT_REQUESTED, addCommentSaga);
  yield takeLatest(actionTypes.GET_LCR_COMMENTS_REQUESTED, commentListLcr);
  yield takeLatest(actionTypes.GET_LCR_LIKES_REQUESTED, likesListLcr);
  yield takeLatest(actionTypes.ADD_LCR_LIKE_REQUESTED, addLikeInSaga);
  yield takeLatest(actionTypes.SAVE_VIDEO_REQUESTED, saveVideosaga);
  yield takeLatest(actionTypes.SAVE_PHOTO_SHARING_REQUESTED, savephotosharingsaga);
  yield takeLatest(actionTypes.TIMELINE_LIST_REQUESTED, gettimeline);
  yield takeLatest(actionTypes.PHOTOSHARE_ADDLIKE_REQUESTED, addLikeInphotoshareSaga);
  yield takeLatest(actionTypes.PHOTO_SHARE_LIKES_REQUESTED, likesphotosharinglist);
  yield takeLatest(actionTypes.PHOTO_ADDCOMMENT_REQUESTED, addcommentphotodharingsaga);
  yield takeLatest(actionTypes.PHOTOSHARE_COMMENT_LIST_REQUESTED,commentListphotoharing );
  yield takeLatest(actionTypes.LEADERBOARD_FISH_LIST_REQUESTED,getleaderboardfishlist );
  yield takeLatest(actionTypes.LEADERBOARD_RANKING_REQUESTED,leaderboardrankingsaga );
  yield takeLatest(actionTypes.LEADERBOARD_FILTER_REQUESTED,leaderboardfiltersaga );
  yield takeLatest(actionTypes.TOURNAMENT_LISTING_REQUESTED, gettournamentlistingsaga);
  yield takeLatest(actionTypes.TERMS_AND_CONDITION_REQUESTED, gettermsconditionsaga);
  yield takeLatest(actionTypes.MEMBER_LISTING_REQUESTED, getmemberlist);
  yield takeLatest(actionTypes.SEND_FRIEND_REQUESTS_REQUESTED, sendfriendrequestsaga);
  yield takeLatest(actionTypes.UNBLOCK_USER_REQUESTED, unblockusersaga);
  yield takeLatest(actionTypes.MEMBER_LOADMORE_REQUESTED, postmemberlistsaga);
  yield takeLatest(actionTypes.IMPORTANT_LINKS_REQUESTED, getimprtantlinks);
  yield takeLatest(actionTypes.SURVEY_QUESTION_REQUESTED, getsurveyquestion);
  yield takeLatest(actionTypes.SAVE_SURVEY_QUESTION_REQUESTED, postquestioninarry);

}
