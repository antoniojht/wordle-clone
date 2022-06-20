import types from '../types/typesActions';

const initialState = [];
// eslint-disable-next-line default-param-last
const actualWordReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.actualWord:
      return [...state, action.payload];

    case types.popActualWord:
      return state.slice(0, -1);

    case types.resetActualWord:
      return [];

    default:
      return state;
  }
};

export default actualWordReducer;
