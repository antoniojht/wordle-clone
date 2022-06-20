import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import classNames from 'classnames';
import { FaStepBackward } from 'react-icons/fa';

import './keyboard.css';

function Key({ letter }) {
  const letterUsed = useSelector((state) => state.game.lettersUsed);

  let obj = letterUsed.find((data) => data.letter === letter && data.position);

  if (!obj) {
    obj = letterUsed.find((data) => data.letter === letter && !data.position);
  }

  const keyClass = classNames(
    {
      letter: true,
      'letter--invalid': !obj?.valid,
      'letter--valid': obj?.valid && obj.position,
      'letter--position': obj?.valid && !obj.position,
    },
  );

  return (
    <button type="button" className={keyClass}>
      {(letter === 'borrar') ? <FaStepBackward /> : letter.toUpperCase()}
    </button>
  );
}

export default Key;
