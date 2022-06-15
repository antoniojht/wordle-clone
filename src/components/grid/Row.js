import { useSelector } from 'react-redux';
import Cell from './Cell';
import './grid.css';

function Row() {
  const wordle = useSelector((state) => state.game.wordle);

  return (
    <div className="row">
      {[...Array(wordle.length)].map((_, i) => <Cell key={i} />)}
    </div>
  );
}

export default Row;
