import React from 'react';
import Post from './Post';
const posts = [
  {
    id: 1,
    user: {
      username: 'john_doe',
      profilePicture: '/profile.jpg',
    },
    content: 'Just finished my final project for the semester! 🎉 #StudentLife',
    media: 'https://via.placeholder.com/600x300',
    likes: 10,
    comments: [
      {
        user: {
          username: 'jane_doe',
          profilePicture: '/profile2.jpg',
        },
        content: 'Great job!',
      },
    ],
    timestamp: '2 hours ago',
    isAuthor: true,
    isLiked: false,
  },
  // Add more posts here
];

const handleDeletePost = (postId) => {
  console.log('Delete post:', postId);
};

const handleEditPost = (postId, newContent) => {
  console.log('Edit post:', postId, newContent);
};

const Posts = ({post}) => {
  return (
    <div>
      {posts.map((post) => (
        <Post
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
