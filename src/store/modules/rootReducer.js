import { combineReducers } from "redux";

import auth from "./auth/reducer";
import count from "./count/reducer";

export default combineReducers({
  auth,
  count
});
