import React from 'react';
import { useDispatch } from 'react-redux';
import './keyboard.css';
import { FaStepBackward } from 'react-icons/fa';
import { addLetter, addWord } from '../../actions/wordle';

function Key({ letter }) {
  const dispatch = useDispatch();

  const handleClick = (letterPressed) => {
    if (letterPressed === 'enviar') {
      dispatch(addWord('prueba'));
    } else {
      dispatch(addLetter(letterPressed));
    }
  };

  /*
    press enter:
    onKeyPress and add the key pressed.
    add to wordsUsed
    Limit the number to length
    check solution
    print colors by user's solution
  */

  return (
    <button type="button" className="letter" onClick={() => handleClick(letter)}>
      {(letter === 'borrar') ? <FaStepBackward /> : letter.toUpperCase()}
    </button>
  );
}

export default Key;
