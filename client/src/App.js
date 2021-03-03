import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Display from "./components/Display";
import hard_data from "./data";
import { getSymbolData } from "./api";

const App = () => {
  const [symbolData, setSymbolData] = useState({});

  const search = async (query) => {
    // let data = await getSymbolData(query);
    // console.log(data);
    // setSymbolData(data);
    const data = hard_data;
    setSymbolData(data);
  };

  return (
    <div className="flex-col justify-center align-center">
      <div className="App flex-col align-center">
        <Header searchSubmit={search} />
        <Display data={symbolData} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
