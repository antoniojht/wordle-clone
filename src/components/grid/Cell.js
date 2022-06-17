import './grid.css';

function Cell({ letter = '', actual = false }) {
  return (
    <div className="square">
      <p className="square__letter">
        {
        actual ? letter : letter.letter
      }
      </p>
    </div>
  );
}

export default Cell;
