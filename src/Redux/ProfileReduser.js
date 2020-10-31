import { profileAPI, usersAPI } from "../API/api";

const ADD_POST = "ADD_POST";
const SET_PROFILE = "SET_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  PostData: [
    { id: 1, message: "Hi, hw are you?", count: 12 },
    { id: 2, message: "It's my first post", count: 11 },
  ],
  profile: null,
  status: "",
};
const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        PostData: [
          ...state.PostData,
          {
            id: 5,
            message: action.post,
            count: 0,
          },
        ],
      };
    case SET_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};
export const addPost = (post) => ({ type: ADD_POST, post });

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
export const getProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export default profileReduser;
