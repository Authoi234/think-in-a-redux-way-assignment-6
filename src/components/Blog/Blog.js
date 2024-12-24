import React from 'react';

const Blog = ({ blog, handleIncrementLike, handleSaveUnSave }) => {
    const tagsLength = blog.tags.length;

    return (
        <main class="post">
            <img src={blog.image} alt="githum" class="w-full rounded-md" id="lws-megaThumb" />
            <div>
                <h1 class="mt-6 text-2xl post-title" id="lws-singleTitle">
                    {blog.title}
                </h1>
                <div class="tags" id="lws-singleTags">
                    {blog.tags.map((tag, index) => <span>#{tag} {index < tagsLength - 1 && ","}</span>)}
                </div>
                <div class="btn-group">
                    <button class="like-btn" id="lws-singleLinks" onClick={handleIncrementLike}>
                        <i class="fa-regular fa-thumbs-up"></i> {blog.likes}
                    </button>
                    <button class={`${blog.isSaved ? 'active' : ""} save-btn`} id="lws-singleSavedBtn" onClick={handleSaveUnSave}>
                        <i class="fa-regular fa-bookmark"></i> {blog.isSaved ? 'Saved' : 'Save'}
                    </button>
                </div>
                <div class="mt-6">
                    <p>
                        {blog.description}
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Blog;