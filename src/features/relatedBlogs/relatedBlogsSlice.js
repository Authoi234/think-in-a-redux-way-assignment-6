import { getRelatedBlogs } from "./relatedBlogsApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    relatedBlogs: [],
    isLoading: false,
    isError: false,
    error: ""
};

export const fetchRelatedBlogs = createAsyncThunk('relatedBlogs/fetchBlogs',
    async ({tags, id}) => {
        const relatedBlogs = await getRelatedBlogs({tags, id});
        return relatedBlogs;
    }
)

const relatedBlogsSlice = createSlice({
    name: "relatedBlogs",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchRelatedBlogs.pending, (state) => {
                state.isError = false;
                state.isLoading = true;

            })
            .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.relatedBlogs = action.payload;
            })
            .addCase(fetchRelatedBlogs.rejected, (state, action) => {
                state.isLoading = false;
                state.relatedBlogs = [];
                state.isError = true;
                state.error = action.error?.message;
            })
    }
});

export default relatedBlogsSlice.reducer;