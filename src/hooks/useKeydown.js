import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  actualWord, popActualWord, addWord, resetActualWord, addLetter,
} from '../actions/wordle';

import possibleWords from '../helpers/possibleWords';

const useKeyDown = () => {
  const {
    wordle, life, attemps, isCorrect,
  } = useSelector((state) => state.game);
  const actual = useSelector((state) => state.actualWord);
  const [counterLetter, setCounterLetter] = useState(0);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleKeyDown = (event) => {
    if (isCorrect) {
      event.preventDefault();
      return;
    }

    setError('');

    if (event.key === 'Backspace') {
      dispatch(popActualWord());
      setCounterLetter(counterLetter - 1);
    } else if (event.key === 'Enter' && life < attemps.length) {
      if (possibleWords.length < wordle.length) {
        setError('La palabra es demasiado corta');
      } else if (!possibleWords.includes(actual.join(''))) {
        setError('La palabra no existe');
      }
      if (error.length === 0) {
        dispatch(addWord(actual));
        dispatch(resetActualWord());
        dispatch(addLetter());
        setCounterLetter(() => 0);
      }
    } else if (/^[a-zA-Z]{1}$/.test(event.key) && counterLetter < wordle.length) {
      dispatch(actualWord(event.key));
      setCounterLetter((prev) => prev + 1);
    } else {
      event.preventDefault();
    }
  };

  return [error, handleKeyDown];
};

export default useKeyDown;
