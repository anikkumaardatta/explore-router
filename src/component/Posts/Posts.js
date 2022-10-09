import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h1>All Posts Title is here</h1>
            <div className='cards'>
                {
                    posts.map(post => <Post
                        key={post.id}
                        post={post}
                    ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;