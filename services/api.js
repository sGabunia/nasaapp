import axios from "axios";

const BASE_URL = `https://api.nasa.gov/planetary/apod?`;
const API_KEY = `y1Akjqqk0MI5MXrzhJhVwqrCwgDpVy0yXkhMyQUL`;

const getImage = async (date) => {
  console.log(date);
  const response = await axios.get(
    `${BASE_URL}api_key=${API_KEY}&date=${date.toISOString().slice(0, 10)}`
  );
  return response.data;
};

export default {
  getImage,
};
