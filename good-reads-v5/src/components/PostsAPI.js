import axios from "axios";

const BASE_API = "http://localhost:8080/";
 


export const postBook = (postId) =>
    axios.post(`${BASE_API}addBook`);