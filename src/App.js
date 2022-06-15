import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { actualWord, popActualWord } from './actions/wordle';

import Navbar from './components/navbar/Navbar';
import Grid from './components/grid/Grid';
import Keyboard from './components/keyboard/Keyboard';

import './app.css';

function App() {
  const dispatch = useDispatch();

  // TODO: Validations: Number -> error message.
  // TODO: Extract to new action/reducer into switch case
  const handleKeyDown = (event) => {
    if (event.key === 'Backspace') {
      dispatch(popActualWord());
    } else if (event.key === 'Enter') {
      // dispatch(addWord(word.join()));
    } else {
      dispatch(actualWord(event.key));
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
