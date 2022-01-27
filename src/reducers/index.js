import { combineReducers } from "redux";
import { UPDATE_EMPLOYEES, UPDATE_FILTERS } from "../actions";

export const defaultData = {
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
    default:
      return data;
  }
};

export default combineReducers({
  data: employeeDataReducer,
});