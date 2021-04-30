import Chart from "react-apexcharts";
import { setSeries, setOptions } from "./chart-settings";
import "./style.css";

const DataChart = ({ data, priceChange }) => {
  let series = setSeries(data);
  let options = setOptions(priceChange);

  return (
    <section id="chart-section">
      <p className="chart-disclaimer">
        <span>DISCLAIMER:</span> Due to IEX free tier restrictions, only the
        stock's intraday prices will be displayed.
      </p>
      <Chart
        options={options}
        series={series}
        type="area"
        height={500}
        width="100%"
      />
    </section>
  );
};

export default DataChart;
