import Key from './Key';

import './keyboard.css';

function KeyRow({ row }) {
  return (
    <div className="keyboard__row">
      {
        row.map((letter, i) => <Key letter={letter} key={i} />)
      }
    </div>
  );
}

export default KeyRow;
