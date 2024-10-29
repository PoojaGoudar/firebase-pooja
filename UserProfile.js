// UserProfile.js
import React, { useState } from 'react';
import User from './User';
import './UserProfile.css';

const UserProfile = () => {
    const [userData] = useState({
        name: 'pooja',
        age: 10,
        location: 'Bengaluru'
    });

    return (
        <div className="user-profile">
            <User 
                name={userData.name} 
                age={userData.age} 
                location={userData.location} 
            />
        </div>
    );
};

export default UserProfile;

