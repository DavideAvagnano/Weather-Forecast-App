import { useEffect, useState } from "react";
import { optionType } from "../types";

const BASE_URL = "http://api.openweathermap.org";

export const Prova = () => {
  const [input, setInput] = useState<string>("");
  const [optionsList, setOptionsList] = useState<optionType[]>([]);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(-1);
  const [selectedByEnter, setSelectedByEnter] = useState<boolean>(false);

  // metto il valore dell'input in una variabile
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setSelectedByEnter(false);
  };

  // ogni volta che cambia l'input viene fatta la chiamata
  useEffect(() => {
    !selectedByEnter && input.trim() !== ""
      ? fetchSearchOptions(input.trim())
      : setOptionsList([]);
  }, [input]);

  // consento all'utente di gestire la ricerca tramite tastiera
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedOptionIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : optionsList.length - 1
      );
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedOptionIndex((prevIndex) =>
        prevIndex < optionsList.length - 1 ? prevIndex + 1 : 0
      );
    } else if (e.key === "Enter" && selectedOptionIndex !== -1) {
      e.preventDefault();
      setInput(optionsList[selectedOptionIndex].name);
      setSelectedByEnter(true);
      setOptionsList([]);
    }
  };

  // chiamata per ottenere la lista delle opzioni
  const fetchSearchOptions = async (value: string) => {
    try {
      const response = await fetch(
        `${BASE_URL}/geo/1.0/direct?q=${value}&limit=5&appid=${
          import.meta.env.VITE_APP_API_KEY
        }`
      );
      const data = await response.json();
      setOptionsList(data);
    } catch (error) {
      console.error("Error fetching options:", error);
    }
  };

  // chimata per ottenere i dati per le previsioni
  // const fetchForecast = async (data: optionType) => {};

  return {
    input,
    optionsList,
    selectedOptionIndex,
    handleInputChange,
    handleKeyDown,
  };
};
