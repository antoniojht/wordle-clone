import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actualWord, popActualWord } from './actions/wordle';

import Navbar from './components/navbar/Navbar';
import Grid from './components/grid/Grid';
import Keyboard from './components/keyboard/Keyboard';

import './app.css';

function App() {
  const wordle = useSelector((state) => state.game.wordle);
  const actualRow = useSelector((state) => state.actualWord);

  const dispatch = useDispatch();

  // TODO: Extract to new action/reducer into switch case
  const handleKeyDown = (event) => {
    if (event.key === 'Backspace') {
      dispatch(popActualWord());
    } else if (event.key === 'Enter') {
      // dispatch(addWord(word.join()));
    } else if (/^[a-zA-Z]{1}$/.test(event.key)) {
      dispatch(actualWord(event.key));
    } else {
      event.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
