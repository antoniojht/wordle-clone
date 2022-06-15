import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLetter, addWord } from '../../actions/wordle';

import KeyRow from './KeyRow';
import './keyboard.css';

function Keyboard() {
  const dispatch = useDispatch();

  const keyboard = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ'],
    ['enviar', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'borrar'],
  ];

  const [word, setWord] = useState([]);

  // TODO: Validations: Number -> error message.
  const handleKeyDown = (event) => {
    if (event.key === 'Backspace' && word.length > 0) {
      const [lastLetter, ...rest] = word.reverse();
      setWord(rest);
    } else if (event.key === 'Enter' && word.length === 5) {
      dispatch(addWord(word.join()));
    } else {
      dispatch(addLetter(event.key));
      setWord([...word, event.key]);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="keyboard">
      {
        keyboard.map((row, i) => <KeyRow row={row} key={i} />)
      }
    </div>
  );
}

export default Keyboard;
