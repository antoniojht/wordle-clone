import React, { useEffect } from 'react';

import KeyRow from './KeyRow';
import './keyboard.css';

function Keyboard() {
  const keyboard = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ'],
    ['enviar', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'borrar'],
  ];

  return (
    <div className="keyboard">
      {
        keyboard.map((row, i) => <KeyRow row={row} key={i} />)
      }
    </div>
  );
}

export default Keyboard;
