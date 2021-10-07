import AsyncStorage from '@react-native-async-storage/async-storage';

import { USER_DATA } from '../constants/otherConstants';

const getLocalUserData = () =>
  AsyncStorage.getItem(USER_DATA).then((data) => JSON.parse(data));

const setLocalUserData = (data) =>
  AsyncStorage.setItem(USER_DATA, JSON.stringify(data));

const deleteUserDataFromLocal = () => AsyncStorage.removeItem(USER_DATA);

const extractUserDataFromDBResponse = (userData = {}, defaultValues) => {
  const {
    CML,
    city,
    created_at,
    deleted_at,
    device_token,
    email,
    email_verified_at,
    full_name,
    id,
    ip_address,
    is_email_verified,
    island,
    last_logged_in_at,
    level,
    os,
    phone_number,
    points,
    profile_picture,
    updated_at,
    user_name,
    access_token
  } = userData;

  return {
    CML,
    city,
    created_at,
    deleted_at,
    device_token,
    email,
    email_verified_at,
    full_name,
    id,
    ip_address,
    is_email_verified,
    island,
    last_logged_in_at,
    level,
    os,
    phone_number,
    points,
    profile_picture,
    updated_at,
    user_name,
    access_token,
    ...defaultValues,
  };
};

export {
  getLocalUserData,
  setLocalUserData,
  deleteUserDataFromLocal,
  extractUserDataFromDBResponse,
};
