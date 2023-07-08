import axios from 'axios';
import { fetchPostsSuccess, fetchPostsError } from '../reducers';

export const fetchPosts = async (dispatch) => {
    try {
      const response = await axios.get('https://www.reddit.com/r/all/top.json?t=day&sort=top&limit=50');
      const posts = response.data.data.children.map(child => child.data);
      dispatch(fetchPostsSuccess(posts));
    } catch (error) {
      dispatch(fetchPostsError(error));
    }
};