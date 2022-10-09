import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FriendDetails.css'
const FriendDetails = () => {
    const {name, phone} = useLoaderData();
    return (
        <div>
            <h1 className='nameHeadding'>Name: <span className='name'>{name}</span></h1>
            <p>Contact Number : {phone}</p>
            <h2>Everything you need to know about this person</h2>
        </div>
    );
};

export default FriendDetails;