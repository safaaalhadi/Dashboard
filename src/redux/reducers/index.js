import { combineReducers } from "redux";
import { setAdmin, SetEmployeesReducer } from "./employeesReducer";

const reducer = combineReducers({
  allMembers: SetEmployeesReducer,
  isAdmin : setAdmin,

});

export default reducer;
