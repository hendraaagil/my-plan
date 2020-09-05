const initState = {
  projects: [
    { id: '1', title: 'Do homework', content: 'Do and complete some homework' },
    { id: '2', title: 'Learn to code', content: 'Do and practice some code' },
    { id: '3', title: 'Play a game', content: 'Play a game, be happy' },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      break;
    default:
      break;
  }
  return state;
};

export default projectReducer;
