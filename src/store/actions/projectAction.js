export const createProject = (project) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    // Make async call to database
    dispatch({ type: 'CREATE_PROJECT', project });
  };
};
