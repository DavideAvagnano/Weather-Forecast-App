import { optionType } from "../../types";

import { Heading } from "./Heading";
import { Suggestions } from "./Suggestions";

type SearchProps = {
  input: string;
  optionsList: optionType[];
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOptionSelect: (option: optionType) => void;
  inputIsFocused: boolean;
  handleInputFocus: () => void;
  handleInputBlur: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const Search = ({
  input,
  optionsList,
  handleInputChange,
  handleOptionSelect,
  inputIsFocused,
  handleInputFocus,
  handleInputBlur,
  handleSubmit,
}: SearchProps) => {
  return (
    <section className="w-full h-screen md:max-w-[31.25rem] lg:h-[31.25rem] p-4 md:px-10 lg:p-24 flex flex-col items-center justify-center text-center bg-white/25 backdrop-blur-ls rounded-md drop-shadow-lg text-zinc-700">
      <Heading />

      <form
        onSubmit={handleSubmit}
        className="relative mt-10 md:mt-5 flex items-center"
      >
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder="Choose Place..."
          className="px-2 py-1 rounded-l-md border-2 border-r-0 border-zinc-700 outline-zinc-700 placeholder:text-zinc-400 placeholder:text-sm"
        />

        {inputIsFocused && optionsList.length > 0 && (
          <Suggestions
            optionsList={optionsList}
            handleOptionSelect={handleOptionSelect}
          />
        )}

        <button
          type="submit"
          className="px-2 py-1 font-bold border-2 border-zinc-700 rounded-r-md bg-zinc-700/5 hover:bg-zinc-700/20 active:bg-zinc-700/5 cursor-pointer"
        >
          search
        </button>
      </form>
    </section>
  );
};
