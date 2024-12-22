import React from 'react';

const Loading = () => {
    return (
        <div>
            <h1 className='text-2xl'>Loading...</h1>
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
        </div>
    );
};

export default Loading;