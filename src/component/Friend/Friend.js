import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({friend}) => {
    const {id, name, email, username} = friend;
    return (
        <div>
            <div className='friendCard'>
                <h3 className='mt_0'>Name : {name}</h3>
                <p>E-Mail : {email}</p>
                <strong>userName : <Link to={`/friend/${id}`}>{username}</Link></strong>
            </div>
        </div>
    );
};

export default Friend;