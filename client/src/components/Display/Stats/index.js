import "./style.css";

const formatLargeNums = (num) => {
  const trillion = 1000000000000;
  if (num / trillion > 1) {
    return `${(num / trillion).toFixed(3)}T`;
  } else if (num / (trillion / 1000) > 1) {
    return `${(num / (trillion / 1000)).toFixed(2)}B`;
  } else {
    return `${(num / (trillion / 1000000)).toFixed(2)}M`;
  }
};

const Stats = ({ data }) => {
  return (
    <section
      id="quote-stats"
      className="display-section flex justify-center align-center"
    >
      <div className="stats-content flex">
        <table className="stats-table">
          <tbody>
            <tr>
              <th className="font-secondary">Prev. Close</th>
              <td>{data.previousClose}</td>
            </tr>
            <tr>
              <th className="font-secondary">Open</th>
              <td>{data.open}</td>
            </tr>
            <tr>
              <th className="font-secondary">High</th>
              <td>{data.high}</td>
            </tr>
            <tr>
              <th className="font-secondary">Low</th>
              <td>{data.low}</td>
            </tr>
            <tr>
              <th className="font-secondary">Volume</th>
              <td>{formatLargeNums(data.latestVolume)}</td>
            </tr>
          </tbody>
        </table>
        <table className="stats-table">
          <tbody>
            <tr>
              <th className="font-secondary">Marketcap</th>
              <td>{formatLargeNums(data.marketCap)}</td>
            </tr>
            <tr>
              <th className="font-secondary">P/E</th>
              <td>{data.peRatio}</td>
            </tr>
            <tr>
              <th className="font-secondary">52 Week High</th>
              <td>{data.week52High}</td>
            </tr>
            <tr>
              <th className="font-secondary">52 Week Low</th>
              <td>{data.week52Low}</td>
            </tr>
            <tr>
              <th className="font-secondary">Avg. Volume</th>
              <td>{formatLargeNums(data.avgTotalVolume)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Stats;
