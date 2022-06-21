import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  actualWord, popActualWord, addWord, resetActualWord, addLetter,
} from './actions/wordle';

import Navbar from './components/navbar/Navbar';
import Grid from './components/grid/Grid';
import Keyboard from './components/keyboard/Keyboard';

import './app.css';
import possibleWords from './helpers/possibleWords';

function App() {
  const { wordle, life, attemps } = useSelector((state) => state.game);
  const actual = useSelector((state) => state.actualWord);
  const [counterLetter, setCounterLetter] = useState(0);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  // TODO: extract
  const handleKeyDown = (event) => {
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

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <>
      <div className="container">
        <Navbar />
        <hr className="border" />
        {error && <div className="modal">{error}</div>}
        <Grid />
      </div>
      <Keyboard />
    </>
  );
}

export default App;
