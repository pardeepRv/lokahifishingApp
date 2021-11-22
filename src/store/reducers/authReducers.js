import {actionTypes} from '../../utilities/constants';

const initialState = {
  loading: false,
  userDetails: {},
  showInfo: false,
  loginViaPhoneMsg: null,
  otp: null,
  updatePasswordMsg: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_SUCCEEDED:
      return {...state, image: action.url};

    case actionTypes.LOGIN_WITH_EMAIL_REQUESTED ||
      actionTypes.SIGNUP_WITH_EMAIL_REQUESTED:
      return {...state, loading: true};

    case actionTypes.LOGIN_WITH_EMAIL_SUCCEEDED ||
      actionTypes.SIGNUP_WITH_EMAIL_SUCCEEDED:
      return {...state, loading: false, userDetails: action.userData};

    case actionTypes.LOGIN_WITH_EMAIL_FAIL ||
      actionTypes.SIGNUP_WITH_EMAIL_FAIL:
      return {...state, loading: false};

    case actionTypes.LOGIN_WITH_FB_REQUESTED:
      return {...state, loading: true};

    case actionTypes.LOGIN_WITH_FB_SUCCEEDED:
      return {...state, loading: false, userDetails: action.userData};

    case actionTypes.LOGIN_WITH_FB_FAIL:
      return {...state, loading: false};

    case actionTypes.SIGNUP_WITH_EMAIL_REQUESTED:
      return {...state, loading: true};

    case actionTypes.SIGNUP_WITH_EMAIL_SUCCEEDED:
      return {...state, loading: false, userDetails: action.userData};

    case actionTypes.SIGNUP_WITH_EMAIL_FAIL:
      return {...state, loading: false};

    case actionTypes.LOGIN_WITH_PHONE_REQUESTED:
      return {...state, loading: true};

    case actionTypes.LOGIN_WITH_PHONE_SUCCEEDED:
      return {
        ...state,
        loading: false,
        showInfo: true,
        loginViaPhoneMsg: action.responsePhoneApi,
      };

    case actionTypes.LOGIN_WITH_PHONE_FAIL:
      return {...state, loading: false};

    case actionTypes.VERIFY_PHONE_REQUESTED:
      return {...state, loading: true};

    case actionTypes.VERIFY_PHONE_SUCCEEDED:
      return {...state, loading: false, userDetails: action.userData};

    case actionTypes.VERIFY_PHONE_FAIL:
      return {...state, loading: false};

    case actionTypes.FORGOT_PASSWORD_REQUESTED:
      return {...state, loading: true};

    case actionTypes.FORGOT_PASSWORD_SUCCEEDED:
      return {...state, loading: false};

    case actionTypes.FORGOT_PASSWORD_FAIL:
      return {...state, loading: false};

    case actionTypes.VERIFY_FORGOT_PASSWORD_OTP_REQUESTED:
      return {...state, loading: true};

    case actionTypes.VERIFY_FORGOT_PASSWORD_OTP_SUCCEEDED:
      return {...state, loading: false, userDetails: action.userData};

    case actionTypes.VERIFY_FORGOT_PASSWORD_OTP_FAIL:
      return {...state, loading: false};

    case actionTypes.UPDATE_PASSWORD_REQUESTED:
      return {...state, loading: true};

    case actionTypes.UPDATE_PASSWORD_SUCCEEDED:
      return {
        ...state,
        loading: false,
        updatePasswordMsg: action.payload,
        userDetails: {},
        loginViaPhoneMsg: null,
      };

    case actionTypes.UPDATE_PASSWORD_FAIL:
      return {...state, loading: false};

    case actionTypes.COMPELETE_REGISTER_REQUESTED:
      return {...state, loading: true};

    case actionTypes.COMPELETE_REGISTER_SUCCEEDED:
      return {...state, loading: false, userDetails: action.userData};

    case actionTypes.COMPELETE_REGISTER_FAIL:
      return {...state, loading: false};

    case actionTypes.CHANGE_PASSWORD_REQUESTED:
      return {...state, loading: true};

    case actionTypes.CHANGE_PASSWORD_SUCCEEDED:
      return {...state, loading: false};

    case actionTypes.CHANGE_PASSWORD_FAIL:
      return {...state, loading: false};

    case actionTypes.GET_PROFILE_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_PROFILE_SUCCEEDED:
      return {
        ...state,
        loading: false,
        userDetails: action.payload,
      };

    case actionTypes.GET_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.UPDATE_PROFILE_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.UPDATE_PROFILE_SUCCEEDED:
      return {
        ...state,
        loading: false,
        userDetails: action.payload,
      };

    case actionTypes.UPDATE_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
      }; 
    case actionTypes.SESSION_EXPIRED: {
      return {
        ...state,
        ...initialState,
      };
    }

    case actionTypes.LOGOUT_REQUESTED:
      return {...state, loading: true};

    default:
      return state;
  }
};
