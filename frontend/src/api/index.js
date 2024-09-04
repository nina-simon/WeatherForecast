import axios from "axios";

const baseApi = async ({ path, method }) => {
  return axios({
    url: `${process.env.REACT_APP_API_URL}/api${path}`,
    method,
  }).then((response) => {
    return response.data;
  });
};

export const fetchWeatherData = async () => {
  return baseApi({
    path: "/weather",
    method: "get",
  });
};
