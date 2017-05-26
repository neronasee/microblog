import {
  LOAD_FEED,
  ADD_COMMENT
} from './../constants';

import generateId from '../utils/generateId';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_FEED:
      return [...state, ...action.payload]
    case ADD_COMMENT: 
      const { userName, postId, comment } = action.payload;
      const selectedPost = state.filter(post => post.id === postId)[0];
      const updatedComments = [
        ...selectedPost.comments.slice(0),
        {
          author: userName,
          id: generateId(),
          text: comment 
        }
      ]
      const updatedPost = {
        ...selectedPost,
        comments: updatedComments
      }
      return [
        ...state.slice(0, state.indexOf(selectedPost)),
        updatedPost,
        ...state.slice(state.indexOf(selectedPost) + 1)
      ]
    default:
      return state;
  }
}