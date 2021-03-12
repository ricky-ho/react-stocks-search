import Quote from "./Quote";
import Stats from "./Stats";
import DataChart from "./DataChart";
import Company from "./Company";
import News from "./News";
import "./style.css";

const Display = ({ data, localeDate }) => {
  return Object.keys(data).length !== 0 && !data.error ? (
    <main className="flex-col">
      <div className="flex-col separator">
        <h1 id="title" className="font-l">
          ({data.quote.symbol}) {data.quote.companyName}
        </h1>
        <div id="main-details" className="flex main">
          <Quote data={data.quote} localeDate={localeDate} />
          <Stats data={data.quote} />
        </div>
      </div>
      <div className="separator">
        <DataChart
          data={data["intraday-prices"]}
          priceChange={data.quote.change}
        />
      </div>
      <div className="separator">
        <Company data={data.company} symbol={data.quote.symbol} />
      </div>
      <News data={data.news} localeDate={localeDate} />
    </main>
  ) : (
    <main className="flex justify-center ">
      <div id="error" className="font-xl">
        {data.status ? data.status : "Error"} -{" "}
        {data.message ? data.message : "Symbol not found in IEX database"}
      </div>
    </main>
  );
};

export default Display;
