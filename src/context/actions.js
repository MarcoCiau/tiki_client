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

export const showModal = (dispatch) => {
  dispatch({ type: actionTypes.SHOW_MODAL});
}

export const closeModal = (dispatch) => {
  dispatch({ type: actionTypes.CLOSE_MODAL});
}

export const toggleSidebar = (dispatch) => {
  dispatch({ type: actionTypes.TOGGLE_SIDEBAR });
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

export const getDevices = async (dispatch, searchQuery={}) => {
  dispatch({ type: actionTypes.EXECUTE_NEW_REQUEST });
  const { page=1, search="", searchStatus="", sort="" } = searchQuery;
  let url = `/device?page=${page}&status=${searchStatus}&sort=${sort}`;
  if (search) {
    url += `search=${search}`;
  }
  try {
    const { data } = await authFetch.get(url);
    const { devices, totalDevices = 0, numOfPages = 1 } = data;
    dispatch({
      type: actionTypes.GET_DEVICES_SUCESS,
      payload: {
        devices,
        totalDevices,
        numOfPages,
      },
    });
  } catch (error) {
    logoutUser(dispatch);
  }
  clearAlert(dispatch);
};

export const createDevice = async (dispatch, job) => {
  dispatch({ type: actionTypes.EXECUTE_NEW_REQUEST });
  const { name="", mac="", type=1 } = job;
  try {
    await authFetch.post("/device" , {name, mac, type});
    dispatch({ type: actionTypes.CREATE_DEVICE_SUCCESS });
  } catch (error) {
    if (error.response.status === 401) return;
    dispatch({
      type: actionTypes.CREATE_DEVICE_ERROR,
      payload: { msg: error.response.data.msg },
    });
  }
  clearAlert(dispatch);
};

export const setEditDevice = (dispatch, deviceId) => {
  dispatch({
    type: actionTypes.SET_EDIT_DEVICE,
    payload: deviceId,
  });
};

export const deleteDevice = async (dispatch, deviceId) => {
  dispatch({ type: actionTypes.EXECUTE_NEW_REQUEST });
  try {
    await authFetch.delete(`/device/${deviceId}`);
    getDevices(dispatch);
  } catch (error) {
    logoutUser(dispatch);
  }
};

export const editDevice = async (dispatch, device) => {
  dispatch({ type: actionTypes.EXECUTE_NEW_REQUEST });
  const { _id: deviceId, ...deviceToBeUpdated } = device;
  try {
    await authFetch.put(`/device/${deviceId}`, { ...deviceToBeUpdated });
    dispatch({ type: actionTypes.EDIT_JOB_SUCCESS });
    dispatch({ type: actionTypes.HANDLE_CLEAR_FORM_VALUES }); //clear form values
    getDevices(dispatch);
  } catch (error) {
    if (error.response.status === 401) return; //error handled by axios interceptor
    dispatch({
      type: actionTypes.EDIT_DEVICE_ERROR,
      payload: { msg: error.response.data.msg },
    });
  }
  clearAlert(dispatch);
};



export const showStats = async (dispatch, deviceId) => {
  dispatch({ type: actionTypes.EXECUTE_NEW_REQUEST });
  try {
    const { data } = await authFetch(`/read?deviceId=${deviceId}&type=lastHour`);
    const { lineVoltage=0, lineCurrent=0, frequency=0, energy=0, power=0, pf=0} = data.reads;
    dispatch({
      type: actionTypes.SHOW_STATS_SUCCESS,
      payload: {
        stats: data.reads,
        overview : {
          lineVoltage,
          lineCurrent,
          frequency,
          energy, 
          power,
          pf
        }
      },
    });
  } catch (error) {
    logoutUser(dispatch);
  }
  clearAlert(dispatch);
};

export const updateStats = (dispatch, payload) => {
  const { timestamp, lineVoltage=0, lineCurrent=0, frequency=0, energy=0, power=0, pf=0} = payload;
  dispatch({ type: actionTypes.EXECUTE_NEW_REQUEST });
  dispatch({
    type: actionTypes.UPDATE_STATS_REALTIME,
    payload: {
      overview : {
        lineVoltage,
        lineCurrent,
        frequency,
        energy, 
        power,
        pf
      },
      timestamp
    },
  });
}

export const setSocketIOConnected = (dispatch, connected=false) => {
  dispatch({
    type: actionTypes.SET_SOCKET_CONNECTED,
    payload: connected,
  });
}

export const setSocketIORoomId = (dispatch, roomId="") => {
  dispatch({
    type: actionTypes.SET_SOCKET_ROOM_ID,
    payload: roomId,
  });
}

export const clearFilters = (dispatch) => {
  dispatch({ type: actionTypes.SEARCH_CLEAR_FILTERS });
};
