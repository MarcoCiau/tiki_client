import axios from "axios";
import React, { useContext, useReducer } from "react";
import { logoutUser } from "./actions";
import reducer from "./reducer";

const user = localStorage.getItem('user');
//App State
const initialState = {
  stats: {},
  monthlyApplications: [],
  isLoading: false,
  showAlert: false,
  showSidebar: false,
  showModal: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: localStorage.getItem('token'),
  refreshToken: localStorage.getItem("refreshToken"),
  userLocation: localStorage.getItem('location') || '',
  jobLocation: localStorage.getItem('location') || '',
  isEditing: false,
  editJobId: '',
  position: '',
  company: '',
  statusOptions: ['unknow', 'connected', 'disconnected'],
  status: 'unknow',
  devices: [],
  totalDevices : 0,
  numOfPages : 1,
  page: 1,
  jobs: [],
  totalJobs: 0,
  search: '',
  searchStatus: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

//creating a global context
const AppContext = React.createContext();

//global axios instance for protected end-points (require bearer token)
export const authFetch = axios.create({
  baseURL: 'http://localhost:4000/api/v1',//TODO: setup env variable
})
//Defining a provider (wrapper)
//Wrap child components in the Context Provider and supply the state value.
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // request
  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common['x-token'] = localStorage.getItem('token');//TODO: setup env variable
      // config.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
      return config;
    },
    (error) => {
      return Promise.reject(error)
    }
  );

  // response
  authFetch.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser(dispatch);
      }
      return Promise.reject(error)
    }
  );
  
  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// utility class to access to the app's global state values
export const useAppContext = () => {
  return useContext(AppContext);
};
