import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cell from './Cell';
import './grid.css';

function Row({ word, row }) {
  const wordle = useSelector((state) => state.game.wordle);
  const actualWord = useSelector((state) => state.actualWord);

  // useEffect(() => {
  //   console.log(actualWord);
  // }, [actualWord]);

  return (
    <div className="row">
      {
        word.length === 5 ? word.map((letter, i) => <Cell key={i} letter={letter} />)
          : [...Array(wordle.length)].map((_, i) => <Cell key={i} />)
      }
    </div>
  );
}

export default Row;
