import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';
import { act } from '@testing-library/react';

describe('save comment', () => {
  it('has the correct type', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });
  it('has correct payload', () => {
    const action = saveComment('comment goes here');
    expect(action.payload).toEqual('comment goes here');
  });
});
