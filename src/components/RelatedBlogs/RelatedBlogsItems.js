import React from 'react';
import { Link } from 'react-router-dom';

const RelatedBlogsItems = ({ blog }) => {
    return (
        <div class="card">
            <Link to={`/post/${blog.id}`}>
                <img src={blog.image} class="card-image" alt="" />
            </Link>
            <div class="p-4">
                <Link to={`/post/${blog.id}`} class="text-lg post-title lws-RelatedPostTitle">
                    {blog.title}
                </Link>
                <div class="mb-0 tags">
                    {blog.tags.map((tag, index) => <span>#{tag} {index < blog.tags.length - 1 && ","}</span>)}
                </div>
                <p>{blog.createdAt}</p>
            </div>
        </div>
    );
};

export default RelatedBlogsItems;