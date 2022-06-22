import { actionTypes } from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.uiDisplayAlert:
      return {
        ...state,
        showAlert: true,
        alertType: "danger",
        alertText: "Please provide all values!",
      };
    case actionTypes.uiClearAlert:
      return {
        ...state,
        showAlert: false,
        alertType: "",
        alertText: "",
      };
    default:
      return state;
  }
};
