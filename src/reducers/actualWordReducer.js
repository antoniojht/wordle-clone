import types from '../types/typesActions';

const initialState = [];
// eslint-disable-next-line default-param-last
const actualWordReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.actualWord:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default actualWordReducer;
