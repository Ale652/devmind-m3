import axios from "axios";

const BASE_API = "https://api.github.com/users/Ale652";  

export const getAllInfoGithub = () => axios.get(`${BASE_API}`);
export const getAllMyRepositoriesGithub = () => axios.get(`${BASE_API}/repos`);