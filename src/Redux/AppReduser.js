import { authUsers } from "./AuthReduser";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
  initialized: false,
};
const appReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: action.t,
      };
    default:
      return state;
  }
};
export const InitializedSuccess = (t) => ({ type: SET_INITIALIZED, t });
export const initializedApp = () => (dispatch) => {
  let promise = dispatch(authUsers());
  Promise.all([promise]).then(() => {
    dispatch(InitializedSuccess(true));
  });
};

export default appReduser;
