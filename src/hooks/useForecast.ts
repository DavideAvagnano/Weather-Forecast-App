import { useEffect, useState } from "react";
import { optionType, forecastType } from "../types";

const BASE_URL = "http://api.openweathermap.org";

export const useForecast = () => {
  const [input, setInput] = useState<string>("");
  const [inputIsFocused, setInputIsFocused] = useState<boolean>(false);
  const [optionsList, setOptionsList] = useState<optionType[]>([]);
  const [city, setCity] = useState<optionType | null>(null);
  const [forecast, setForecast] = useState<forecastType | null>(null);

  // ogni volta che cambia l'input viene fatta la chiamata per le opzioni
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    const value = e.target.value.trim();

    value !== "" ? fetchSearchOptions(value) : setOptionsList([]);
  };

  // eseguita quando clicco su una delle opzioni
  const handleOptionSelect = (option: optionType) => {
    setCity(option);
  };

  // ogni volta che cambia city, il nome viene messo nell'input field
  useEffect(() => {
    if (city) {
      setInput(city.name);
      setOptionsList([]);
    }
  }, [city]);

  // al submit faccio la chiamata per ricevere le previsioni
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!city) return;

    fetchForecast(city);
  };

  // gestisco render dei seggerimenti della ricerca in base al focus dell'input
  const handleInputFocus = () => {
    setInputIsFocused(true);
  };
  const handleInputBlur = () => {
    setTimeout(() => {
      setInputIsFocused(false);
    }, 200);
  };

  // chiamata per ricevere la lista delle opzioni
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
  const fetchForecast = async (value: optionType) => {
    try {
      const response = await fetch(
        `${BASE_URL}/data/2.5/forecast?lat=${value.lat}&lon=${
          value.lon
        }&units=metric&lang=en&appid=${import.meta.env.VITE_APP_API_KEY}`
      );
      const data = await response.json();
      const forecastData = {
        ...data.city,
        lista: data.list.slice(0, 16),
      };
      setForecast(forecastData);
    } catch (error) {
      console.error("Error fetching forecast:", error);
    }
  };

  return {
    input,
    optionsList,
    handleInputChange,
    handleOptionSelect,
    inputIsFocused,
    handleInputFocus,
    handleInputBlur,
    handleSubmit,
    forecast,
    setForecast,
  };
};
