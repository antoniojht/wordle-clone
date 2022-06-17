import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cell from './Cell';
import './grid.css';

function Row({ word, row }) {
  const wordle = useSelector((state) => state.game.wordle);
  const actualWord = useSelector((state) => state.actualWord);
  const life = useSelector((state) => state.game.life);

  useEffect(() => {
    // FIX: fill actualWord for each change
    actualWord.fill('', actualWord.length, wordle);
  }, [actualWord]);

  if (word.length === 5) {
    return (
      <div className="row">
        {
          word.map((letter, i) => <Cell key={i} letter={letter} />)
        }
      </div>
    );
  }
  if (actualWord.length > 0 && row === life) {
    return (
      <div className="row">
        {
          actualWord.map((letter, i) => <Cell key={i} letter={letter} actual />)
        }
      </div>
    );
  }
  return (
    <div className="row">
      {
        [...Array(wordle.length)].map((_, i) => <Cell key={i} />)
      }
    </div>
  );
}

export default Row;
