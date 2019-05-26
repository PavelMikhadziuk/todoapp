import { INCREMENT, DECREMENT } from '../constants/actions';

const initialState = { count: 0 };

export const counter = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return Object.assign({}, state, { count: state.count + 1 });
  } else if (action.type === DECREMENT) {
    return Object.assign({}, state, {count: state.count - 1 });
  } else {
    return state;
  }
};
