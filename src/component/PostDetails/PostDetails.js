import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const {userId, title, body} = useLoaderData();
    return (
        <div className='card'>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link to={`/friend/${userId}`}>About Author</Link>
        </div>
    );
};

export default PostDetails;