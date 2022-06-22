import { useDispatch, useSelector } from 'react-redux';

import {
  actualWord, popActualWord, addWord, resetActualWord, addLetter,
  addError, removeError,
} from '../actions/wordle';

import possibleWords from '../helpers/possibleWords';

const useWrite = () => {
  const {
    wordle, life, attemps, isCorrect, error,
  } = useSelector((state) => state.game);
  const actual = useSelector((state) => state.actualWord);

  const dispatch = useDispatch();

  const handleWrite = (event) => {
    const letter = event.key || event;
    if (isCorrect || life === attemps.length) {
      return;
    }

    dispatch(removeError());

    if (letter === 'Backspace' || letter === 'borrar') {
      dispatch(popActualWord());
    } else if ((letter === 'Enter' || letter === 'enviar') && life < attemps.length) {
      if (possibleWords.length < wordle.length) {
        dispatch(addError('La palabra es demasiado corta'));
      } else if (!possibleWords.includes(actual.join(''))) {
        dispatch(addError('La palabra no existe'));
        return;
      }
      if (error.length === 0) {
        dispatch(addWord(actual));
        dispatch(resetActualWord());
        dispatch(addLetter());
      }
    } else if (/^[a-zA-ZñÑ]{1}$/.test(letter) && actual.length < wordle.length) {
      dispatch(actualWord(letter));
    }
  };

  return [error, handleWrite];
};

export default useWrite;
