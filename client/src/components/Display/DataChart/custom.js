const setSeries = (data) => {
  let series = [
    {
      name: "Price",
      data: data.map((bar) => {
        let datetime = Date.parse(`${bar.date} ${bar.minute}`);
        return [datetime, bar.close];
      }),
    },
  ];
  return series;
};

const setOptions = (priceChange) => {
  let chartColor = priceChange > 0 ? "#00873c" : "#eb0f29";

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
      colors: ["#000"],
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
      opacity: 0.4,
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
        show: true,
        color: "#bcbec0",
      },
      axisTicks: {
        show: true,
        color: "#bcbec0",
      },
      crosshairs: {
        show: true,
        position: "back",
        stroke: {
          color: "#909090",
          dashArray: 2,
        },
      },
    },
    yaxis: {
      decimalsInFloat: 2,
      axisBorder: {
        color: "#bcbec0",
      },
      axisTicks: {
        show: true,
        color: "#bcbec0",
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
        formatter: (value) => {
          return (
            new Date(value).toLocaleString([], {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
            }) + " EST"
          );
        },
      },
      y: {
        formatter: (value) => {
          return `$${value.toFixed(2)}`;
        },
      },
      marker: {
        show: false,
      },
    },
  };
};

export { setSeries, setOptions };
