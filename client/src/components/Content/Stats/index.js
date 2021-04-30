import "./style.css";

const Stats = ({ data }) => {
  const formatLargeNumbers = (num) => {
    if (num === null) return null;

    const trillion = 1000000000000;
    if (num / trillion > 1) {
      return `${(num / trillion).toFixed(3)}T`;
    }
    if (num / (trillion / 1000) > 1) {
      return `${(num / (trillion / 1000)).toFixed(2)}B`;
    }
    return `${(num / (trillion / 1000000)).toFixed(2)}M`;
  };

  return (
    <section id="stats-section">
      <div className="stats-content">
        <table>
          <tbody>
            <tr>
              <th>Prev. Close</th>
              <td>{data.previousClose || "--"}</td>
            </tr>
            <tr>
              <th>Open</th>
              <td>{data.open || "--"}</td>
            </tr>
            <tr>
              <th>High</th>
              <td>{data.high || "--"}</td>
            </tr>
            <tr>
              <th>Low</th>
              <td>{data.low || "--"}</td>
            </tr>
            <tr>
              <th>Volume</th>
              <td>{formatLargeNumbers(data.latestVolume) || "--"}</td>
            </tr>
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <th>Marketcap</th>
              <td>{formatLargeNumbers(data.marketCap) || "--"}</td>
            </tr>
            <tr>
              <th>P/E</th>
              <td>{data.peRatio || "--"}</td>
            </tr>
            <tr>
              <th>52 Week High</th>
              <td>{data.week52High || "--"}</td>
            </tr>
            <tr>
              <th>52 Week Low</th>
              <td>{data.week52Low || "--"}</td>
            </tr>
            <tr>
              <th>Avg. Volume</th>
              <td>{formatLargeNumbers(data.avgTotalVolume) || "--"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Stats;
