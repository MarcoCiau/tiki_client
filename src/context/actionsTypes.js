export const actionTypes = {
  DISPLAY_ALERT: "[ui] SHOW_ALERT",
  CLEAR_ALERT: "[ui] CLEAR_ALERT",
  SHOW_MODAL:  "[ui] SHOW MODAL",
  CLOSE_MODAL: "[ui] CLOSE MODAL",
  TOGGLE_SIDEBAR: "[ui] TOGGLE SIDEBAR",

  HANDLE_FORM_INPUT_CHANGE: "[Handle Input Change Form] HANDLE_INPUT_CHANGE",
  HANDLE_CLEAR_FORM_VALUES: "[Handle Input Change Form] HANDLE_CLEAR_FORM_VALUES",
  
  SEARCH_CLEAR_FILTERS: "[Search Form] CLEAR SEARCH FORM VALUES",
  EXECUTE_NEW_REQUEST: "[http] NEW HTTP REQUEST EXECUTED",

  REGISTER_USER_SUCCESS: "[auth] USER REGISTRATION SUCCCED",
  REGISTER_USER_ERROR: "[auth] USER REGISTRATION FAILED",
  LOGIN_USER_SUCCESS: "[auth] USER LOGIN SUCCCED",
  LOGIN_USER_ERROR: "[auth] USER LOGIN FAILED",
  LOGOUT_USER: "[auth] USER LOGOUT",
  UPDATE_USER_SUCCESS: "[auth] UPDATE_USER_SUCCESS",
  UPDATE_USER_ERROR: "[auth] UPDATE_USER_ERROR",

  CREATE_DEVICE_SUCCESS: "[create device] CREATE DEVICE SUCCCED",
  CREATE_DEVICE_ERROR: "[create device] CREATE DEVICE FAILED",
  GET_DEVICES_SUCESS: "[devices] GET DEVICES SUCCED",
  SET_EDIT_DEVICE: "[edit device] SET EDIT DEVICE ID",
  EDIT_DEVICE_SUCCESS: "[edit device] EDIT DEVICE SUCCCED",
  EDIT_DEVICE_ERROR: "[edit device] EDIT DEVICE FAILED",

  SHOW_STATS_BEGIN: "[get job stats]SHOW_STATS_BEGIN",
  SHOW_STATS_SUCCESS: "[get job stats]SHOW_STATS_SUCCESS",
  UPDATE_STATS_REALTIME: "[update stats time series stats]UPDATE STATS INFO via SOCKET.IO",

  SET_SOCKET_CONNECTED: "[Socket IO] SET SOCKET IO AS CONNECTED",
  SET_SOCKET_ROOM_ID:"[Socket IO] SET SOCKET IO ROOM ID",
};