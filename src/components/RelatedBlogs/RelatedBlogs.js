import RelatedBlogsItems from './RelatedBlogsItems';

const RelatedBlogs = ({relatedBlogs}) => {
    
    return (
        <aside>
            <h4 class="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
            <div class="space-y-4 related-post-container">
                {relatedBlogs.length !== 0 && relatedBlogs.map(relatedBlog => <RelatedBlogsItems blog={relatedBlog} />)}
                {relatedBlogs.length === 0 && <div>No Related Post Found</div>}
            </div>
        </aside>
    );
};

export default RelatedBlogs;