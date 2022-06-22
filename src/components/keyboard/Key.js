import { useSelector } from 'react-redux';

import classNames from 'classnames';
import { FaStepBackward } from 'react-icons/fa';

import './keyboard.css';
import useWrite from '../../hooks/useWrite';

function Key({ letter }) {
  const letterUsed = useSelector((state) => state.game.lettersUsed);
  const [, handleWrite] = useWrite();

  let obj = letterUsed.find((data) => data.letter === letter && data.position);

  if (!obj) {
    obj = letterUsed.find((data) => data.letter === letter && !data.position);
  }

  const keyClass = classNames(
    {
      letter: true,
      letter__enviar: letter === 'enviar',
      letter__borrar: letter === 'borrar',
      'letter--invalid': obj && !obj?.valid && !obj?.position,
      'letter--valid': obj?.valid && obj.position,
      'letter--position': obj?.valid && !obj.position,
    },
  );

  return (
    <button type="button" className={keyClass} onClick={() => handleWrite(letter)}>
      {(letter === 'borrar') ? <FaStepBackward /> : letter.toUpperCase()}
    </button>
  );
}

export default Key;
