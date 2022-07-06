import { actionTypes } from "./actionsTypes";
import axios from "axios";
import {
  addUserToLocalStorage,
  removeUserToLocalStorage,
} from "../util/localStorage";
import { authFetch } from "./appContext";

export const displayAlert = (dispatch) => {
  dispatch({ type: actionTypes.DISPLAY_ALERT });
  clearAlert(dispatch);
};

export const clearAlert = (dispatch) => {
  setTimeout(() => {
    dispatch({ type: actionTypes.CLEAR_ALERT });
  }, 3000);
};

export const toggleSidebar = (dispatch) => {
  dispatch({ type: actionTypes.TOGGLE_SIDEBAR });
};

export const changePage = (dispatch, page) => {
  dispatch({
    type: actionTypes.CHANGE_PAGE,
    payload: { page },
  });
};

export const registerUser = async (currentUser, dispatch) => {
  dispatch({ type: actionTypes.EXECUTE_NEW_REQUEST });
  try {
    /*
    {
      "msg": "success",
      "user": {
          "email": "acalvo5656@promaticmedia.cl",
          "_id": "62b6042aac02638b90cd3554"
      }
    }
    */
    const response = await axios.post(
      "http://localhost:4000/api/v1/auth/signup",
      currentUser
    );
    const { accessToken: token, refreshToken, user } = response.data;

    dispatch({
      type: actionTypes.REGISTER_USER_SUCCESS,
      payload: {
        user,
        token,
        refreshToken,
      },
    });
    addUserToLocalStorage({
      user,
      token,
      refreshToken,
      location: "timezone-here",
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: actionTypes.REGISTER_USER_ERROR,
      payload: { msg: "Please, insert valid values" },
    });
  }
  clearAlert(dispatch);
};

export const loginUser = async (currentUser, dispatch) => {
  dispatch({ type: actionTypes.EXECUTE_NEW_REQUEST });
  try {
    const response = await axios.post(
      "http://localhost:4000/api/v1/auth/signin",
      currentUser
    );
    const { accessToken: token, refreshToken, user } = response.data;
    dispatch({
      type: actionTypes.LOGIN_USER_SUCCESS,
      payload: {
        user,
        token,
        refreshToken,
      },
    });
    addUserToLocalStorage({
      user,
      token,
      refreshToken,
      location: "timezone-here",
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: actionTypes.LOGIN_USER_ERROR,
      payload: { msg: "Please, insert valid values" },
    });
  }
  clearAlert(dispatch);
};

export const logoutUser = (dispatch) => {
  dispatch({ type: actionTypes.LOGOUT_USER });
  removeUserToLocalStorage();
};

export const updateUser = async (dispatch, currentUser) => {
  dispatch({ type: actionTypes.EXECUTE_NEW_REQUEST });
  try {
    const { data } = await authFetch.patch("/auth/user", currentUser);
    const { accessToken: token="", refreshToken="", user=""  } = data;
    dispatch({
      type: actionTypes.UPDATE_USER_SUCCESS,
      payload: {
        user,
        token,
        refreshToken,
      },
    });
    localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    dispatch({
      type: actionTypes.UPDATE_USER_ERROR,
      payload: { msg: error.response.data.msg },
    });
  }
  clearAlert(dispatch);
};

export const handleFormInputChange = (dispatch, name, value) => {
  dispatch({
    type: actionTypes.HANDLE_FORM_INPUT_CHANGE,
    payload: { name, value },
  });
};

export const handleClearFormValues = (dispatch) => {
  dispatch({ type: actionTypes.HANDLE_CLEAR_FORM_VALUES });
};

export const getDevices = async (dispatch, searchQuery) => {
  // dispatch({ type: actionTypes.GET_JOBS_BEGIN });
  dispatch({ type: actionTypes.EXECUTE_NEW_REQUEST });
  // const { page, search, searchStatus, searchType, sort } = searchQuery;//TODO: handle pagination
  // let url = `/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`;//TODO: handle pagination
  // if (search) {
  //   url += `search=${search}`;
  // }
  try {
    const { data } = await authFetch.get("/device");
    const { devices, totalJobs = 1, numOfPages = 1 } = data;
    console.log(data);
    dispatch({
      type: actionTypes.GET_DEVICES_SUCESS,
      payload: {
        devices,
        totalDevices : 1,
        numOfPages : 1,
      },
    });
  } catch (error) {
    logoutUser(dispatch);
  }
  clearAlert(dispatch);
};

export const createJob = async (
  dispatch,
  position,
  company,
  jobLocation,
  jobType,
  status
) => {
  dispatch({ type: actionTypes.CREATE_JOB_BEGIN });
  try {
    await authFetch.post("/jobs", {
      company,
      position,
      jobLocation,
      jobType,
      status,
    });
    dispatch({ type: actionTypes.CREATE_JOB_SUCCESS });
    dispatch({ type: actionTypes.HANDLE_CLEAR_FORM_VALUES }); //clear form values
  } catch (error) {
    if (error.response.status === 401) return;
    dispatch({
      type: actionTypes.CREATE_JOB_ERROR,
      payload: { msg: error.response.data.msg },
    });
  }
  clearAlert(dispatch);
};

export const getJobs = async (dispatch, searchQuery) => {
  dispatch({ type: actionTypes.GET_JOBS_BEGIN });
  const { page, search, searchStatus, searchType, sort } = searchQuery;
  let url = `/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`;
  if (search) {
    url += `search=${search}`;
  }
  try {
    const { data } = await authFetch.get(url);
    const { jobs, totalJobs, numOfPages } = data;
    dispatch({
      type: actionTypes.GET_JOBS_SUCCESS,
      payload: {
        jobs,
        totalJobs,
        numOfPages,
      },
    });
  } catch (error) {
    logoutUser(dispatch);
  }
  clearAlert(dispatch);
};

export const setEditJob = (dispatch, job) => {
  dispatch({
    type: actionTypes.SET_EDIT_JOB,
    payload: { job },
  });
};

export const editJob = async (dispatch, job) => {
  dispatch({ type: actionTypes.EDIT_JOB_BEGIN });
  const { editJobId: jobId, ...jobToBeUpdated } = job;
  try {
    await authFetch.patch(`/jobs/${jobId}`, { ...jobToBeUpdated });
    dispatch({ type: actionTypes.EDIT_JOB_SUCCESS });
    dispatch({ type: actionTypes.HANDLE_CLEAR_FORM_VALUES }); //clear form values
  } catch (error) {
    if (error.response.status === 401) return; //error handled by axios interceptor
    dispatch({
      type: actionTypes.EDIT_JOB_ERROR,
      payload: { msg: error.response.data.msg },
    });
  }
  clearAlert(dispatch);
};

export const deleteJob = async (dispatch, jobId) => {
  dispatch({ type: actionTypes.DELETE_JOB_BEGIN });
  try {
    await authFetch.delete(`/jobs/${jobId}`);
    getJobs(dispatch);
  } catch (error) {
    logoutUser(dispatch);
  }
};

export const showStats = async (dispatch) => {
  dispatch({ type: actionTypes.SHOW_STATS_BEGIN });
  try {
    const { data } = await authFetch(`/jobs/stats`);
    dispatch({
      type: actionTypes.SHOW_STATS_SUCCESS,
      payload: {
        stats: data.defaultStats,
        monthlyApplications: data.monthlyApplications,
      },
    });
  } catch (error) {
    logoutUser(dispatch);
  }
  clearAlert(dispatch);
};

export const clearFilters = (dispatch) => {
  dispatch({ type: actionTypes.GET_JOB_CLEAR_FILTERS });
};
