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
  lettersUsed: [],
  wordsUsed: [],
  isCorrect: false,
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
      if (state.wordle.includes(action.payload.letter)) {
        action.payload.valid = true;
      }

      return {
        ...state,
        lettersUsed: [...state.lettersUsed, action.payload],
      };
    case types.addWordUsed:
      if (state.wordle === action.payload.word) {
        state.isCorrect = true;
      }

      return {
        ...state,
        wordsUsed: [...state.wordsUsed, action.payload.word],
      };
    default:
      return state;
  }
};

export default gameReducer;
