import Quote from "./Quote";
import Stats from "./Stats";
import DataChart from "./DataChart";
import CompanyInfo from "./CompanyInfo";
import News from "./News";
import Error from "./Error";
import "./style.css";

const Content = ({ data }) => {
  if (data.error) {
    return <Error data={data} />;
  }

  return (
    <main className="main-content">
      <h1 className="main-title">
        {`(${data.quote.symbol}) ${data.quote.companyName}`}
      </h1>
      <div className="main-item">
        <Quote data={data.quote} />
        <Stats data={data.quote} />
      </div>
      <div className="main-item">
        <DataChart
          data={data["intraday-prices"]}
          priceChange={data.quote.change}
        />
      </div>
      <div className="main-item">
        <CompanyInfo data={data.company} symbol={data.quote.symbol} />
      </div>
      <div className="main-item last">
        <News data={data.news} />
      </div>
    </main>
  );
};

export default Content;
