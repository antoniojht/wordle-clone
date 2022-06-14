import { useStore } from 'react-redux';
import Row from './Row';
import './grid.css';

function Grid() {
  const store = useStore();
  const { attemps } = store.getState();

  return (
    <div className="grid">
      {
        [...Array(attemps)].map((_, i) => <Row key={i} />)
      }
    </div>
  );
}

export default Grid;
