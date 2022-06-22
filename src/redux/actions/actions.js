import { actionTypes } from "./actionTypes";
export const displayAlert = { type: actionTypes.uiDisplayAlert };

export const clearAlert = { type: actionTypes.uiClearAlert };

// export const clearAlert = () => {
//   setTimeout(() => {
//     return { type: actionTypes.uiClearAlert };
//   }, 3000);
// };
