import {
  LOAD_FEED,
  ADD_COMMENT
} from './../constants';

import data from './../db';

export const loadFeed = () => {
  const allPosts = data.reduce((acc, el) => {
    return [...acc, ...el.posts]
  }, [])

  return {
    type: LOAD_FEED,
    payload: allPosts
  }
}

export const addComment = (userName, comment, postId) => {
  return {
    type: ADD_COMMENT,
    payload: {userName, comment, postId}
  }
}