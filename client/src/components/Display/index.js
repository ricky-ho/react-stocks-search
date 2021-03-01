import Quote from "./Quote";
import Stats from "./Stats";
import Company from "./Company";
import News from "./News";
import "./styles.css";

const Display = ({ data }) => {
  return Object.keys(data).length !== 0 ? (
    <div className="display">
      <Quote data={data.quote} />
      <Stats data={data.quote} />
      <Company data={data.companyInfo} symbol={data.quote.symbol} />
      <News data={data.news} />
    </div>
  ) : (
    <div className="display"></div>
  );
};

export default Display;
