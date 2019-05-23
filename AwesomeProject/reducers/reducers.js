import { createStore } from 'redux';
import { INCREMENT, DECREMENT } from '../constants/actions';

export const counter = (state = 0, action) => {
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  } else {
    return state;
  }
}

export const store = createStore(counter);
console.log(store.getState());
store.subscribe();
store.dispatch({ type: INCREMENT });
const render = () => {
  document.body.innerText = store.getState();
};

render();
