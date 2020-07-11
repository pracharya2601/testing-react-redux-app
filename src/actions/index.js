import { SAVE_COMMENT } from 'actions/types';

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};
