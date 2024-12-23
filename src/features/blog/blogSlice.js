import { getBlog } from "./BlogApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    blog: {},
    isLoading: false,
    isError: false,
    error: ''
};

export const fetchBlog = createAsyncThunk('blog/fetchBlog', async (id) => {
    const blog = await getBlog(id);
    return blog;
});

export const updateBlogLikes = createAsyncThunk('blog/updateBlogLikes', async ({ id, likes }) => {
    const response = await fetch(`http://localhost:9000/blogs/${id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ likes }),
    });
    const updatedBlog = await response.json();
    return updatedBlog;
});

export const saveBlog = createAsyncThunk('blog/saveBlog', async ({ id, statusSaved }) => {
    const response = await fetch(`http://localhost:9000/blogs/${id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isSaved: statusSaved }),
    });
    const updatedBlog = await response.json();
    return updatedBlog;
});

// Blog Slice
const blogSlice = createSlice({
    name: 'blog',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlog.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
                state.error = "";
            })
            .addCase(fetchBlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.blog = action.payload;
                state.isError = false;
                state.error = "";
            })
            .addCase(fetchBlog.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.blog = {};
                state.error = action.error?.message;
            })
            .addCase(updateBlogLikes.fulfilled, (state, action) => {
                state.blog = action.payload; 
            })
            .addCase(updateBlogLikes.rejected, (state, action) => {
                state.isError = true;
                state.error = action.error?.message;
            })
            .addCase(saveBlog.fulfilled, (state, action) => {
                state.blog = action.payload;
            })
            .addCase(saveBlog.rejected, (state, action) => {
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export const { incrementLike } = blogSlice.actions;

export default blogSlice.reducer;