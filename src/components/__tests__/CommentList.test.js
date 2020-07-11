import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentList from 'components/CommentList';
import comment from 'reducers/comment';

let wrapped;
beforeEach(() => {
  // while first bootup the application comments is going to be empty so that send a comments as a props
  const initialState = {
    comments: ['comment 1', 'comment 2'],
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

describe('comment list', () => {
  it('creates one list item per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
  });
});

it('shows the text for each comment', () => {
  expect(wrapped.render().text()).toContain('comment 1');
  expect(wrapped.render().text()).toContain('comment 2');
});
