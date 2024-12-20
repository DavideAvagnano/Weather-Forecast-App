import { optionType } from "../../types";

type SuggestionsProps = {
  optionsList: optionType[];
  handleOptionSelect: (option: optionType) => void;
};

export const Suggestions = ({
  optionsList,
  handleOptionSelect,
}: SuggestionsProps) => {
  return (
    <ul className="absolute top-10 bg-white rounded-md w-[12.5rem] py-2 shadow-md max-h-[18.75rem] overflow-y-auto">
      {optionsList.map((option: optionType, index: number) => (
        <li
          key={index}
          onClick={() => handleOptionSelect(option)}
          className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-3 py-1 cursor-pointer"
        >
          {option.name}, {option.country}
        </li>
      ))}
    </ul>
  );
};
