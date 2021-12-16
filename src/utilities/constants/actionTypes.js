const actionTypes = {
  FETCH_DATA_REQUESTED: 'FETCH_DATA_REQUESTED',
  FETCH_DATA_SUCCEEDED: 'FETCH_DATA_SUCCEEDED',
  FETCH_DATA_FAIL: 'FETCH_DATA_FAIL',

  LOGIN_WITH_EMAIL_REQUESTED: 'LOGIN_WITH_EMAIL_REQUESTED',
  LOGIN_WITH_EMAIL_SUCCEEDED: 'LOGIN_WITH_EMAIL_SUCCEEDED',
  LOGIN_WITH_EMAIL_FAIL: 'LOGIN_WITH_EMAIL_FAIL',

  LOGIN_WITH_PHONE_REQUESTED: 'LOGIN_WITH_PHONE_REQUESTED',
  LOGIN_WITH_PHONE_SUCCEEDED: 'LOGIN_WITH_PHONE_SUCCEEDED',
  LOGIN_WITH_PHONE_FAIL: 'LOGIN_WITH_PHONE_FAIL',

  SIGNUP_WITH_EMAIL_REQUESTED: 'SIGNUP_WITH_EMAIL_REQUESTED',
  SIGNUP_WITH_EMAIL_SUCCEEDED: 'SIGNUP_WITH_EMAIL_SUCCEEDED',
  SIGNUP_WITH_EMAIL_FAIL: 'SIGNUP_WITH_EMAIL_FAIL',

  LOGIN_WITH_FB_REQUESTED: 'LOGIN_WITH_FB_REQUESTED',
  LOGIN_WITH_FB_SUCCEEDED: 'LOGIN_WITH_FB_SUCCEEDED',
  LOGIN_WITH_FB_FAIL: 'LOGIN_WITH_FB_FAIL',

  GET_PROFILE_REQUESTED: 'GET_PROFILE_REQUESTED',
  GET_PROFILE_SUCCEEDED: 'GET_PROFILE_SUCCEEDED',
  GET_PROFILE_FAIL: 'GET_PROFILE_FAIL',

  UPDATE_PROFILE_REQUESTED: 'UPDATE_PROFILE_REQUESTED',
  UPDATE_PROFILE_SUCCEEDED: 'UPDATE_PROFILE_SUCCEEDED',
  UPDATE_PROFILE_FAIL: 'UPDATE_PROFILE_FAIL',

  UPDATE_EDIT_BOAT_INFO_REQUESTED: 'UPDATE_EDIT_BOAT_INFO_REQUESTED',
  UPDATE_EDIT_BOAT_INFO_SUCCEEDED: 'UPDATE_EDIT_BOAT_INFO_SUCCEEDED',
  UPDATE_EDIT_BOAT_INFO_FAIL: 'UPDATE_EDIT_BOAT_INFO_FAIL',

  UPDATE_EDIT_CONTACT_REQUESTED: 'UPDATE_EDIT_CONTACT_REQUESTED',
  UPDATE_EDIT_CONTACT_SUCCEEDED: 'UPDATE_EDIT_CONTACT_SUCCEEDED',
  UPDATE_EDIT_CONTACT_FAIL: 'UPDATE_EDIT_CONTACT_FAIL',

  VERIFY_PHONE_REQUESTED: 'VERIFY_PHONE_REQUESTED',
  VERIFY_PHONE_SUCCEEDED: 'VERIFY_PHONE_SUCCEEDED',
  VERIFY_PHONE_FAIL: 'VERIFY_PHONE_FAIL',

  FORGOT_PASSWORD_REQUESTED: 'FORGOT_PASSWORD_REQUESTED',
  FORGOT_PASSWORD_SUCCEEDED: 'FORGOT_PASSWORD_SUCCEEDED',
  FORGOT_PASSWORD_FAIL: 'FORGOT_PASSWORD_FAIL',

  VERIFY_FORGOT_PASSWORD_OTP_REQUESTED: 'VERIFY_FORGOT_PASSWORD_OTP_REQUESTED',
  VERIFY_FORGOT_PASSWORD_OTP_SUCCEEDED: 'VERIFY_FORGOT_PASSWORD_OTP_SUCCEEDED',
  VERIFY_FORGOT_PASSWORD_OTP_FAIL: 'VERIFY_FORGOT_PASSWORD_OTP_FAIL',

  UPDATE_PASSWORD_REQUESTED: 'UPDATE_PASSWORD_REQUESTED',
  UPDATE_PASSWORD_SUCCEEDED: 'UPDATE_PASSWORD_SUCCEEDED',
  UPDATE_PASSWORD_FAIL: 'UPDATE_PASSWORD_FAIL',

  COMPELETE_REGISTER_REQUESTED: 'COMPELETE_REGISTER_REQUESTED',
  COMPELETE_REGISTER_SUCCEEDED: 'COMPELETE_REGISTER_SUCCEEDED',
  COMPELETE_REGISTER_FAIL: 'COMPELETE_REGISTER_FAIL',

  MEMBER_REGISTER_INFO_REQUESTED: 'MEMBER_REGISTER_INFO_REQUESTED',
  MEMBER_REGISTER_INFO_SUCCEEDED: 'MEMBER_REGISTER_INFO_SUCCEEDED',
  MEMBER_REGISTER_INFO_FAIL: 'MEMBER_REGISTER_INFO_FAIL',

  SEARCH_ARTIST_REQUESTED: 'SEARCH_ARTIST_REQUESTED',
  SEARCH_ARTIST_SUCCEEDED: 'SEARCH_ARTIST_SUCCEEDED',
  SEARCH_ARTIST_FAIL: 'SEARCH_ARTIST_FAIL',

  GET_ARTIST_REQUESTED: 'GET_ARTIST_REQUESTED',
  GET_ARTIST_SUCCEEDED: 'GET_ARTIST_SUCCEEDED',
  GET_ARTIST_FAIL: 'GET_ARTIST_FAIL',

  ADD_LOCATION_REQUESTED: 'ADD_LOCATION_REQUESTED',
  ADD_LOCATION_SUCCEEDED: 'ADD_LOCATION_SUCCEEDED',
  ADD_LOCATION_FAIL: 'ADD_LOCATION_FAIL',

  GET_LOCATION_ADDED_BY_USER_REQUESTED: 'GET_LOCATION_ADDED_BY_USER_REQUESTED',
  GET_LOCATION_ADDED_BY_USER_SUCCEEDED: 'GET_LOCATION_ADDED_BY_USER_SUCCEEDED',
  GET_LOCATION_ADDED_BY_USER_FAIL: 'GET_LOCATION_ADDED_BY_USER_FAIL',

  ADD_TO_CART_REQUESTED: 'ADD_TO_CART_REQUESTED',
  ADD_TO_CART_SUCCEEDED: 'ADD_TO_CART_SUCCEEDED',
  ADD_TO_CART_FAIL: 'ADD_TO_CART_FAIL',

  GET_CART_REQUESTED: 'GET_CART_REQUESTED',
  GET_CART_SUCCEEDED: 'GET_CART_SUCCEEDED',
  GET_CART_FAIL: 'GET_CART_FAIL',

  REMOVE_ITEM_CART_REQUESTED: 'REMOVE_ITEM_CART_REQUESTED',
  REMOVE_ITEM_CART_SUCCEEDED: 'REMOVE_ITEM_CART_SUCCEEDED',
  REMOVE_ITEM_CART_FAIL: 'REMOVE_ITEM_CART_FAIL',

  BOOK_ARTIST_REQUESTED: 'BOOK_ARTIST_REQUESTED',
  BOOK_ARTIST_SUCCEEDED: 'BOOK_ARTIST_SUCCEEDED',
  BOOK_ARTIST_FAIL: 'BOOK_ARTIST_FAIL',

  GET_CUSTOMER_BOOKING_REQUESTED: 'GET_CUSTOMER_BOOKING_REQUESTED',
  GET_CUSTOMER_BOOKING_SUCCEEDED: 'GET_CUSTOMER_BOOKING_SUCCEEDED',
  GET_CUSTOMER_BOOKING_FAIL: 'GET_CUSTOMER_BOOKING_FAIL',

  GET_MEMBER_BOOKING_REQUESTED: 'GET_MEMBER_BOOKING_REQUESTED',
  GET_MEMBER_BOOKING_SUCCEEDED: 'GET_MEMBER_BOOKING_SUCCEEDED',
  GET_MEMBER_BOOKING_FAIL: 'GET_MEMBER_BOOKING_FAIL',

  RESCHEDULE_BOOKING_REQUESTED: 'RESCHEDULE_BOOKING_REQUESTED',
  RESCHEDULE_BOOKING_SUCCEEDED: 'RESCHEDULE_BOOKING_SUCCEEDED',
  RESCHEDULE_BOOKING_FAIL: 'RESCHEDULE_BOOKING_FAIL',

  GET_BOOKING_BY_SERVICE_REQUESTED: 'GET_BOOKING_BY_SERVICE_REQUESTED',
  GET_BOOKING_BY_SERVICE_SUCCEEDED: 'GET_BOOKING_BY_SERVICE_SUCCEEDED',
  GET_BOOKING_BY_SERVICE_FAIL: 'GET_BOOKING_BY_SERVICE_FAIL',

  GET_UPCOMING_BOOKING_MEMBER_REQUESTED:
    'GET_UPCOMING_BOOKING_MEMBER_REQUESTED',
  GET_UPCOMING_BOOKING_MEMBER_SUCCEEDED:
    'GET_UPCOMING_BOOKING_MEMBER_SUCCEEDED',
  GET_UPCOMING_BOOKING_MEMBER_FAIL: 'GET_UPCOMING_BOOKING_MEMBER_FAIL',

  GET_HISTORY_BOOKING_MEMBER_REQUESTED: 'GET_HISTORY_BOOKING_MEMBER_REQUESTED',
  GET_HISTORY_BOOKING_MEMBER_SUCCEEDED: 'GET_HISTORY_BOOKING_MEMBER_SUCCEEDED',
  GET_HISTORY_BOOKING_MEMBER_FAIL: 'GET_HISTORY_BOOKING_MEMBER_FAIL',

  GET_HISTORY_BOOKING_CUSTOMER_REQUESTED:
    'GET_HISTORY_BOOKING_CUSTOMER_REQUESTED',
  GET_HISTORY_BOOKING_CUSTOMER_SUCCEEDED:
    'GET_HISTORY_BOOKING_CUSTOMER_SUCCEEDED',
  GET_HISTORY_BOOKING_CUSTOMER_FAIL: 'GET_HISTORY_BOOKING_CUSTOMER_FAIL',

  GET_UPCOMING_BOOKING_CUSTOMER_REQUESTED:
    'GET_UPCOMING_BOOKING_CUSTOMER_REQUESTED',
  GET_UPCOMING_BOOKING_CUSTOMER_SUCCEEDED:
    'GET_UPCOMING_BOOKING_CUSTOMER_SUCCEEDED',
  GET_UPCOMING_BOOKING_CUSTOMER_FAIL: 'GET_UPCOMING_BOOKING_CUSTOMER_FAIL',

  GET_FRIEND_REQUESTED: 'GET_FRIEND_REQUESTED',
  GET_FRIEND_SUCCEEDED: 'GET_FRIEND_SUCCEEDED',
  GET_FRIEND_FAIL: 'GET_FRIEND_FAIL',

  GET_FRIEND_LIST_REQUESTED: 'GET_FRIEND_LIST_REQUESTED',
  GET_FRIEND_LIST_SUCCEEDED: 'GET_FRIEND_LIST_SUCCEEDED',
  GET_FRIEND_LIST_FAIL: 'GET_FRIEND_LIST_FAIL',

  RESPOND_FRIEND_REQUESTED: 'RESPOND_FRIEND_REQUESTED',
  RESPOND_FRIEND_SUCCEEDED: 'RESPOND_FRIEND_SUCCEEDED',
  RESPOND_FRIEND_FAIL: 'RESPOND_FRIEND_FAIL',

  ACCEPT_BOOKING_REQUESTED: 'ACCEPT_BOOKING_REQUESTED',
  ACCEPT_BOOKING_SUCCEEDED: 'ACCEPT_BOOKING_SUCCEEDED',
  ACCEPT_BOOKING_FAIL: 'ACCEPT_BOOKING_FAIL',

  CANCEL_BOOKING_REQUESTED: 'CANCEL_BOOKING_REQUESTED',
  CANCEL_BOOKING_SUCCEEDED: 'CANCEL_BOOKING_SUCCEEDED',
  CANCEL_BOOKING_FAIL: 'CANCEL_BOOKING_FAIL',

  APPLY_PROMO_REQUESTED: 'APPLY_PROMO_REQUESTED',
  APPLY_PROMO_SUCCEEDED: 'APPLY_PROMO_SUCCEEDED',
  APPLY_PROMO_FAIL: 'APPLY_PROMO_FAIL',

  CHANGE_PASSWORD_REQUESTED: 'CHANGE_PASSWORD_REQUESTED',
  CHANGE_PASSWORD_SUCCEEDED: 'CHANGE_PASSWORD_SUCCEEDED',
  CHANGE_PASSWORD_FAIL: 'CHANGE_PASSWORD_FAIL',

  GET_ALL_CATAGERY_REQUESTED: 'GET_ALL_CATAGERY_REQUESTED',
  GET_ALL_CATAGERY_SUCCEEDED: 'GET_ALL_CATAGERY_SUCCEEDED',
  GET_ALL_CATAGERY_FAIL: 'GET_ALL_CATAGERY_FAIL',

  MARK_COMPLETE_BOOKING_REQUESTED: 'MARK_COMPLETE_BOOKING_REQUESTED',
  MARK_COMPLETE_BOOKING_SUCCEEDED: 'MARK_COMPLETE_BOOKING_SUCCEEDED',
  MARK_COMPLETE_BOOKING_FAIL: 'MARK_COMPLETE_BOOKING_FAIL',

  MARK_START_BOOKING_REQUESTED: 'MARK_START_BOOKING_REQUESTED',
  MARK_START_BOOKING_SUCCEEDED: 'MARK_START_BOOKING_SUCCEEDED',
  MARK_START_BOOKING_FAIL: 'MARK_START_BOOKING_FAIL',

  GET_SERVICES_BY_ID_REQUESTED: 'GET_SERVICES_BY_ID_REQUESTED',
  GET_SERVICES_BY_ID_SUCCEEDED: 'GET_SERVICES_BY_ID_SUCCEEDED',
  GET_SERVICES_BY_ID_FAIL: 'GET_SERVICES_BY_ID_FAIL',

  GET_ARTIST_BY_SERVICESID_REQUESTED: 'GET_ARTIST_BY_SERVICESID_REQUESTED',
  GET_ARTIST_BY_SERVICESID_SUCCEEDED: 'GET_ARTIST_BY_SERVICESID_SUCCEEDED',
  GET_ARTIST_BY_SERVICESID_FAIL: 'GET_ARTIST_BY_SERVICESID_FAIL',

  GET_NOTIFICATIONS_REQUESTED: 'GET_NOTIFICATIONS_REQUESTED',
  GET_NOTIFICATIONS_SUCCEEDED: 'GET_NOTIFICATIONS_SUCCEEDED',
  GET_NOTIFICATIONS_FAIL: 'GET_NOTIFICATIONS_FAIL',

  REMOVE_PROMO_REQUESTED: 'REMOVE_PROMO_REQUESTED',
  CHANGE_COLOR_HEADER_CALENDER_REQUESTED:
    'CHANGE_COLOR_HEADER_CALENDER_REQUESTED',
  CHANGE_COLOR_HEADER_CALENDER_SUCCEEDED:
    'CHANGE_COLOR_HEADER_CALENDER_SUCCEEDED',

  CHECKED_IF_LOGGED_IN: 'CHECKED_IF_LOGGED_IN',
  SESSION_EXPIRED: 'SESSION_EXPIRED',

  GET_VIDEO_REQUESTED: 'GET_VIDEO_REQUESTED',
  GET_VIDEO_SUCCEEDED: 'GET_VIDEO_SUCCEEDED',
  GET_VIDEO_FAIL: 'GET_VIDEO_FAIL',

  GET_NEWS_REQUESTED: 'GET_NEWS_REQUESTED',
  GET_NEWS_SUCCEEDED: 'GET_NEWS_SUCCEEDED',
  GET_NEWS_FAIL: 'GET_NEWS_FAIL',

  GET_SIGNS_REQUESTED: 'GET_SIGNS_REQUESTED',
  GET_SIGNS_SUCCEEDED: 'GET_SIGNS_SUCCEEDED',
  GET_SIGNS_FAIL: 'GET_SIGNS_FAIL',

  GET_POSITION_REQUESTED: 'GET_POSITION_REQUESTED',
  GET_POSITION_SUCCEEDED: 'GET_POSITION_SUCCEEDED',
  GET_POSITION_FAIL: 'GET_POSITION_FAIL',

  GET_LCR_FIRST_REQUESTED: 'GET_LCR_FIRST_REQUESTED',
  GET_LCR_FIRST_SUCCEEDED: 'GET_LCR_FIRST_SUCCEEDED',
  GET_LCR_FIRST_FAIL: 'GET_LCR_FIRST_FAIL',

  GET_LCR_SECOND_REQUESTED: 'GET_LCR_SECOND_REQUESTED',
  GET_LCR_SECOND_SUCCEEDED: 'GET_LCR_SECOND_SUCCEEDED',
  GET_LCR_SECOND_FAIL: 'GET_LCR_SECOND_FAIL',

  GET_LCR_THIRD_REQUESTED: 'GET_LCR_THIRD_REQUESTED',
  GET_LCR_THIRD_SUCCEEDED: 'GET_LCR_THIRD_SUCCEEDED',
  GET_LCR_THIRD_FAIL: 'GET_LCR_THIRD_FAIL',

  GET_FISHES_REQUESTED: 'GET_FISHES_REQUESTED',
  GET_FISHES_SUCCEEDED: 'GET_FISHES_SUCCEEDED',
  GET_FISHES_FAIL: 'GET_FISHES_FAIL',

  GET_WEATHER_REQUESTED: 'GET_WEATHER_REQUESTED',
  GET_WEATHER_SUCCEEDED: 'GET_WEATHER_SUCCEEDED',
  GET_WEATHER_FAIL: 'GET_WEATHER_FAIL',

  GET_METHOD_REQUESTED: 'GET_METHOD_REQUESTED',
  GET_METHOD_SUCCEEDED: 'GET_METHOD_SUCCEEDED',
  GET_METHOD_FAIL: 'GET_METHOD_FAIL',

  SAVE_LCR_REPORT_REQUESTED: 'SAVE_LCR_REPORT_REQUESTED',
  SAVE_LCR_REPORT_SUCCEEDED: 'SAVE_LCR_REPORT_SUCCEEDED',
  SAVE_LCR_REPORT_FAIL: 'SAVE_LCR_REPORT_FAIL',

  LCR_LIST_REQUESTED: 'LCR_LIST_REQUESTED',
  LCR_LIST_SUCCEEDED: 'LCR_LIST_SUCCEEDED',
  LCR_LIST_FAIL: 'LCR_LIST_FAIL',

  UPDATE_LCR_REPORT_REQUESTED: 'UPDATE_LCR_REPORT_REQUESTED',
  UPDATE_LCR_REPORT_SUCCEEDED: 'UPDATE_LCR_REPORT_SUCCEEDED',
  UPDATE_LCR_REPORT_FAIL: 'UPDATE_LCR_REPORT_FAIL',

  ADD_COMMENT_REQUESTED: 'ADD_COMMENT_REQUESTED',
  ADD_COMMENT_SUCCEEDED: 'ADD_COMMENT_SUCCEEDED',
  ADD_COMMENT_FAIL: 'ADD_COMMENT_FAIL',

  GET_LCR_COMMENTS_REQUESTED: 'GET_LCR_COMMENTS_REQUESTED',
  GET_LCR_COMMENTS_SUCCEEDED: 'GET_LCR_COMMENTS_SUCCEEDED',
  GET_LCR_COMMENTS_FAIL: 'GET_LCR_COMMENTS_FAIL',

  GET_LCR_LIKES_REQUESTED: 'GET_LCR_LIKES_REQUESTED',
  GET_LCR_LIKES_SUCCEEDED: 'GET_LCR_LIKES_SUCCEEDED',
  GET_LCR_LIKES_FAIL: 'GET_LCR_LIKES_FAIL',

  ADD_LCR_LIKE_REQUESTED: 'ADD_LCR_LIKE_REQUESTED',
  ADD_LCR_LIKE_SUCCEEDED: 'ADD_LCR_LIKE_SUCCEEDED',
  ADD_LCR_LIKE_FAIL: 'ADD_LCR_LIKE_FAIL',

  SAVE_VIDEO_REQUESTED: 'SAVE_VIDEO_REQUESTED',
  SAVE_VIDEO_SUCCEEDED: 'SAVE_VIDEO_SUCCEEDED',
  SAVE_VIDEO_FAIL: 'SAVE_VIDEO_FAIL',
  
  SAVE_PHOTO_SHARING_REQUESTED: 'SAVE_PHOTO_SHARING_REQUESTED',
  SAVE_PHOTO_SHARING_SUCCEEDED: 'SAVE_PHOTO_SHARING_SUCCEEDED',
  SAVE_PHOTO_SHARING_FAIL: 'SAVE_PHOTO_SHARING_FAIL',
  
  LOGOUT_REQUESTED: 'LOGOUT_REQUESTED',
  SESSION_EXPIRE_REQUESTED: 'SESSION_EXPIRE_REQUESTED',
};

export { actionTypes };
