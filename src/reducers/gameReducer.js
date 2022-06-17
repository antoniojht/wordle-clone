import types from '../types/typesActions';

// EXAMPLE
//   wordle: 'amigo',
//   attemps: [['rosas'],[],...],
//   life: 1
//   wordsUsed: ['rosas'],   (Refactor this to array of attemps)
//   letterUsed: [{letter:'r', valid: false, ...}]

// TODO: Init attemps to empty array.
const initialState = {
  wordle: 'amigo',
  attemps: [
    [
      { letter: 'r', valid: false, position: false },
      { letter: 'o', valid: true, position: false },
      { letter: 's', valid: false, position: false },
      { letter: 'a', valid: true, position: false },
      { letter: 's', valid: false, position: false },
    ], [
      { letter: 'p', valid: false, position: false },
      { letter: 'a', valid: true, position: false },
      { letter: 'd', valid: false, position: false },
      { letter: 'r', valid: false, position: false },
      { letter: 'e', valid: false, position: false },
    ], [], [], [], []],
  life: 2,
  lettersUsed: [],
  // remove wordsUsed by attemps.
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
        state.life += 1;
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
