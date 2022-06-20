import types from '../types/typesActions';

export const addLetter = (letter) => ({
  type: types.addLetter,
  payload: {
    letter,
    valid: false,
  },
});

export const addWord = (word) => ({
  type: types.addWordUsed,
  payload: {
    word,
  },
});

export const actualWord = (word) => ({
  type: types.actualWord,
  payload: word,
});

export const popActualWord = () => ({
  type: types.popActualWord,
});

export const resetActualWord = () => ({
  type: types.resetActualWord,
});
