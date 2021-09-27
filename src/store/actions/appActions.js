import { actionTypes } from '../../utilities/constants';

const getDataFromSearch = (params) => ({
    type: actionTypes.SEARCH_ARTIST_REQUESTED,
    params
});

const getArtistProfile = (params) => ({
    type: actionTypes.GET_ARTIST_REQUESTED,
    params
});


const addLocations = (params) => ({
    type: actionTypes.ADD_LOCATION_REQUESTED,
    params
});

const getAddressAddedByUser = (params) => ({
    type: actionTypes.GET_LOCATION_ADDED_BY_USER_REQUESTED,
    params
});

const getCustomerBooking = (params) => ({
    type: actionTypes.GET_CUSTOMER_BOOKING_REQUESTED,
    params
});

const getMemberBooking = (params) => ({
    type: actionTypes.GET_MEMBER_BOOKING_REQUESTED,
    params
});


const rescheduleBooking = (params) => ({
    type: actionTypes.RESCHEDULE_BOOKING_REQUESTED,
    params
});

const getBookingByService = (params) => ({
    type: actionTypes.GET_BOOKING_BY_SERVICE_REQUESTED,
    params
});

const getUpcomingBookingMember = (params) => ({
    type: actionTypes.GET_UPCOMING_BOOKING_MEMBER_REQUESTED,
    params
});

const getHistoryBookingMember = (params) => ({
    type: actionTypes.GET_HISTORY_BOOKING_MEMBER_REQUESTED,
    params
});


const getHistoryBookingCustomer = (params) => ({
    type: actionTypes.GET_HISTORY_BOOKING_CUSTOMER_REQUESTED,
    params
});



const getUpcomingBookingCustomer = (params) => ({
    type: actionTypes.GET_UPCOMING_BOOKING_CUSTOMER_REQUESTED,
    params
});

const getAllCatagories = (params) => ({
    type: actionTypes.GET_ALL_CATAGERY_REQUESTED,
    params
});


const getServicesByCatagoryId = (params) => ({
    type: actionTypes.GET_SERVICES_BY_ID_REQUESTED,
    params
});

const getArtistByServicesId = (params) => ({
    type: actionTypes.GET_ARTIST_BY_SERVICESID_REQUESTED,
    params
});


const acceptBooking = (params) => ({
    type: actionTypes.ACCEPT_BOOKING_REQUESTED,
    params
});

const cancelBooking = (params) => ({
    type: actionTypes.CANCEL_BOOKING_REQUESTED,
    params
});

const markCompleteBooking = (params) => ({
    type: actionTypes.MARK_COMPLETE_BOOKING_REQUESTED,
    params
});

const markStartBooking = (params) => ({
    type: actionTypes.MARK_START_BOOKING_REQUESTED,
    params
});


const applyPromocode = (params) => ({
    type: actionTypes.APPLY_PROMO_REQUESTED,
    params
});

const removePromocode = (params) => ({
    type: actionTypes.REMOVE_PROMO_REQUESTED,
    params
});

const getAllNotifications = (params) => ({
    type: actionTypes.GET_NOTIFICATIONS_REQUESTED,
    params
});

const changeColorHeaderCalender = (params) => ({
    type: actionTypes.CHANGE_COLOR_HEADER_CALENDER_REQUESTED,
    params
});

export {
    getDataFromSearch,
    getArtistProfile,
    addLocations,
    getAddressAddedByUser,
    getCustomerBooking,
    rescheduleBooking,
    getBookingByService,
    getUpcomingBookingMember,
    getHistoryBookingMember,
    acceptBooking,
    getUpcomingBookingCustomer,
    cancelBooking,
    getMemberBooking,
    applyPromocode,
    removePromocode,
    getServicesByCatagoryId,
    getAllCatagories,
    markCompleteBooking,
    markStartBooking,
    getHistoryBookingCustomer,
    getArtistByServicesId,
    getAllNotifications,
    changeColorHeaderCalender
};
