import { forecastType } from "../../types";

import { Degree } from "./Degree";

export const Slider = ({ data }: { data: forecastType }) => {
  return (
    <section className="flex overflow-x-scroll my-10 pb-2">
      {data.lista.map((item, i) => (
        <div key={i} className="inline-block text-center w-12 flex-shrink-0">
          <p className="text-sm">
            {i === 0 ? "Now" : new Date(item.dt * 1000).getHours()}
          </p>
          <img
            alt={`weather-icon-${item.weather[0].description}`}
            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          />
          <p className="text-sm font-bold">
            <Degree temp={Math.round(item.main.temp)} />
          </p>
        </div>
      ))}
    </section>
  );
};
