const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    sortBy: "default",
};

const sortSlice = createSlice({
    name: "sort",
    initialState,
    reducers: {
        changeSortSelected: (state, action) => {
            state.sortBy = action.payload;
        },
    }
});

export default sortSlice.reducer;

export const {changeSortSelected} = sortSlice.actions;