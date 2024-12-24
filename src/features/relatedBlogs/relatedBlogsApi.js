import axios from "../../utilities/axios";

export const getRelatedBlogs = async (props) => {
    const {tags, id} = props;
    const limit = 10;
    let queryString = tags.length > 0 ? tags.map(tag => `tags_like=${tag}`).join('&') + `&id_ne=${id}&_limit=${limit}` :  `id_ne=${id}&_limit=${limit}`
    const response = await axios.get(`/blogs?${queryString}`);
    return response.data;
};