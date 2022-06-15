import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addWord, actualWord } from './actions/wordle';

import Navbar from './components/navbar/Navbar';
import Grid from './components/grid/Grid';
import Keyboard from './components/keyboard/Keyboard';

import './app.css';

function App() {
  const dispatch = useDispatch();
  const [word, setWord] = useState([]);

  // TODO: Validations: Number -> error message.
  // TODO: Extract to new action/reducer into switch case
  const handleKeyDown = (event) => {
    if (event.key === 'Backspace' && word.length > 0) {
      const wordClone = [...word];
      wordClone.pop();
      setWord(wordClone);
    } else if (event.key === 'Enter' && word.length === 5) {
      dispatch(addWord(word.join()));
    } else {
      // setWord((prevWord) => [...prevWord, event.key]);
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
