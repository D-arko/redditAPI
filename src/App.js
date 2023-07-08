import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts, selectPostsError } from './reducers';
import Post from './components/Post/Post';
import { fetchPosts } from './actions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const error = useSelector(selectPostsError);

  useEffect(() => {
    fetchPosts(dispatch);
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='container'>
      <h1>Reddit App</h1>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;