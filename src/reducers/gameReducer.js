import types from '../types/typesActions';

//   wordle: 'amigo',
//   attemps: 6,
//   lettersUsed: ['r','o','s','a','s'],
//   wordsUsed: [{letter:'r', valid: false, ...}],

const initialState = {
  wordle: 'amigo',
  attemps: 6,
  lettersUsed: [],
  wordsUsed: [{}],
};

export const gameReducer = (action, state = initialState) => {
  switch (action.type) {
    case types.decreaseAttemp:
      return {
        ...action.payload,
        attemps: action.payload.attemps - 1,
      };
    default:
      return state;
  }
};

export default gameReducer;
