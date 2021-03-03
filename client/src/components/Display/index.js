import Quote from "./Quote";
import Stats from "./Stats";
import Company from "./Company";
import News from "./News";
import "./style.css";

const Display = ({ data }) => {
  return Object.keys(data).length !== 0 ? (
    <main className="display flex-col">
      <div className="flex separator">
        <Quote data={data.quote} />
        <Stats data={data.quote} />
      </div>
      <div className="separator">
        <Company data={data.company} symbol={data.quote.symbol} />
      </div>
      <News data={data.news} />
    </main>
  ) : (
    <div className="display"></div>
  );
};

export default Display;
