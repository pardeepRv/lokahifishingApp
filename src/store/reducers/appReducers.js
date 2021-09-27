import { actionTypes } from '../../utilities/constants';

const initialState = {
    loading: false,
    result: [],
    memberInfo: [],
    locationMsg: null,
    addressesOfUser: [],
    customerBookings: [],
    reschedulemsg: '',
    getBookingByServiceID: [],
    upComingBookingsMember: [],
    historyBookingsMember: [],
    historyBookingsCustomer: [],
    upComingBookingsCustomer: [],
    memberBookings: {},
    amountAfterApplying_promocode: {},
    allCategories: [],
    servicesByCatagory: [],
    allArtistByServiceID: [],
    allNotifications: [],
    calenderHeaderColor:false

};

export default (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.SEARCH_ARTIST_REQUESTED:
            return {
                ...state,
                loading: true
            };

        case actionTypes.SEARCH_ARTIST_SUCCEEDED:
            return {
                ...state,
                loading: false,
                result: action.payload,
                servicesByCatagory: [],
            };

        case actionTypes.SEARCH_ARTIST_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.GET_ARTIST_REQUESTED:
            return {
                ...state,
                loading: true
            };

        case actionTypes.GET_ARTIST_SUCCEEDED:
            return {
                ...state,
                loading: false,
                memberInfo: action.payload
            };

        case actionTypes.GET_ARTIST_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.ADD_LOCATION_REQUESTED:
            return {
                ...state,
                loading: true
            };

        case actionTypes.ADD_LOCATION_SUCCEEDED:
            return {
                ...state,
                loading: false,
            };

        case actionTypes.ADD_LOCATION_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.GET_LOCATION_ADDED_BY_USER_REQUESTED:
            return {
                ...state,
                loading: true
            };

        case actionTypes.GET_LOCATION_ADDED_BY_USER_SUCCEEDED:
            return {
                ...state,
                loading: false,
                addressesOfUser: action.payload
            };

        case actionTypes.GET_LOCATION_ADDED_BY_USER_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.GET_CUSTOMER_BOOKING_REQUESTED:
            return {
                ...state,
                loading: true,
                getBookingByServiceID: []
            };

        case actionTypes.GET_CUSTOMER_BOOKING_SUCCEEDED:
            return {
                ...state,
                loading: false,
                customerBookings: action.payload
            };

        case actionTypes.GET_CUSTOMER_BOOKING_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.RESCHEDULE_BOOKING_REQUESTED:
            return {
                ...state,
                loading: true
            };

        case actionTypes.RESCHEDULE_BOOKING_SUCCEEDED:
            return {
                ...state,
                loading: false,
            };

        case actionTypes.RESCHEDULE_BOOKING_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.GET_BOOKING_BY_SERVICE_REQUESTED:
            return {
                ...state,
                loading: true,
                customerBookings: []
            };

        case actionTypes.GET_BOOKING_BY_SERVICE_SUCCEEDED:
            return {
                ...state,
                loading: false,
                getBookingByServiceID: action.payload
            };

        case actionTypes.GET_BOOKING_BY_SERVICE_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.GET_UPCOMING_BOOKING_MEMBER_REQUESTED:
            return {
                ...state,
                loading: true,
            };

        case actionTypes.GET_UPCOMING_BOOKING_MEMBER_SUCCEEDED:
            return {
                ...state,
                loading: false,
                upComingBookingsMember: action.payload
            };

        case actionTypes.GET_UPCOMING_BOOKING_MEMBER_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.GET_HISTORY_BOOKING_MEMBER_REQUESTED:
            return {
                ...state,
                loading: true,
            };

        case actionTypes.GET_HISTORY_BOOKING_MEMBER_SUCCEEDED:
            return {
                ...state,
                loading: false,
                historyBookingsMember: action.payload
            };

        case actionTypes.GET_HISTORY_BOOKING_MEMBER_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.ACCEPT_BOOKING_REQUESTED:
            return {
                ...state,
                loading: true,
            };

        case actionTypes.ACCEPT_BOOKING_SUCCEEDED:
            return {
                ...state,
                loading: false,
            };

        case actionTypes.ACCEPT_BOOKING_FAIL:
            return {
                ...state,
                loading: false
            };


        case actionTypes.GET_HISTORY_BOOKING_CUSTOMER_REQUESTED:
            return {
                ...state,
                loading: true,
            };

        case actionTypes.GET_HISTORY_BOOKING_CUSTOMER_SUCCEEDED:
            return {
                ...state,
                loading: false,
                historyBookingsCustomer: action.payload

            };

        case actionTypes.GET_HISTORY_BOOKING_CUSTOMER_FAIL:
            return {
                ...state,
                loading: false
            };



        case actionTypes.MARK_COMPLETE_BOOKING_REQUESTED:
            return {
                ...state,
                loading: true,
            };

        case actionTypes.MARK_COMPLETE_BOOKING_SUCCEEDED:
            return {
                ...state,
                loading: false,
            };

        case actionTypes.MARK_COMPLETE_BOOKING_FAIL:
            return {
                ...state,
                loading: false
            };


        case actionTypes.MARK_START_BOOKING_REQUESTED:
            return {
                ...state,
                loading: true,
            };

        case actionTypes.MARK_START_BOOKING_SUCCEEDED:
            return {
                ...state,
                loading: false,
            };

        case actionTypes.MARK_START_BOOKING_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.CANCEL_BOOKING_REQUESTED:
            return {
                ...state,
                loading: true,
            };

        case actionTypes.CANCEL_BOOKING_SUCCEEDED:
            return {
                ...state,
                loading: false,
            };

        case actionTypes.CANCEL_BOOKING_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.GET_UPCOMING_BOOKING_CUSTOMER_REQUESTED:
            return {
                ...state,
                loading: true,
            };

        case actionTypes.GET_UPCOMING_BOOKING_CUSTOMER_SUCCEEDED:
            return {
                ...state,
                loading: false,
                upComingBookingsCustomer: action.payload
            };

        case actionTypes.GET_UPCOMING_BOOKING_CUSTOMER_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.GET_MEMBER_BOOKING_REQUESTED:
            return {
                ...state,
                loading: true,
            };

        case actionTypes.GET_MEMBER_BOOKING_SUCCEEDED:
            return {
                ...state,
                loading: false,
                memberBookings: action.payload
            };

        case actionTypes.GET_MEMBER_BOOKING_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.APPLY_PROMO_REQUESTED:
            return {
                ...state,
                loading: true,
            };

        case actionTypes.APPLY_PROMO_SUCCEEDED:
            return {
                ...state,
                loading: false,
                amountAfterApplying_promocode: action.payload
            };

        case actionTypes.APPLY_PROMO_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.GET_BOOKING_BY_SERVICE_REQUESTED:
            return {
                ...state,
                loading: true,
            };


        case actionTypes.GET_ALL_CATAGERY_REQUESTED:
            return {
                ...state,
                loading: true,
            };

        case actionTypes.GET_ALL_CATAGERY_SUCCEEDED:
            return {
                ...state,
                loading: false,
                allCategories: action.payload
            };

        case actionTypes.GET_ALL_CATAGERY_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.GET_SERVICES_BY_ID_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.GET_SERVICES_BY_ID_SUCCEEDED:
            return {
                ...state,
                loading: false,
                servicesByCatagory: action.payload
            };



        case actionTypes.GET_SERVICES_BY_ID_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.REMOVE_PROMO_REQUESTED:
            return {
                ...state,
                loading: false,
                amountAfterApplying_promocode: {}
            };

        case actionTypes.GET_ARTIST_BY_SERVICESID_REQUESTED:
            return {
                ...state,
                loading: true,
                allArtistByServiceID: []
            };
        case actionTypes.GET_ARTIST_BY_SERVICESID_SUCCEEDED:
            return {
                ...state,
                loading: false,
                allArtistByServiceID: action.payload
            };

        case actionTypes.GET_ARTIST_BY_SERVICESID_FAIL:
            return {
                ...state,
                loading: false
            };

        case actionTypes.GET_NOTIFICATIONS_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.GET_NOTIFICATIONS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                allNotifications: action.payload
            };

        case actionTypes.GET_NOTIFICATIONS_FAIL:
            return {
                ...state,
                loading: false
            };

            case actionTypes.CHANGE_COLOR_HEADER_CALENDER_SUCCEEDED:
            return {
                ...state,
                calenderHeaderColor: action.payload
            };
        default:
            return state;
    }
};
