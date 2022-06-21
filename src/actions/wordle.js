import types from '../types/typesActions';

export const addLetter = () => ({
  type: types.addLetter,
});

export const addWord = (word) => ({
  type: types.addWordUsed,
  payload: {
    word,
  },
});

export const addError = (error) => ({
  type: types.addError,
  payload: {
    error,
  },
});

export const removeError = () => ({
  type: types.removeError,
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
