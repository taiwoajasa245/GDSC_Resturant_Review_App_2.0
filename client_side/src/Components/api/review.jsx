// src/api/review.js
import axios from 'axios';


export const getReviewsByUser = async (userId) => {
  const URL = import.meta.env.VITE_SERVER_URL;

  const response = await axios.get(`/api/reviews/user/${userId}`);
  return response.data;
};
