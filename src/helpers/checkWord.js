const checkWord = (wordle, wordToGuess) => {
  const attemp = [];
  const word = wordle.split('');

  // Example: { letter: 'r', valid: false, position: false }
  wordToGuess.forEach((letter, i) => {
    if (letter === word[i]) {
      // green
      attemp.push({
        letter,
        valid: true,
        position: true,
      });
    } else if (wordle.includes(letter)) {
      // yellow
      attemp.push({
        letter,
        valid: true,
        position: false,
      });
    } else {
      // grey
      attemp.push({
        letter,
        valid: false,
        position: false,
      });
    }
  });

  return attemp;
};

export default checkWord;
