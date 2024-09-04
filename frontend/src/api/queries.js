import { useQuery } from "react-query";

import { fetchWeatherData } from "./index";

export const weatherDataQueryKey = () => ["weatherData"];

export const useWeatherData = () => {
  const queryResult = useQuery(
    weatherDataQueryKey(),
    () => fetchWeatherData(),
    {
      refetchInterval: 1000,
    }
  );

  return {
    weatherData: queryResult.data ?? {
      weatherData: [],
    },
    ...queryResult,
  };
};
