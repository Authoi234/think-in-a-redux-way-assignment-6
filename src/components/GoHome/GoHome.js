import React from 'react';
import { FaHouse } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const GoHome = () => {
    return (
        <div class="container mt-8">
            <Link to="/" class="inline-block text-gray-600 home-btn" id="lws-goHome">
                <p className='auth-buttons'><FaHouse></FaHouse><span>Go Home</span></p>
            </Link>
        </div>
    );
};

export default GoHome;