import { actionTypes } from '../../utilities/constants';

const initialState = {
    loading: false,
    loginUserDetails: {},
    gettingMemberInfo: []

};

export default (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.GET_PROFILE_REQUESTED:
            return {
                ...state,
                loading: true
            };

        case actionTypes.GET_PROFILE_SUCCEEDED:
            return {
                ...state,
                loading: false,
                loginUserDetails: action.payload
            };

        case actionTypes.GET_PROFILE_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.UPDATE_PROFILE_REQUESTED:
            return {
                ...state,
                loading: true
            };

        case actionTypes.UPDATE_PROFILE_SUCCEEDED:
            return {
                ...state,
                loading: false,
                loginUserDetails: action.payload
            };

        case actionTypes.UPDATE_PROFILE_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.MEMBER_REGISTER_INFO_REQUESTED:
            return {
                ...state,
                loading: true
            };

        case actionTypes.MEMBER_REGISTER_INFO_SUCCEEDED:
            return {
                ...state,
                loading: false,
                gettingMemberInfo: [state.gettingMemberInfo, action.payload]

                // gettingMemberInfo: state.gettingMemberInfo.length > 0 ?
                //     [...state.gettingMemberInfo, ...action.payload] : [action.payload]
            };

        case actionTypes.MEMBER_REGISTER_INFO_FAIL:
            return {
                ...state,
                loading: false
            };


        default:
            return state;
    }
};
