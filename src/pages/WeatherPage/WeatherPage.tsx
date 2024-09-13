import { FC } from "react";
import Weather from "@/components/Weather/Weather";

export const WeatherPage: FC = () => {
  return (
    <>
      <h1>Не пора ли в отпуск?</h1>
      <Weather />
    </>
  );
};
