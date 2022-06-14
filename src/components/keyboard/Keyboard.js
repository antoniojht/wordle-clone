import React from 'react';
import Key from './Key';
import './keyboard.css';

function Keyboard() {
  const keyboardRow1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const keyboardRow2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ'];
  const keyboardRow3 = ['enviar', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'borrar'];

  return (
    // TODO: Refactor to row component
    <div className="keyboard">
      <div className="row">
        {
          keyboardRow1.map((letter, i) => <Key letter={letter} key={i} />)
        }
      </div>
      <div className="row">
        {
          keyboardRow2.map((letter, i) => <Key letter={letter} key={i} />)
        }
      </div>
      <div className="row">
        {
          keyboardRow3.map((letter, i) => <Key letter={letter} key={i} />)
        }
      </div>
    </div>
  );
}

export default Keyboard;
