import { useEffect } from 'react';

import Navbar from './components/navbar/Navbar';
import Grid from './components/grid/Grid';
import Keyboard from './components/keyboard/Keyboard';

import './app.css';
import possibleWords from './helpers/possibleWords';
import useKeyDown from './hooks/useKeydown';

function App() {
  const [error, handleKeyDown] = useKeyDown();

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
