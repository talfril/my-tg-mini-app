import styles from "./Weather.module.css";
import { useState } from "react";
import { getWeather } from "@/utils/API";
import { FC } from "react";
import { placesData } from "@/data/places.data";
import { WeatherData } from "@/data/types";
import { Button } from "../Button/Button";

export const Weather: FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>({});
  const [loading, setLoading] = useState<boolean>(false);

  const fetchWeatherForPlaces = async () => {
    setLoading(true);
    const newWeatherData: WeatherData = {};

    for (const place of placesData) {
      const data = await getWeather(place.latitude, place.longitude);
      newWeatherData[place.index] = data.current;
    }

    setWeatherData(newWeatherData);
    setLoading(false);
  };
  return (
    <>
      <Button
        onClick={fetchWeatherForPlaces}
        buttonText='Узнать погоду сейчас на популярных курортах'
      />
      {loading && <div>Идет получение данных...</div>}
      <ul className={styles.list}>
        {Object.keys(weatherData).map((index) => {
          const place = placesData.find((p) => p.index === Number(index));
          const weather = weatherData[Number(index)];
          return (
            <li key={index}>
              <h2 className={styles.subTitle}>{place?.placeName}</h2>
              {weather ? (
                <>
                  <p className={styles.text}>
                    Температура воздуха: {weather.temperature_2m} °C
                  </p>
                  <p className={styles.text}>
                    Скорость ветра: {weather.wind_speed_10m} км/ч
                  </p>
                </>
              ) : (
                <p>Данные не получены, попробуйте позже</p>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Weather;
