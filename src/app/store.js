import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import blogsReducer from '../features/blogs/blogsSlice';
import blogReducer from '../features/blog/blogSlice';
import filterReducer from '../features/filter/filterSlice';
import sortReducer from '../features/sort/sortSlice';
import relatedBlogsReducer from '../features/relatedBlogs/relatedBlogsSlice';
const { createLogger } = require("redux-logger");

const logger = createLogger();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    blogs: blogsReducer,
    blog: blogReducer,
    filter: filterReducer,
    sort: sortReducer,
    relatedBlogs: relatedBlogsReducer,
  },
  // middleware: (getDefaultMiddlewares) =>
  //   getDefaultMiddlewares().concat(logger),
});
