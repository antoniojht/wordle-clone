import { useEffect } from 'react';

import Navbar from './components/navbar/Navbar';
import Grid from './components/grid/Grid';
import Keyboard from './components/keyboard/Keyboard';

import './app.css';

import useWrite from './hooks/useWrite';

function App() {
  const [error, handleKeyDown] = useWrite();

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div className="container">
      <Navbar />
      {error && <div className="modal">{error}</div>}
      <Grid />
      <Keyboard />
    </div>
  );
}

export default App;
