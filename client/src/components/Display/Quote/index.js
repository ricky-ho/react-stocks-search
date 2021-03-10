const formatChange = (change, percent) => {
  let op = change >= 0 ? `+` : "";
  return `${op}${change.toFixed(2)} (${op}${(percent * 100).toFixed(2)}%)`;
};

const Quote = ({ data, localeDate }) => {
  return (
    <section id="quote" className="display-section">
      <div>
        <p className="font-xs font-secondary">
          {data.primaryExchange ? `${data.primaryExchange} | ` : ""} Currency in
          USD
        </p>
      </div>

      <div>
        <p className="font-xxl">
          {data.latestPrice ? data.latestPrice.toFixed(2) : "--"}
          <span
            className={`font-m ${data.change >= 0 ? "font-green" : "font-red"}`}
          >
            {" "}
            {data.change !== null && data.changePercent !== null
              ? formatChange(data.change, data.changePercent)
              : ""}
          </span>
        </p>
      </div>

      <div>
        <p className="font-xs font-secondary">
          {data.latestSource} | {localeDate(data.latestUpdate)} |{" "}
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
