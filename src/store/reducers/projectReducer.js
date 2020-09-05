const initState = {
  projects: [
    { id: '1', title: 'Do homework', content: 'Do and complete some homework' },
    { id: '2', title: 'Learn to code', content: 'Do and practice some code' },
    { id: '3', title: 'Play a game', content: 'Play a game, be happy' },
  ],
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
