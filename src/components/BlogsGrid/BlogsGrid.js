import React, { useEffect } from 'react';
import BlogsGridItem from './BlogsGridItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../features/blogs/blogsSlice';
import Loading from '../ui/Loading';

const BlogsGrid = () => {
    const dispatch = useDispatch();
    const { blogs, isError, isLoading, error } = useSelector(state => state.blogs);
    const {filterBy} = useSelector(state => state.filter);
    const {sortBy} = useSelector(state => state.sort);

    useEffect(() => {
        dispatch(fetchBlogs({filter: filterBy, sort: sortBy}));
    }, [dispatch, filterBy, sortBy]);

    let content; 

    if (isLoading) content = <Loading></Loading>;

    if (isError && !isLoading) content = <div className="col-span-12 font-semibold text-red-500">{error}</div>;

    if (!isError && !isLoading && blogs?.length === 0) {
        content = <div className="col-span-12 font-semibold">No blogs Found</div>
    };

    if (!isError && !isLoading && blogs?.length > 0) {
        content = blogs.map(blog => <BlogsGridItem blog={blog} key={blog.id}  ></BlogsGridItem>)
    }


    return (
        <main class="post-container" id="lws-postContainer">
            {content}
        </main>
    );
};

export default BlogsGrid;