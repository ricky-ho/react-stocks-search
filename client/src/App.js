import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Display from "./components/Display";
import { getSymbolData } from "./api";

/*
  1. Fix Company description overflow
  2. Fix newscard content overflow
  3. Create default homepage/behavior
  4. Finish footer
  4. Change styling/make responsive
*/

const App = () => {
  const unixToLocaleDate = (unix_datetime) => {
    let date = new Date(unix_datetime);
    return date.toLocaleString([], {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/New_York",
      timeZoneName: "short",
    });
  };

  const [symbolData, setSymbolData] = useState({});

  const search = async (query) => {
    let data = await getSymbolData(query);
    setSymbolData(data);
  };

  return (
    <div className="flex-col justify-center align-center">
      <div className="App flex-col align-center">
        <Header searchSubmit={search} />
        <Display data={symbolData} localeDate={unixToLocaleDate} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
