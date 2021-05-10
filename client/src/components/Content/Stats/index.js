import { formatLargeNumbers } from "../../../utils/format";
import "./style.css";

const Stats = ({ data }) => {
  return (
    <section id="stats-section">
      <div className="stats-content">
        <table className="table-1">
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

        <table className="table-2">
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
