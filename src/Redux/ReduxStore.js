import profileReduser from "./ProfileReduser";
import dialogReduser from "./DialogReduser";
import sideBarReduser from "./SideBarReduser";
import usersReduser from "./UsersReducer";
import authReduser from "./AuthReduser";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReduser from "./AppReduser";

let reducers = combineReducers({
  profilePage: profileReduser,
  dialogPage: dialogReduser,
  sideBar: sideBarReduser,
  usersPage: usersReduser,
  auth: authReduser,
  form: formReducer,
  app: appReduser,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
export default store;
