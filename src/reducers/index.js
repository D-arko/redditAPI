import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPostsSuccess(state, action) {
      state.posts = action.payload;
      state.error = null;
    },
    fetchPostsError(state, action) {
      state.error = action.payload;
    },
    setImageUrl(state, action) {
      const { postId, imageUrl } = action.payload;
      const post = state.posts.find(post => post.id === postId);
      if (post) {
        post.imageUrl = imageUrl;
      }
    },
  },
});

export const { fetchPostsSuccess, fetchPostsError, setImageUrl } = postsSlice.actions;

export const selectPosts = (state) => state.posts;
export const selectPostsError = (state) => state.error;

export default postsSlice.reducer;
