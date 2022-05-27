import axios from "axios";

const BASE_API = "https://jsonplaceholder.typicode.com/";
 

export const getAllPosts = () => axios.get(`${BASE_API}posts`);

export const getPostDetails = (postId) =>
  axios.get(`${BASE_API}comments?postId=${postId}`);
