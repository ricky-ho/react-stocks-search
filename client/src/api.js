const getSymbolData = async (query) => {
  try {
    const response = await fetch(
      `https://cloud.iexapis.com/stable/stock/${query}/batch?types=quote,company,news,intraday-prices&last=3&token=${process.env.REACT_APP_IEX_API_PUBLIC_KEY}`
    );

    if (!response.ok) {
      return handleAPIError(response);
    }

    const data = await response.json();

    // Edge case for IEX API in which the data is not in the database, but
    // response returned ok
    if (data.quote === null || data.company === null) {
      return handleAPIError({
        status: "400",
        statusText: "IEX returned null data",
      });
    } else {
      return {
        ...data,
        error: false,
        quote: filterQuoteData(data.quote),
        company: filterCompanyData(data.company),
      };
    }
  } catch (err) {
    return handleAPIError({
      status: 500,
      statusText: "Internal server error",
    });
  }
};

const filterQuoteData = (data) => {
  const filtered_data = {
    symbol: data.symbol,
    companyName: data.companyName,
    primaryExchange: data.primaryExchange,
    open: data.open,
    previousClose: data.previousClose,
    high: data.high,
    low: data.low,
    latestPrice: data.latestPrice,
    latestSource: data.latestSource,
    latestUpdate: data.latestUpdate,
    latestVolume: data.latestVolume,
    volume: data.volume,
    avgTotalVolume: data.avgTotalVolume,
    change: data.change,
    changePercent: data.changePercent,
    week52High: data.week52High,
    week52Low: data.week52Low,
    peRatio: data.peRatio,
    marketCap: data.marketCap,
  };
  return filtered_data;
};

const filterCompanyData = (data) => {
  const filtered_data = {
    description: data.description,
    CEO: data.CEO,
    employees: data.employees,
    sector: data.sector,
    industry: data.industry,
    city: data.city,
    state: data.state,
  };
  return filtered_data;
};

const handleAPIError = (response) => {
  return { error: true, status: response.status, message: response.statusText };
};

export { getSymbolData };
