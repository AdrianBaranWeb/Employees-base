import { combineReducers } from "redux";
import { UPDATE_EMPLOYEES } from "../actions";

export const defaultData = {
  employeeList: [],
  filters: {
    position: '',
    department: '',
    employeeData: ''
  }
}

const employeeDataReducer = (data = defaultData, action) => {
  switch (action.type) {
    case UPDATE_EMPLOYEES:
      return { ...data, employeeList: action.payload };
    default:
      return data;
  }
};

export default combineReducers({
  data: employeeDataReducer,
});