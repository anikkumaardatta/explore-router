import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import'./Post.css'
const Post = (props) => {
    const {id, title} = props.post;
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate(`/posts/post/${id}`);
    }
    return (
        <div>
            <div className='card'>
                <h3>Title</h3>
                <Link to={`post/${id}`}>{title}</Link>
                
                <button onClick={handleNavigate}>See More</button>
            </div>
        </div>
    );
};

export default Post;