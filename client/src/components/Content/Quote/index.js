import { unixToLocaleDate } from "../../../utils/date";
import { formatChangeString } from "../../../utils/format";
import "./style.css";

const Quote = ({ data }) => {
  return (
    <section id="quote-section">
      <p className="quote-meta">
        {data.primaryExchange ? `${data.primaryExchange} | ` : ""}
        Currency in USD
      </p>

      <p className="quote">
        {data.latestPrice || "--"}
        <span
          className={`${
            Number(data.change) >= 0 ? "color-bullish" : "color-bearish"
          }`}
        >
          {" "}
          {formatChangeString(data.change, data.changePercent) || "-- (--)"}
        </span>
      </p>

      <p className="quote-meta">
        {data.latestSource || "--"} |{" "}
        {unixToLocaleDate(data.latestUpdate) || "--"} |{" "}
        <a href="https://iexcloud.io" rel="noopener noreferrer" target="_blank">
          IEX Cloud
        </a>
      </p>
    </section>
  );
};

export default Quote;
