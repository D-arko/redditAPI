import React from 'react';
import './Post.css'; // Import the CSS file

function Post({ post }) {

  return (
    <div className="post-container">
      {!post.over_18 && post.is_video && (
        <div>
          <h3>{post.title}</h3>
          <h5>{post.subreddit_name_prefixed}</h5>
          <div className="video-container">
            <div className="video-wrapper">
              <video controls src={post.secure_media.reddit_video.fallback_url} autoPlay muted></video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
