export const createProject = (project) => {
  return (dispatch, getState) => {
    // Make async call to database
    dispatch({ type: 'CREATE_PROJECT', project });
  };
};
