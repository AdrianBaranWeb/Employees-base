export const UPDATE_EMPLOYEES =  "UPDATE_EMPLOYEES"
export const UPDATE_FILTERS =  "UPDATE_FILTERS"
export const LOGIN_ADMIN =  "LOGIN_ADMIN"

export const updateData = (data) => {
  return {
    type: UPDATE_EMPLOYEES,
    payload: data,
  };
};

export const updateFilters = (data) => {
  return {
    type: UPDATE_FILTERS,
    payload: data,
  };
};

export const loginAdmin = () => {
  return {
    type: LOGIN_ADMIN,
  };
};