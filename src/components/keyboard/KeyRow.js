import React from 'react';
import Key from './Key';

function KeyRow({ row }) {
  return (
    <div className="row">
      {
        row.map((letter, i) => <Key letter={letter} key={i} />)
      }
    </div>
  );
}

export default KeyRow;
