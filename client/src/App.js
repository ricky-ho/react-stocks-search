import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Display from "./components/Display";

// public token : Tpk_1ba9a99eab1f410d8a803b8aaf3e2a2e

const App = () => {
  const [tickerNews, setTickerNews] = useState([]);

  const getTickerInfo = async (query) => {
    try {
      const response = await fetch(
        `https://sandbox.iexapis.com/stable/stock/${query}/news/last/5?token=Tpk_1ba9a99eab1f410d8a803b8aaf3e2a2e`
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data); // DELETE AFTER
        setTickerNews(data);
      } else {
        setTickerNews([
          {
            headline: "No results found",
            url: "404",
          },
        ]);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <div className="App-wrapper">
      <div className="App">
        <Header searchSubmit={getTickerInfo} />
        <Display data={tickerNews} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
