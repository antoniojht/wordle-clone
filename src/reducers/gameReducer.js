import types from '../types/typesActions';

// EXAMPLE
//   wordle: 'amigo',
//   attemps: [['rosas'],[],...],
//   life: 5
//   wordsUsed: ['rosas'],   (Refactor this to array of attemps)
//   letterUsed: [{letter:'r', valid: false, ...}]

const initialState = {
  wordle: 'amigo',
  attemps: [
    [
      { letter: 'r', valid: false },
      { letter: 'o', valid: false },
      { letter: 's', valid: false },
      { letter: 'a', valid: false },
      { letter: 's', valid: false },
    ], [], [], [], [], []],
  life: 6,
  lettersUsed: [],
  wordsUsed: [],
  isCorrect: false,
};

// eslint-disable-next-line default-param-last
const gameReducer = (state = initialState, action) => {
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
      } else {
        state.isCorrect = true;
        state.life -= 1;
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
