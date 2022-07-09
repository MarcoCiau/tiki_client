export const actionTypes = {
  DISPLAY_ALERT: "[ui] SHOW_ALERT",
  CLEAR_ALERT: "[ui] CLEAR_ALERT",
  SHOW_MODAL:  "[ui] SHOW MODAL",
  CLOSE_MODAL: "[ui] CLOSE MODAL",
  TOGGLE_SIDEBAR: "[ui] TOGGLE SIDEBAR",
  CHANGE_PAGE: "[ui] CHANGE PAGE (PAGINATION)",
  EXECUTE_NEW_REQUEST: "[http] NEW HTTP REQUEST EXECUTED",
  REGISTER_USER_SUCCESS: "[auth] USER REGISTRATION SUCCCED",
  REGISTER_USER_ERROR: "[auth] USER REGISTRATION FAILED",
  LOGIN_USER_SUCCESS: "[auth] USER LOGIN SUCCCED",
  LOGIN_USER_ERROR: "[auth] USER LOGIN FAILED",
  LOGOUT_USER: "[auth] USER LOGOUT",
  UPDATE_USER_BEGIN: "[auth] UPDATE_USER_BEGIN",
  UPDATE_USER_SUCCESS: "[auth] UPDATE_USER_SUCCESS",
  UPDATE_USER_ERROR: "[auth] UPDATE_USER_ERROR",
  GET_DEVICES_SUCESS: "[devices] GET JOBS SUCCED",
  GET_DEVICES_FAILED: "[devices] GET JOBS FAILED",
  
  HANDLE_FORM_INPUT_CHANGE: "[Add job form] HANDLE_INPUT_CHANGE",
  HANDLE_CLEAR_FORM_VALUES: "[Add job form] HANDLE_CLEAR_FORM_VALUES",
  CREATE_JOB_BEGIN: "[create job] INIT CREATE JOB",
  CREATE_JOB_SUCCESS: "[create job] CREATE JOB SUCCCED",
  CREATE_JOB_ERROR: "[create job] CREATE JOB FAILED",
  GET_JOBS_BEGIN: "[get job] INIT GET JOBS",
  GET_JOBS_SUCCESS: "[get job] GET JOBS SUCCCED",
  GET_JOB_CLEAR_FILTERS: "[get job] GET JOBS CLEAR FILTERS",
  SET_EDIT_JOB: "[edit job] SET EDIT JOB ID",
  DELETE_JOB_BEGIN: "[delete job] INIT DELETE JOB",
  EDIT_JOB_BEGIN: "[edit job] INIT EDIT JOB",
  EDIT_JOB_SUCCESS: "[edit job] EDIT JOB SUCCCED",
  EDIT_JOB_ERROR: "[edit job] EDIT JOB FAILED",
  SHOW_STATS_BEGIN: "[get job stats]SHOW_STATS_BEGIN",
  SHOW_STATS_SUCCESS: "[get job stats]SHOW_STATS_SUCCESS",
};
