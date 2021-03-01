const Quote = ({ data }) => {
  return (
    <section className="quote section">
      <h1 className="font-l">
        {data.companyName} ({data.symbol})
      </h1>
      <p className="font-xs">{data.primaryExchange} | Currency in USD</p>
      <p className="font-xl">{data.latestPrice}</p>
      <p className="font-xs">
        {data.latestSource} | {data.latestTime}{" "}
      </p>
    </section>
  );
};

export default Quote;
