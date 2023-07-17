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
      <h1>Reddit API App</h1>
      <h3 style={{ color: 'white', marginBottom: 20 }}>
        Project Folder on GitHub:{' '}
        <a href='https://github.com/d-arko/redditapi'>
          Reddit API GitHub
        </a>
      </h3>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;