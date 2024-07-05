import axios from "axios";

const API_KEY = "44799615-d92cfae864b0e13875b15b05f";
const BASE_URL = "https://pixabay.com/api/";

export const fetchImages = async (query: string, page: number = 1) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: query,
      page,
      key: API_KEY,
      image_type: "photo",
      orientation: "horizontal",
      per_page: 12,
    },
  });
  return response.data.hits;
};
