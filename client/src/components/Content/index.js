import Quote from "./Quote";
import Stats from "./Stats";
import DataChart from "./DataChart";
import Company from "./Company";
import News from "./News";
import Error from "./Error";
import "./style.css";

const Content = ({ data }) => {
  const { quote, company, news } = data;

  if (data.error) return <Error data={data} />;

  return (
    <>
      <h1 className="main-title">{`(${quote.symbol}) ${quote.companyName}`}</h1>
      <div className="main-item">
        <Quote data={quote} />
        <Stats data={quote} />
      </div>
      <div className="main-item">
        <DataChart data={data["intraday-prices"]} priceChange={quote.change} />
      </div>
      <div className="main-item">
        <Company data={company} symbol={quote.symbol} />
      </div>
      <div className="main-item last">
        <News data={news} />
      </div>
    </>
  );
};

export default Content;
