import { getBlogs } from "./BlogsApi";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogs: [],
    isLoading: false,
    isError: false,
    error: ''
};

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async ({filter, sort}) => {
    const blogs = await getBlogs(filter, sort);
    return blogs;
});

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogs.pending, (state) => {
                state.isError=false;
                state.isLoading=true;
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.isError=false;
                state.isLoading=false;
                state.blogs = action.payload;
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.isError=true;
                state.isLoading=false;
                state.blogs = [];
                state.error = action.error?.message;
            })
    }
})

export default blogsSlice.reducer;