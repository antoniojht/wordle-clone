import React from 'react';
import './keyboard.css';
import { FaStepBackward } from 'react-icons/fa';

function Key({ letter }) {
  return (
    <div className="letter">
      {(letter === 'borrar') ? <FaStepBackward /> : letter.toUpperCase()}
    </div>
  );
}

export default Key;
