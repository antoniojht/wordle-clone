import { useStore } from 'react-redux';
import Cell from './Cell';
import './grid.css';

function Row() {
  const store = useStore();
  const { wordle } = store.getState();
  const lengthWord = wordle.length;

  return (
    <div className="row">
      {[...Array(lengthWord)].map((_, i) => <Cell key={i} />)}
    </div>
  );
}

export default Row;
