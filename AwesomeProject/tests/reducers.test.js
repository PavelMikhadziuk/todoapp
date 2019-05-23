import { counter } from '../reducers/reducers';
import { INCREMENT, DECREMENT } from '../constants/actions';

describe('reducers', () => {
  test('increment counter', () => {
    expect(
      counter(0, {type: 'INCREMENT' })
    ).toEqual(1);

    expect(
      counter(1, {type: 'INCREMENT' })
    ).toEqual(2);
  });

  test('decrement counter', () => {
    expect(
      counter(2, {type: 'DECREMENT' })
    ).toEqual(1);

    expect(
      counter(1, {type: 'DECREMENT' })
    ).toEqual(0);
  });

  test('something', () => {
    expect(
      counter(1, {type: 'SOMETHING_ELSE' })
    ).toEqual(1);

    expect(
      counter(undefined, {})
    ).toEqual(0);
  });
});

console.log('Tests passed!');