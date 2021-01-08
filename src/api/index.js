import axios from "axios";

const API_KEY = "b45d50ba";

const apiConstant = {
  API_BASE_URL: "https://www.omdbapi.com/",
};

const API = `${apiConstant.API_BASE_URL}?`;

const getById = (id) => axios.get(`${API}i=${id}&apikey=${API_KEY}&type=movie`);
const getSearch = (search) =>
  axios.get(`${API}s=${search}&apikey=${API_KEY}&type=movie`);

export { getById, getSearch };
