import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Display from "./components/Display";
import { getSymbolData } from "./api";

const App = () => {
  const [symbolData, setSymbolData] = useState({});

  const search = async (query) => {
    let data = await getSymbolData(query);
    console.log(data);
    setSymbolData(data);
  };

  return (
    <div className="App-wrapper">
      <div className="App">
        <Header searchSubmit={search} />
        <Display data={symbolData} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
