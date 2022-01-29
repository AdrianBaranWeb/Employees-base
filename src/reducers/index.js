import { combineReducers } from "redux";
import { UPDATE_EMPLOYEES, UPDATE_FILTERS, LOGIN_ADMIN, LOG_OUT_ADMIN } from "../actions";

export const defaultData = {
  isAdmin: true,
  employeeList: [],
  filters: {
    positions: '',
    departments: '',
    employeeName: ''
  }
}

const employeeDataReducer = (data = defaultData, action) => {
  switch (action.type) {
    case UPDATE_EMPLOYEES:
      return { ...data, employeeList: action.payload };
    case UPDATE_FILTERS:
      return {...data, filters: {...data.filters, ...action.payload}}
    case LOGIN_ADMIN:
      return {...data, isAdmin: true}
    case LOG_OUT_ADMIN:
      return {...data, isAdmin: false}
    default:
      return data;
  }
};

export default combineReducers({
  data: employeeDataReducer,
});