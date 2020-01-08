import axios from "axios";

const api = axios.create({
  baseURL: 'https://heroku-be.herokuapp.com',
});

export default api;
