import "./style.css";

const formatChange = (change, percent) => {
  let op = change >= 0 ? `+` : "";
  return `${op}${change} (${op}${percent})`;
};

const Quote = ({ data }) => {
  return (
    <section id="quote" className="display-section">
      <div className="quote-content">
        <h1 className="font-l quote-title">
          {data.companyName} ({data.symbol})
        </h1>
        <p className="font-xs font-secondary">
          {data.primaryExchange} | Currency in USD
        </p>
      </div>

      <div className="quote-content">
        <p className="font-xxl">
          {data.latestPrice}
          <span
            className={`font-m ${data.change >= 0 ? "font-green" : "font-red"}`}
          >
            {" "}
            {formatChange(data.change, data.changePercent)}
          </span>
        </p>
      </div>

      <div className="quote-content">
        <p className="font-xs font-secondary">
          {data.latestSource} | {data.latestTime} |{" "}
          <a
            className="font-xs font-tertiary no-text-decoration"
            href="https://iexcloud.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            IEX Cloud
          </a>
        </p>
      </div>
    </section>
  );
};

export default Quote;
