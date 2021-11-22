import { actionTypes } from '../../utilities/constants';

const getLoginUserProfile = (params ) => ({
    type: actionTypes.GET_PROFILE_REQUESTED,
    params
});

const updateProfile = (params) => ({
    type: actionTypes.UPDATE_PROFILE_REQUESTED,
    params
});

const memberInfo = (params) => ({
    type: actionTypes.MEMBER_REGISTER_INFO_REQUESTED,
    params
});


export {
    getLoginUserProfile,
    updateProfile,
    memberInfo
};
