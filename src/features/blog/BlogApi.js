import axios from "../../utilities/axios"

export const getBlog = async (id) => {
    const response = await axios.get(`/blogs/${id}`)

    return response.data;
};