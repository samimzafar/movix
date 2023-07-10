import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3/";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

// 80db6c0a250615ea1a75fb7e9c07ba01

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log("🚀 fetchDataFromApi ~ error:", error);
    return error;
  }
};
