import React from 'react';
import Post from './Post';

const handleDeletePost = (postId) => {
  console.log('Delete post:', postId);
};

const handleEditPost = (postId, newContent) => {
  console.log('Edit post:', postId, newContent);
};



const Posts = ({posts,userProfile}) => {



  return (
    <div>
      {posts.map((post) => (
        <Post
          userProfile={userProfile}
          key={post.id}
          post={post}
          onDelete={handleDeletePost}
          onEdit={handleEditPost}
        />
      ))}
    </div>
  );
};

export default Posts;
