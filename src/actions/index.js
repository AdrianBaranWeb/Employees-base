export const UPDATE_EMPLOYEES =  "UPDATE_EMPLOYEES"

export const updateData = (data) => {
  return {
    type: UPDATE_EMPLOYEES,
    payload: data,
  };
};