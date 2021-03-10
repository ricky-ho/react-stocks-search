import Chart from "react-apexcharts";
import { setSeries, setOptions } from "./custom";

const DataChart = ({ data, priceChange }) => {
  let series = setSeries(data);
  let options = setOptions(priceChange);
  return (
    <section id="chart" className="display-section flex-col">
      <p className="text-center">
        <strong className="font-xs">
          *Due to IEX free tier restrictions, only the intraday prices will be
          displayed. The data may also be incomplete, thus may not reflect the
          entire market day and may cause breaks in the chart.
        </strong>
      </p>
      <Chart
        options={options}
        series={series}
        type="area"
        height={500}
        width="96%"
      />
    </section>
  );
};

export default DataChart;
