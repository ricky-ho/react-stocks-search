import { unixToLocaleDate } from "../../../utils/date";
import "./style.css";

const Quote = ({ data }) => {
  const formatChangeString = (change, percent) => {
    if (change === null || percent === null) return null;

    const op = Number(change) >= 0 ? `+` : "";
    return `${op}${change} (${op}${percent}%)`;
  };

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
          {formatChangeString(data.change, data.changePercent) || ""}
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
