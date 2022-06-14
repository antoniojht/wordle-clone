import types from '../types/typesActions';

// EXAMPLE
//   wordle: 'amigo',
//   attemps: 6,
//   life: 5
//   wordsUsed: ['rosas'],
//   letterUsed: [{letter:'r', valid: false, ...}]

const initialState = {
  wordle: 'amigo',
  attemps: 6,
  life: 6,
  lettersUsed: [{}],
  wordsUsed: [],
};

// eslint-disable-next-line default-param-last
export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.decreaseAttemp:
      return {
        ...state,
        life: action.payload.life - 1,
      };
    case types.addLetter:
      return {
        ...state,
        letterUsed: [...action.payload, action.payload.letterUsed],
      };
    case types.addWordUsed:
      return {
        ...state,
        wordsUsed: [...action.payload, action.payload.wordsUsed],
      };
    default:
      return state;
  }
};

export default gameReducer;
