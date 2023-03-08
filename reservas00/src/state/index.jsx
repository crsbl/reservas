import { combineReducers } from "redux";
import calendarReducer from "./calendar/index";
import modalAlert from "./modalAlert/index";
export default combineReducers({
  calendarReducer,
  modalAlert,
});
