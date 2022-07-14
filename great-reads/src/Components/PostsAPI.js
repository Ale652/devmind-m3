import axios from "axios";

const USER_API = "http://localhost:8080/user/";

export const loginAPI = () =>
  axios.get(`${USER_API}login`);