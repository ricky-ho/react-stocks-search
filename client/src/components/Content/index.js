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
      <div className="main-header">
        <div className="company-logo">
          <img
            src={`https://logo.clearbit.com/${company.website}`}
            alt={`${quote.companyName} logo`}
          />
        </div>
        <div>
          <h1 className="main-title">{quote.companyName}</h1>
          <p>{`${quote.symbol} | ${quote.primaryExchange}`}</p>
        </div>
      </div>

      <div className="main-item first">
        <Quote data={quote} />
        <Stats data={quote} />
      </div>
      <div className="main-item">
        <DataChart data={data["intraday-prices"]} priceChange={quote.change} />
      </div>
      <div className="main-item">
        <Company general={company} quote={quote} />
      </div>
      <div className="main-item last">
        <News data={news} />
      </div>
    </>
  );
};

export default Content;
