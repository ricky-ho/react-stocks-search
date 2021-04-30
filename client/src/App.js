import { useState, useEffect } from "react";

import Searchbar from "./components/Searchbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";
import fetchSymbolData from "./utils/api";
import "./App.css";

/**
 NEED TO DO:
  - Refactor code to be more modular
    - Display 
  - Fix/Add styling
  - Add responsiveness
*/

const App = () => {
  const [symbolData, setSymbolData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = async (query) => {
    setIsLoading(true);
    const data = await fetchSymbolData(query);
    setSymbolData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [symbolData]);

  useEffect(() => {
    // Default to searching for TSLA on initial page load
    const initialLoad = async () => {
      const data = await fetchSymbolData("TSLA");
      setSymbolData(data);
      setIsLoading(false);
    };
    initialLoad();
  }, []);

  return (
    <div id="App">
      <Searchbar searchSubmit={handleSearch} />
      {isLoading ? <Spinner /> : <Content data={symbolData} />}
      <Footer />
    </div>
  );
};

export default App;
