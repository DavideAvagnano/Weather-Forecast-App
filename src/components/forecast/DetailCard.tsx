import {
  WiStrongWind,
  WiThermometer,
  WiHumidity,
  WiFog,
  WiBarometer,
  WiRaindrops,
} from "react-icons/wi";

const icons = {
  wind: WiStrongWind,
  feels: WiThermometer,
  humidity: WiHumidity,
  visibility: WiFog,
  pressure: WiBarometer,
  pop: WiRaindrops,
};

type DetailCardProps = {
  icon: keyof typeof icons;
  title: string;
  info: string | JSX.Element;
  description: string;
};

export const DetailCard = ({
  icon,
  title,
  info,
  description,
}: DetailCardProps) => {
  const Icon = icons[icon];

  return (
    <article className="w-[140px] h-[130px] bg-white/30 backdrop-blur-ls rounded drop-shadow-lg p-2 mb-5 flex flex-col justify-between">
      <div className="flex items-center text-sm font-bold">
        <Icon size={20} /> <h4 className="ml-1">{title}</h4>
      </div>
      <h3 className="mt-2 text-lg">{info}</h3>
      <div className="text-xs font-bold">{description}</div>
    </article>
  );
};
