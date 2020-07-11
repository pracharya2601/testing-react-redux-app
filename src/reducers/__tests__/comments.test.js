import commentReducer from 'reducers/comment';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'comment',
  };

  const newState = commentReducer([], action);
  expect(newState).toEqual(['comment']);
});

it('handle for unknown reducer', () => {
  const newState = commentReducer([], {});
  expect(newState).toEqual([]);
});
