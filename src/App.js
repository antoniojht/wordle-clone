import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  actualWord, popActualWord, addWord, resetActualWord, addLetter,
} from './actions/wordle';

import Navbar from './components/navbar/Navbar';
import Grid from './components/grid/Grid';
import Keyboard from './components/keyboard/Keyboard';

import './app.css';

function App() {
  const wordle = useSelector((state) => state.game.wordle);
  const actual = useSelector((state) => state.actualWord);
  const [counterLetter, setCounterLetter] = useState(0);

  const dispatch = useDispatch();

  // TODO: extract
  const handleKeyDown = (event) => {
    if (event.key === 'Backspace') {
      dispatch(popActualWord());
      setCounterLetter(counterLetter - 1);
    } else if (event.key === 'Enter') {
      dispatch(addWord(actual));
      dispatch(resetActualWord());
      dispatch(addLetter());
      setCounterLetter(() => 0);
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
        <Grid />
      </div>
      <Keyboard />
    </>
  );
}

export default App;
