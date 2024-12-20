import { useForecast } from "./hooks/useForecast";

import { Layout } from "./components/Layout";
import { Forecast } from "./components/forecast/Forecast";
import { Search } from "./components/search/Search";

const App = () => {
  const {
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
  } = useForecast();

  return (
    <>
      <Layout>
        {forecast ? (
          <Forecast data={forecast} resetForecast={() => setForecast(null)} />
        ) : (
          <Search
            input={input}
            optionsList={optionsList}
            handleInputChange={handleInputChange}
            handleOptionSelect={handleOptionSelect}
            inputIsFocused={inputIsFocused}
            handleInputFocus={handleInputFocus}
            handleInputBlur={handleInputBlur}
            handleSubmit={handleSubmit}
          />
        )}
      </Layout>
    </>
  );
};
export default App;
