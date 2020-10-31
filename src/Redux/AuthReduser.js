import { stopSubmit } from "redux-form";
import { authAPI } from "../API/api";

const SET_URER_DATA = "SET_URER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  resultCode: 0,
  messages: [],
  data: {
    id: null,
    email: null,
    login: null,
    isFinite: false,
    isAuth: false,
  },
};
const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_URER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};
export const setAuthUsersData = (id, email, login, isAuth) => {
  return {
    type: SET_URER_DATA,
    payload: { id, email, login, isAuth },
  };
};
export const setIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const authUsers = () => async (dispatch) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUsersData(id, email, login, true));
  }
};
export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(authUsers());
  } else {
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "some error";
    dispatch(
      stopSubmit("login", {
        email: message,
        password: message,
      })
    );
  }
};
export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUsersData(null, null, null, false));
  }
};

export default authReduser;
