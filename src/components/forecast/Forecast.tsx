import { forecastType } from "../../types";

import { FaArrowLeftLong } from "react-icons/fa6";

import { Heading } from "./Heading";
import { Slider } from "./Slider";
import { ForecastDetails } from "./ForecastDetails";

type ForecastProps = {
  data: forecastType;
  resetForecast: () => void;
};

export const Forecast = ({ data, resetForecast }: ForecastProps) => {
  return (
    <>
      <div className="relative w-full h-full md:max-w-[31.25rem] lg:h-auto p-5 md:px-10 lg:px-24 bg-white/25 backdrop-blur-ls rounded-md drop-shadow-lg">
        <button
          onClick={resetForecast}
          className="absolute top-5 left-5 group flex items-center gap-2"
        >
          <FaArrowLeftLong className="group-hover:-translate-x-1 transition-all" />
          <span className="group-hover:underline group-hover:underline-offset-4 transition-all">
            Back
          </span>
        </button>

        <div className="mx-auto w-[18.75rem]">
          <Heading data={data} />
          <Slider data={data} />
          <ForecastDetails data={data} />
        </div>
      </div>
    </>
  );
};
