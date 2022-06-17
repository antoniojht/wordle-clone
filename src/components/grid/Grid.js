import { useSelector } from 'react-redux';
import Row from './Row';
import './grid.css';

function Grid() {
  const attemps = useSelector((state) => state.game.attemps);

  return (
    <div className="grid">
      {
        attemps.map((word, i) => <Row key={i} word={word} row={i} />)
      }
    </div>
  );
}

export default Grid;
