import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Display from "./components/Display";
import { getSymbolData } from "./api";
import { Spinner } from "react-bootstrap";

/*
  2. Finish footer
  3. Change styling
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
  const [loading, setLoading] = useState(true);

  const search = async (query) => {
    setLoading(true);
    const data = await getSymbolData(query);
    setSymbolData(data);
    setLoading(false);
  };

  // Default to searching for TSLA on page load
  useEffect(() => {
    const initialLoad = async () => {
      const data = await getSymbolData("TSLA");
      setSymbolData(data);
      setLoading(false);
    };
    initialLoad();
  }, []);

  return (
    <div className="flex-col align-center ">
      <Header searchSubmit={search} />
      <div id="App" className="App flex justify-center align-center">
        {loading ? (
          <Spinner animation="border" variant="primary" role="status">
            <span
              aria-label="Loading"
              style={{ display: "none", color: "#1262ec" }}
            >
              Loading...
            </span>
          </Spinner>
        ) : (
          <Display data={symbolData} localeDate={unixToLocaleDate} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
