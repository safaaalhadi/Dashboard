import { adminTypes, employeesType } from "../contants/employeesType";


const allEmployees = [];
const  isAdmin = {};
export const SetEmployeesReducer = (state = allEmployees,{ type, payload }) => {
  switch (type) {
    case employeesType.SET_EMPLOYEES:
      return [...payload];

    default:
      return state;
  }
};


export const setAdmin = (state = isAdmin,{type ,payload})=> {
  switch (type) {
    case adminTypes.SET_ADMIN:
      return {allow: true, ...payload};
      default:
        return state;
  }
}





