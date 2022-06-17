import './grid.css';

function Cell({ letter = '' }) {
  return (
    <div className="square">
      <p>{letter.letter}</p>
    </div>
  );
}

export default Cell;
