import { createContext } from 'react';
import Navbar from './components/navbar/Navbar';
import Grid from './components/grid/Grid';
import './app.css';

const wordle = {
  wordle: 'amigo',
  wordsUsed: [],
  letterUsed: [],
  tries: 6,
};

const WordleContext = createContext(wordle);

function App() {
  return (
    <WordleContext.Provider value={wordle}>
      <div className="container">
        <Navbar />
        <hr className="border" />
        <Grid />
      </div>
    </WordleContext.Provider>
  );
}

export default App;
