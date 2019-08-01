import axios from 'axios'

export const updateBlog = ({keyword, url, isBlog, isView}) => axios.post('/blog/blog', {keyword, url, isBlog, isView})
export const getBlogList = () => axios.get('/blog/blog')