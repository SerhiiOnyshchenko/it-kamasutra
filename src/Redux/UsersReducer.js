import { usersAPI } from "../API/api";

const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IN_FOLLOWING_PROGRESS = "TOGGLE_IN_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 9,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: !u.followed };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.count };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IN_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgres: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};
export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const toggleFollowingProgress = (followingInProgress, userId) => ({
  type: TOGGLE_IN_FOLLOWING_PROGRESS,
  followingInProgress,
  userId,
});
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (count) => ({
  type: SET_TOTAL_COUNT,
  count,
});
export const setIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setIsFetching(true));
  let data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};
const followUnfollowFlow = async (dispatch, userId, apiMethode) => {
  dispatch(toggleFollowingProgress(true, userId));
  let response = await apiMethode(userId);
  if (response.data.resultCode === 0) {
    dispatch(toggleFollow(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};
export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.FollowPost.bind(usersAPI));
};

export const unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.UnfollowDelete.bind(usersAPI));
};

export default usersReduser;
