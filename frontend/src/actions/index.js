import axios from 'axios';
import { fetchPostsSuccess, fetchPostsError } from '../reducers';

export const fetchPosts = async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/reddit');
      const posts = response.data.data.children.map(child => child.data);
      dispatch(fetchPostsSuccess(posts));
    } catch (error) {
      dispatch(fetchPostsError(error));
    }
};