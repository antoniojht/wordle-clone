import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Cell from './Cell';
import './grid.css';

function Row({ word, row }) {
  const wordle = useSelector((state) => state.game.wordle);
  const actualWord = useSelector((state) => state.actualWord);
  const life = useSelector((state) => state.game.life);

  const [actualRow, setActualRow] = useState([]);

  useEffect(() => {
    const emptyCells = [...Array(wordle.length - actualWord.length)].map(() => '');
    setActualRow([...actualWord, ...emptyCells]);
  }, [actualWord]);

  if (word.length === 5) {
    return (
      <div className="row">
        {
          word.map((letter, i) => <Cell key={i} letter={letter} cellId={i} />)
        }
      </div>
    );
  }
  if (actualWord.length > 0 && row === life) {
    return (
      <div className="row">
        {
          actualRow.map((letter, i) => <Cell key={i} letter={letter} actual />)
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
