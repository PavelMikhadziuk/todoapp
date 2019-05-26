import { counter } from '../reducers/reducers';
import { INCREMENT, DECREMENT } from '../constants/actions';

describe('reducers', () => {
  const stateBefore1 =  { count: 0 };
  const stateAfter1 = { count: 1 };
  const stateBefore2 =  { count: 1 };
  const stateAfter2 = { count: 3 };

  test('increment counter', () => {
    expect(
      counter(Object.freeze(stateBefore1), {type: 'INCREMENT', amount: 1 })
    ).toEqual(Object.freeze(stateAfter1));

    expect(
      counter(Object.freeze(stateBefore2), {type: 'INCREMENT', amount: 2 })
    ).toEqual(Object.freeze(stateAfter2));
  });

  test('decrement counter', () => {
    expect(
      counter(Object.freeze(stateAfter2), {type: 'DECREMENT', amount: 2 })
    ).toEqual(Object.freeze(stateBefore2));

    expect(
      counter(Object.freeze(stateAfter1), {type: 'DECREMENT', amount: 1 })
    ).toEqual(Object.freeze(stateBefore1));
  });

  test('something', () => {
    const state = Object.freeze({ count: 1 });
    expect(
      counter(state, {type: 'SOMETHING_ELSE' })
    ).toEqual(state);

    expect(
      counter(undefined, {})
    ).toEqual(Object.freeze({ count: 0 }));
  });
});

console.log('Tests passed!');