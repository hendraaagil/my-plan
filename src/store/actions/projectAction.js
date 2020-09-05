export const createProject = (project) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    // Make async call to database
    const firestore = getFirestore();
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: 'Agil',
        authorLastName: 'Syaputra',
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT', project });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err });
      });
  };
};
