import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profileEcole from "./profileEcole";
export default combineReducers({ alert, auth, profileEcole });
