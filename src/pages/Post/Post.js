import React, { useEffect } from 'react';
import GoHome from '../../components/GoHome/GoHome';
import '../../css/Main.css';
import Blog from '../../components/Blog/Blog';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlog } from '../../features/blog/blogSlice';
import Loading from '../../components/ui/Loading';
import { useParams } from 'react-router-dom';

const Post = () => {
    const dispatch = useDispatch();
    const {postId} = useParams();
    const { blog, isError, isLoading, error } = useSelector(state => state.blog);

    useEffect(() => {
        dispatch(fetchBlog(postId));
    }, [dispatch, postId]);

    let content;

    if (isLoading) content = <Loading></Loading>;

    if (!isLoading && isError) content = <div className="col-span-12 font-semibold text-red-500">{error}</div>;

    if (!isLoading && !isError && !blog?.id) content = <div className="col-span-12 font-semibold">No Blog Found</div>;

    if (!isLoading && !isError && blog?.id) content = <Blog blog={blog}></Blog>;

    return (
        <div>
            <div>
                <GoHome></GoHome>
                <section class="post-page-container">
                    {content}
                </section>
            </div>
        </div>
    );
};

export default Post;