import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});
afterEach(() => {
  wrapped.unmount();
});

it('has textarea and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});
//^^^^^^^^^^
//find and check textarea and button inside commentbox

//describe function
describe('text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'comment' },
    });
    wrapped.update();
  });

  it('has textarea that user can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('comment');
  });

  it('submit the form, text area get empty', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
//^^^^^^^^^^^^^^
//find the textarea element
//stimulate a 'change' event
// provide a fake event object
//force the component to update
// assert that the textareas value has changed
//submit the form
//check the textarea after submitting

// things to be known
// click is for onCLick which is props for click
// submit is fro onSubmit which is props for submit
