import { actionTypes } from "./actionsTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: "danger",
        alertText: "Please provide all values",
      };
    case actionTypes.CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: "",
        alertText: "",
      };
    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
        isEditing: false,
        editDeviceId: "",
        editDeviceObj: {},
      };
    case actionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };
    case actionTypes.HANDLE_FORM_INPUT_CHANGE:
      return {
        ...state,
        page: 1,
        [action.payload.name]: action.payload.value,
      };
    case actionTypes.HANDLE_CLEAR_FORM_VALUES:
      return {
        ...state,
        isEditing: false,
        editDeviceId: "",
        editDeviceObj: {},
      };
    case actionTypes.EXECUTE_NEW_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        userLocation: action.payload.user.location,
        jobLocation: action.payload.user.location,
        isLoading: false,
        showAlert: true,
        alertType: "success",
        alertText: "User Created! Redirecting...",
      };
    case actionTypes.REGISTER_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: action.payload.msg,
      };
    case actionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        userLocation: action.payload.user.location,
        jobLocation: action.payload.user.location,
        isLoading: false,
        showAlert: true,
        alertType: "success",
        alertText: "Login Successful! Redirecting...",
      };
    case actionTypes.LOGIN_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: action.payload.msg,
      };
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        user: null,
        token: null,
        isLoading: false,
        userLocation: "",
        jobLocation: "",
      };
    case actionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        userLocation: action.payload.user.location,
        jobLocation: action.payload.user.location,
        isLoading: false,
        showAlert: true,
        alertType: "success",
        alertText: "User Profile Updated!",
      };
    case actionTypes.UPDATE_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: action.payload.msg,
      };
    case actionTypes.GET_DEVICES_SUCESS:
      return {
        ...state,
        devices: action.payload.devices,
        isLoading: false,
        totalDevices: action.payload.totalDevices,
        numOfPages: action.payload.numOfPages,
      };

    case actionTypes.CREATE_DEVICE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "success",
        alertText: "New Device Created!",
      };
    case actionTypes.CREATE_DEVICE_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: action.payload.msg,
      };
    case actionTypes.SET_EDIT_DEVICE:
      const deviceEdit = state.devices.find(
        ({ _id }) => _id === action.payload
      );
      return {
        ...state,
        isEditing: true,
        showModal: true,
        editDeviceId: action.payload,
        editDeviceObj: deviceEdit,
      };
    case actionTypes.EDIT_DEVICE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "success",
        alertText: "Device Updated!",
      };
    case actionTypes.EDIT_DEVICE_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: action.payload.msg,
      };

    case actionTypes.SHOW_STATS_BEGIN:
      return {
        ...state,
        isLoading: true,
        showAlert: false,
      };
    case actionTypes.SHOW_STATS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        voltageTimeSeries: action.payload.stats.voltage,
        amperageTimeSeries: action.payload.stats.current,
        energyTimeSeries: action.payload.stats.activeKwh,
        frequencyTimeSeries: action.payload.stats.frequencyTS,
        overview: action.payload.overview,
      };
    case actionTypes.UPDATE_STATS_REALTIME:
      if (state.voltageTimeSeries.length > 50) {
        state.voltageTimeSeries.pop();
      }
      if (state.amperageTimeSeries.length > 50) {
        state.amperageTimeSeries.pop();
      }
      if (state.energyTimeSeries.length > 50) {
        state.energyTimeSeries.pop();
      }
      if (state.frequencyTimeSeries.length > 50) {
        state.frequencyTimeSeries.pop();
      }
      return {
        ...state,
        isLoading: false,
        voltageTimeSeries: [
          {
            timestamp: new Date(action.payload.timestamp * 1000),
            value: action.payload.overview.lineVoltage,
          },
          ...state.voltageTimeSeries,
        ],
        amperageTimeSeries: [
          {
            timestamp: new Date(action.payload.timestamp * 1000),
            value: action.payload.overview.lineCurrent,
          },
          ...state.amperageTimeSeries,
        ],
        energyTimeSeries: [
          {
            timestamp: new Date(action.payload.timestamp * 1000),
            value: action.payload.overview.energy,
          },
          ...state.energyTimeSeries,
        ],
        frequencyTimeSeries: [
          {
            timestamp: new Date(action.payload.timestamp * 1000),
            value: action.payload.overview.frequency,
          },
          ...state.frequencyTimeSeries,
        ],
        overview: action.payload.overview,
      };
    case actionTypes.SET_SOCKET_CONNECTED:
      return {
        ...state,
        socketIsConnected: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
