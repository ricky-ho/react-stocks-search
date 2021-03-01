const Stats = ({ data }) => {
  return (
    <section className="stats section">
      <div className="flex">
        <table>
          <tbody>
            <tr>
              <td>PREV CLOSE</td>
              <td>{data.previousClose}</td>
            </tr>
            <tr>
              <td>OPEN</td>
              <td>{data.open}</td>
            </tr>
            <tr>
              <td>HIGH</td>
              <td>{data.high}</td>
            </tr>
            <tr>
              <td>LOW</td>
              <td>{data.low}</td>
            </tr>
            <tr>
              <td>VOLUME</td>
              <td>{data.latestVolume.toLocaleString("en-US")}</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>MARKET CAP</td>
              <td>{data.marketCap.toLocaleString("en-US")}</td>
            </tr>
            <tr>
              <td>P/E</td>
              <td>{data.peRatio}</td>
            </tr>
            <tr>
              <td>52 WEEK HIGH</td>
              <td>{data.week52High}</td>
            </tr>
            <tr>
              <td>52 WEEK LOW</td>
              <td>{data.week52Low}</td>
            </tr>
            <tr>
              <td>AVG VOLUME</td>
              <td>{data.avgTotalVolume.toLocaleString("en-US")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Stats;
