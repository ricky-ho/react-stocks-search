import { unixToLocaleDate } from "../../../utils/date";

const setSeries = (data) => {
  const series = [
    {
      name: "Price",
      data: data.map((minutebar, index) => {
        // If the minutebar's closing value is null, use the previous non-null closing value
        if (minutebar.close === null && index !== 0) {
          minutebar.close = data[index - 1].close;
        }
        const datetime = Date.parse(`${minutebar.date} ${minutebar.minute}`);
        return [datetime, minutebar.close];
      }),
    },
  ];
  return series;
};

const setOptions = (priceChange) => {
  const colorBullish = "#00873c";
  const colorBearish = "#eb0f29";
  const chartColor = priceChange > 0 ? colorBullish : colorBearish;

  return {
    chart: {
      id: "area-datetime",
      type: "area",
      zoom: {
        enabled: false,
      },
      animations: {
        enabled: false,
      },
      fill: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      xaxis: {
        lines: { show: true },
      },
      yaxis: {
        lines: { show: true },
      },
      padding: {
        top: 5,
      },
    },
    markers: {
      size: 0,
      colors: ["black"],
      strokeWidth: 0,
      showNullDataPoints: false,
      hover: {
        size: 4,
      },
    },
    stroke: {
      colors: [chartColor],
      width: 2,
    },
    fill: {
      type: "solid",
      colors: [chartColor],
      opacity: 0.3,
    },
    xaxis: {
      type: "datetime",
      labels: {
        datetimeFormatter: {
          hour: "h:mm TT",
          minute: "h:mm TT",
        },
        datetimeUTC: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: true,
        position: "back",
        stroke: {
          color: "gray",
          dashArray: 2,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      decimalsInFloat: 2,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: true,
        position: "back",
        stroke: {
          color: "#909090",
          dashArray: 2,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        formatter: (timestamp) => {
          const HOUR_TO_MS = 60 * 60 * 1000;
          return unixToLocaleDate(timestamp - 3 * HOUR_TO_MS);
        },
      },
      y: {
        formatter: (price) => `$${price.toFixed(2)}`,
      },
      marker: {
        show: false,
      },
    },
  };
};

export { setSeries, setOptions };
