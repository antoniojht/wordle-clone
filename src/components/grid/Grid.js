import { useSelector } from 'react-redux';
import Row from './Row';
import './grid.css';

function Grid() {
  const attemps = useSelector((state) => state.game.attemps);

  return (
    <div className="grid">
      {
        [...Array(attemps)].map((_, i) => <Row key={i} />)
      }
    </div>
  );
}

export default Grid;
