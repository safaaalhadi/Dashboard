import { adminTypes, employeesType } from "../contants/employeesType";


const allEmployees = [];
const  isAdmin = true;
export const SetEmployeesReducer = (state = allEmployees,{ type, payload }) => {
  switch (type) {
    case employeesType.SET_EMPLOYEES:
      return [...payload];

    default:
      return state;
  }
};


export const setAdmin = (state = isAdmin,{type ,allow})=> {
  switch (type) {
    case adminTypes.SET_ADMIN:
      return allow;
      default:
        return state;
  }
}





