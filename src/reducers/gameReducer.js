import checkLetter from '../helpers/checkLetter';
import checkWord from '../helpers/checkWord';
import types from '../types/typesActions';

// EXAMPLE
//   wordle: 'amigo',
//   attemps: [['rosas'],[],...],
//   life: 1
//   wordsUsed: ['rosas'],   (Refactor this to array of attemps)
//   letterUsed: [{letter:'r', valid: false, ...}]

const initialState = {
  wordle: 'amigo',
  attemps: [
    [], [], [], [], [], []],
  life: 0,
  lettersUsed: [],
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
    case types.addLetter: {
      const letters = checkLetter(state.attemps);
      return {
        ...state,
        lettersUsed: letters,
      };
    }
    case types.addWordUsed: {
      const wordsCopy = [...state.attemps];
      const wordChecked = checkWord(state.wordle, action.payload.word);
      wordsCopy[state.life] = wordChecked;

      return {
        ...state,
        life: state.life + 1,
        isCorrect: state.wordle === action.payload.word.join(''),
        attemps: [...wordsCopy],
      };
    }

    default:
      return state;
  }
};

export default gameReducer;
