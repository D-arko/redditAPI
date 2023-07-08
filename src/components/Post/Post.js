import React from 'react';
import './Post.css'; // Import the CSS file

function Post({ post }) {

  return (
    <>
    {!post.over_18 && post.is_video && (
      <div className="post-container">
          <h3>{post.title}</h3>
          <h5>{post.subreddit_name_prefixed}</h5>
          <div className="video-container">
            <video controls src={post.secure_media.reddit_video.fallback_url}  muted loop></video>
            <h6 class="upvotes">{post.ups} upvotes</h6>
          </div>
      </div>
      )}
    </>
  );
}

export default Post;
