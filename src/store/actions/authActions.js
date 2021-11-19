import { actionTypes } from '../../utilities/constants';

const fetchData = (params) => ({
    type: actionTypes.FETCH_DATA_REQUESTED,
    params
});

const loginWithEmail = (params) => ({
    type: actionTypes.LOGIN_WITH_EMAIL_REQUESTED,
    params
})

const loginWithPhone = (params) => ({
    type: actionTypes.LOGIN_WITH_PHONE_REQUESTED,
    params
})

const verifyPhoneOtp = (params) => ({
    type: actionTypes.VERIFY_PHONE_REQUESTED,
    params
})

const forgotPassword = (params) => ({
    type: actionTypes.FORGOT_PASSWORD_REQUESTED,
    params
})

const verifyForgotPasswordOtp = (params) => ({
    type: actionTypes.VERIFY_FORGOT_PASSWORD_OTP_REQUESTED,
    params
})

const updatePassword = (params) => ({
    type: actionTypes.UPDATE_PASSWORD_REQUESTED,
    params
})

const completeRegiter = (params) => ({
    type: actionTypes.COMPELETE_REGISTER_REQUESTED,
    params
})

const socialLoginSignup = (params) => ({
    type: actionTypes.LOGIN_WITH_FB_REQUESTED,
    params
})

const signUpWithEmail = (params) => ({
    type: actionTypes.SIGNUP_WITH_EMAIL_REQUESTED,
    params
})

const checkIfLoggedIn = () => ({
    type: actionTypes.CHECKED_IF_LOGGED_IN
});

const change_Password = (params) => ({
    type: actionTypes.CHANGE_PASSWORD_REQUESTED,
    params
});

const logout = () => ({
    type: actionTypes.LOGOUT_REQUESTED,

});

export {
    fetchData,
    loginWithEmail,
    checkIfLoggedIn,
    logout,
    socialLoginSignup,
    signUpWithEmail,
    loginWithPhone,
    verifyPhoneOtp,
    forgotPassword,
    verifyForgotPasswordOtp,
    updatePassword,
    completeRegiter,
    change_Password,

};
