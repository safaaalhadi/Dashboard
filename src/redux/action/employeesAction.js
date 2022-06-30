import { employeesType } from "../contants/employeesType";

export const setEmployees = (payload) => {
  return {
    type: employeesType.SET_EMPLOYEES,
    payload: payload,
  };
};

