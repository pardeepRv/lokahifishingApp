import {takeLatest, takeEvery} from 'redux-saga/effects';
import {actionTypes} from '../../utilities/constants';
import {
  checkIfLoggedInSaga,
  fetchAll,
  loginViaEmail,
  logoutSaga,
  sessionExpiredSaga,
  change_PasswordSaga
} from './authSagas';
import {getProfileSaga, updateProfileSaga, memberInfoSaga} from './userSaga';
import {
  getSearchSaga,
  getArtistProfileSaga,
  addLocationSaga,
  getAddressesOfuser,
  getCustomerBookingSaga,
  rescheduleBookingSaga,
  getBookingByServiceSaga,
  getUpcomingBookingMemberSaga,
  getHistoryBookingMemberSaga,
  acceptBookingSaga,
  getUpcomingBookingCustomerSaga,
  cancelBookingSaga,
  getMemberBookingSaga,
  applyPromocodeSaga,
  getServicesByCatagoryIdSaga,
  getAllCategoriesSaga,
  completeBookingSaga,
  startBookingSaga,
  getHistoryBookingCustomerSaga,
  getAllArtistByServiceIdSaga,
  getAllNotificationsSaga,
  changeColorHeaderCalenderSaga,
} from './appSagas';
import {checkIfLoggedIn} from '../actions';

export default function* rootSaga() {
  //auth sagas
  yield takeLatest(actionTypes.FETCH_DATA_REQUESTED, fetchAll);
  yield takeLatest(actionTypes.LOGIN_WITH_EMAIL_REQUESTED, loginViaEmail);
  yield takeLatest(actionTypes.CHECKED_IF_LOGGED_IN, checkIfLoggedInSaga);
  yield takeLatest(actionTypes.LOGOUT_REQUESTED, logoutSaga);
  yield takeLatest(actionTypes.SESSION_EXPIRE_REQUESTED, sessionExpiredSaga);
  yield takeLatest(actionTypes.CHANGE_PASSWORD_REQUESTED, change_PasswordSaga);
  // //user sagas
  // yield takeLatest(actionTypes.GET_PROFILE_REQUESTED, getProfileSaga);
  // yield takeLatest(actionTypes.UPDATE_PROFILE_REQUESTED, updateProfileSaga);
  // yield takeLatest(actionTypes.MEMBER_REGISTER_INFO_REQUESTED, memberInfoSaga);

  // //app sagas
  // yield takeLatest(actionTypes.SEARCH_ARTIST_REQUESTED, getSearchSaga);
  // yield takeLatest(actionTypes.GET_ARTIST_REQUESTED, getArtistProfileSaga);
  // yield takeLatest(actionTypes.ADD_LOCATION_REQUESTED, addLocationSaga);
  // yield takeLatest(actionTypes.GET_LOCATION_ADDED_BY_USER_REQUESTED, getAddressesOfuser);
  // yield takeLatest(actionTypes.GET_CUSTOMER_BOOKING_REQUESTED, getCustomerBookingSaga);
  // yield takeLatest(actionTypes.RESCHEDULE_BOOKING_REQUESTED, rescheduleBookingSaga);
  // yield takeLatest(actionTypes.GET_BOOKING_BY_SERVICE_REQUESTED, getBookingByServiceSaga);
  // yield takeLatest(actionTypes.GET_UPCOMING_BOOKING_MEMBER_REQUESTED, getUpcomingBookingMemberSaga);
  // yield takeLatest(actionTypes.GET_HISTORY_BOOKING_MEMBER_REQUESTED, getHistoryBookingMemberSaga);
  // yield takeLatest(actionTypes.ACCEPT_BOOKING_REQUESTED, acceptBookingSaga);
  // yield takeLatest(actionTypes.CANCEL_BOOKING_REQUESTED, cancelBookingSaga);
  // yield takeLatest(actionTypes.GET_UPCOMING_BOOKING_CUSTOMER_REQUESTED, getUpcomingBookingCustomerSaga);
  // yield takeLatest(actionTypes.GET_MEMBER_BOOKING_REQUESTED, getMemberBookingSaga);
  // yield takeLatest(actionTypes.APPLY_PROMO_REQUESTED, applyPromocodeSaga);
  // yield takeLatest(actionTypes.GET_SERVICES_BY_ID_REQUESTED, getServicesByCatagoryIdSaga);
  // yield takeLatest(actionTypes.GET_ALL_CATAGERY_REQUESTED, getAllCategoriesSaga);
  // yield takeLatest(actionTypes.MARK_COMPLETE_BOOKING_REQUESTED, completeBookingSaga);
  // yield takeLatest(actionTypes.MARK_START_BOOKING_REQUESTED, startBookingSaga);
  // yield takeLatest(actionTypes.GET_HISTORY_BOOKING_CUSTOMER_REQUESTED, getHistoryBookingCustomerSaga);
  // yield takeLatest(actionTypes.GET_ARTIST_BY_SERVICESID_REQUESTED, getAllArtistByServiceIdSaga);
  // yield takeLatest(actionTypes.GET_NOTIFICATIONS_REQUESTED, getAllNotificationsSaga);
  // yield takeLatest(actionTypes.CHANGE_COLOR_HEADER_CALENDER_REQUESTED, changeColorHeaderCalenderSaga);
}
