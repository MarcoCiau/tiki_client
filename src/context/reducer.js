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
        };
    case actionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };
    case actionTypes.CHANGE_PAGE:
      return {
        ...state,
        page: action.payload.page
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
    case actionTypes.UPDATE_USER_BEGIN:
      return {
        ...state,
        isLoading: true,
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
      }
    case actionTypes.HANDLE_FORM_INPUT_CHANGE:
      return {
        ...state,
        page: 1,
        [action.payload.name] : action.payload.value
      }
    case actionTypes.HANDLE_CLEAR_FORM_VALUES:
      return {
        ...state,
        isEditing: false,
        editJobId: "",
        position: "",
        company:"",
        jobLocation: state.userLocation,
        status: "pending"
      }
      case actionTypes.CREATE_JOB_BEGIN:
        return {
          ...state,
          isLoading: true,
        }
      case actionTypes.CREATE_JOB_SUCCESS:
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: 'success',
          alertText: 'New Job Created!',
        }
      case actionTypes.CREATE_JOB_ERROR:
        return {
          ...state,
          isLoading: false,
          showAlert: true,
          alertType: 'danger',
          alertText: action.payload.msg,
        }
        case actionTypes.CREATE_DEVICE_SUCCESS:
          return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'success',
            alertText: 'New Device Created!',
          }
        case actionTypes.CREATE_DEVICE_ERROR:
          return {
            ...state,
            isLoading: false,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
          }
      case actionTypes.GET_JOBS_BEGIN:
      return {
        ...state,
        isLoading: true,
        showAlert: false,
      };
    case actionTypes.GET_JOBS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jobs: action.payload.jobs,
        totalJobs: action.payload.totalJobs,
        numOfPages: action.payload.numOfPages,
      };
    case actionTypes.GET_JOB_CLEAR_FILTERS:
      return {
        ...state,
        search: '',
        searchStatus: 'all',
        searchType: 'all',
        sort: 'latest',
      };

    case actionTypes.SET_EDIT_JOB://TODO: delete here
      // const job = state.jobs.find((job) => job._id === action.payload.id)
      const { _id, position, company, jobLocation, jobType, status } = action.payload.job;
      return {
        ...state,
        isEditing: true,
        editJobId: _id,
        position,
        company,
        jobLocation,
        jobType,
        status,
      }
    case actionTypes.DELETE_JOB_BEGIN:
    case actionTypes.EDIT_JOB_BEGIN:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.EDIT_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: 'Job Updated!',
      }
    case actionTypes.EDIT_JOB_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      }
    case actionTypes.SHOW_STATS_BEGIN:
      return {
        ...state,
        isLoading: true,
        showAlert: false,
      }
      case actionTypes.SHOW_STATS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          stats: action.payload.stats,
          monthlyApplications: action.payload.monthlyApplications,
        }
    default:
      return state;
  }
};

export default reducer;
