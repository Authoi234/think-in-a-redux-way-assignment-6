import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSelected } from '../../features/filter/filterSlice';
import { changeSortSelected } from '../../features/sort/sortSlice';

const SideNav = () => {
    const dispatch = useDispatch();
    const {filterBy} = useSelector(state => state.filter);

    const handleSelectChange = (e) => {
      dispatch(changeSortSelected(e.target.value));
    };

    return (
        <aside>
            <div class="sidebar-items">
                <div class="sidebar-content">
                    <h4>Sort</h4>
                    <select onChange={handleSelectChange} name="sort" id="lws-sort" class="w-full max-w-[150px] border-2 rounded-md text-gray-500">
                        <option value="default">Default</option>
                        <option value="newest">Newest</option>
                        <option value="most_liked">Most Liked</option>
                    </select>
                </div>
                <div class="sidebar-content">
                    <h4>Filter</h4>
                    <div class="radio-group">
                        <div>
                            <input type="radio" name="filter" id="lws-all" checked={filterBy === "All"} class="radio" onChange={() => dispatch(changeSelected("All"))} />
                            <label for="lws-all">All</label>
                        </div>
                        <div>
                            <input type="radio" name="filter" id="lws-saved" class="radio" checked={filterBy === "Saved"} onChange={() => dispatch(changeSelected("Saved"))} />
                            <label for="lws-saved">Saved</label>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SideNav;