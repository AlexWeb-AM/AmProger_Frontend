import axios from "axios";

const url = 'https://dev.to/api/articles?tag=programming';

export const getProgrammingNews = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Dev.to:', error);
    return [];
  }
};
