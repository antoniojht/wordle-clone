import checkLetter from '../helpers/checkLetter';
import checkWord from '../helpers/checkWord';
import types from '../types/typesActions';
import possibleWords from '../helpers/possibleWords';

const initialState = {
  wordle: possibleWords[Math.floor(Math.random() * possibleWords.length)],
  attemps: [
    [], [], [], [], [], []],
  life: 0,
  lettersUsed: [],
  isCorrect: false,
  error: '',
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

    case types.addError:
      return {
        ...state,
        error: action.payload.error,
      };

    case types.removeError:
      return {
        ...state,
        error: '',
      };

    default:
      return state;
  }
};

export default gameReducer;
