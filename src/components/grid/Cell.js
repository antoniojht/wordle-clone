import classNames from 'classnames';
import './grid.css';

function Cell({ cellId, letter = '', actual = false }) {
  const cellClass = classNames(
    {
      square__letter: true,
      [`square--invalid square${cellId}`]: letter && !letter.valid && !actual,
      [`square--valid square${cellId}`]: letter && letter.valid && letter.position && !actual,
      [`square--position square${cellId}`]: letter && letter.valid && !letter.position && !actual,
      'square--border': (!actual && letter.length === 0) || (actual && letter.length === 0),
      'square--writting': actual && letter.length > 0,
    },
  );
  return (
    <div className="square">
      <div className={cellClass}>
        {
          actual ? letter : letter.letter
        }
      </div>
    </div>
  );
}

export default Cell;
