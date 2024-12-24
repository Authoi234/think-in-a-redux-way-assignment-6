const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    filterBy: 'All'
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        changeSelected: (state, action) => {
            state.filterBy = action.payload;
        },
    }
});

export default filterSlice.reducer;

export const {changeSelected} = filterSlice.actions;