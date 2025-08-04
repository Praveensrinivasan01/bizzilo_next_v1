import axios from 'axios';

export const fetchBlogs = async (tag) => {
  try {
    const url = tag
      ? `https://go-omnic.com/api/blogs/?find=${encodeURIComponent(tag)}`
      : 'https://go-omnic.com/api/blogs/';
    
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return { results: [] };
  }
};

export const fetchCategories = async () => {
  try {
    const res = await axios.get('https://go-omnic.com/api/blogs/categories/');
   
    return res.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return { results: [] };
  }
};

// export const fetchTrendingBlogs = async () => {
//   try {
//     const res = await axios.get(`https://go-omnic.com/api/blogs/?tag=${params}`);
  
//     return res.data;
//   } catch (error) {
//     console.error('Error fetching trending blogs:', error);
//     return { results: [] };
//   }
// };