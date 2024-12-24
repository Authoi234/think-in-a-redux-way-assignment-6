import axios from "../../utilities/axios";

export const getBlogs = async (filter, sort) => {
    const response = await axios.get(`/blogs/`);
    if (filter === "All") {
        if (sort === "default") {
            return response.data;
        } else if (sort === "newest") {
            const newsetSorted = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            return newsetSorted;
        } else if (sort === "most_liked") {
            const mostLikedSorted = response.data.sort((a, b) => b.likes - a.likes);
            return mostLikedSorted;
        }
    } else if (filter === "Saved") {
        const savedBlogs = response.data.filter(item => item.isSaved === true);
        if (sort === "default") {
            return savedBlogs;
        } else if (sort === "newest") {
            const newsetSorted = savedBlogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            return newsetSorted;
        } else if (sort === "most_liked") {
            const mostLikedSorted = savedBlogs.sort((a, b) => b.likes - a.likes);
            return mostLikedSorted;
        }
    }

};