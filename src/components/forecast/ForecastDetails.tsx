import { forecastType } from "../../types";
import { FiSunrise, FiSunset } from "react-icons/fi";

import {
  getHumidityValue,
  getPop,
  getSunTime,
  getVisibilityValue,
  getWindDirection,
} from "../../helpers";

import { DetailCard } from "./DetailCard";
import { Degree } from "./Degree";

export const ForecastDetails = ({ data }: { data: forecastType }) => {
  const today = data.lista[0];

  return (
    <section className="flex flex-wrap justify-between">
      <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/30 backdrop-blur-ls rounded drop-shadow-lg py-4 mb-5">
        <FiSunrise size={20} />
        <span className="mt-2">{getSunTime(data.sunrise)}</span>
      </div>
      <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/30 backdrop-blur-ls rounded drop-shadow-lg py-4 mb-5">
        <FiSunset size={20} />
        <span className="mt-2">{getSunTime(data.sunset)}</span>
      </div>

      <DetailCard
        icon="wind"
        title="Wind"
        info={`${Math.round(today.wind.speed)} km/h`}
        description={`${getWindDirection(Math.round(today.wind.deg))}, gusts 
            ${today.wind.gust.toFixed(1)} km/h`}
      />
      <DetailCard
        icon="feels"
        title="Feels like"
        info={<Degree temp={Math.round(today.main.feels_like)} />}
        description={`Feels ${
          Math.round(today.main.feels_like) < Math.round(today.main.temp)
            ? "colder"
            : "warmer"
        }`}
      />
      <DetailCard
        icon="humidity"
        title="Humidity"
        info={`${today.main.humidity} %`}
        description={getHumidityValue(today.main.humidity)}
      />
      <DetailCard
        icon="pop"
        title="Precipitation"
        info={`${Math.round(today.pop * 100)}%`}
        description={`${getPop(today.pop)}, clouds at ${today.clouds.all}%`}
      />
      <DetailCard
        icon="pressure"
        title="Pressure"
        info={`${today.main.pressure} hPa`}
        description={` ${
          Math.round(today.main.pressure) < 1013 ? "Lower" : "Higher"
        } than standard`}
      />
      <DetailCard
        icon="visibility"
        title="Visibility"
        info={`${(today.visibility / 1000).toFixed()} km`}
        description={getVisibilityValue(today.visibility)}
      />
    </section>
  );
};
