import { INCREMENT, DECREMENT, RESET } from '../constants/actions';

const initialState = { count: 0 };

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {count: state.count + action.amount});
    case DECREMENT:
      return Object.assign({}, state, {count: state.count - action.amount});
    case RESET:
      return Object.assign({}, state, {count: 0});
    default:
      return state;
  }
};
