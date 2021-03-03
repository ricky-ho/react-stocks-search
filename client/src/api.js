//public token: Tpk_1ba9a99eab1f410d8a803b8aaf3e2a2e
// REFACTOR: Use Batch requests
//  - GET /stock/{symbol}/batch
//  - https://iexcloud.io/docs/api/#batch-requests
// https://sandbox.iexapis.com/stable/stock/${query}/batch?types=quote,company,news&last=3&token=${process.env.REACT_APP_PUBLIC_KEY}

const getSymbolData = async (query) => {
  const data = {
    quote: await getSymbolQuote(query),
    companyInfo: await getSymbolCompanyInfo(query),
    news: await getSymbolNews(query),
  };
  return data;
};

const getSymbolQuote = async (query) => {
  try {
    const response = await fetch(
      `https://sandbox.iexapis.com/stable/stock/${query}/quote?token=Tpk_1ba9a99eab1f410d8a803b8aaf3e2a2e`
    );

    if (!response.ok) {
      return handleAPIError(response);
    }

    const data = await response.json();
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
      latestTime: data.latestTime,
      latestVolume: data.latestVolume,
      volume: data.volume,
      avgTotalVolume: data.avgTotalVolume,
      change: data.change.toFixed(2),
      changePercent: (data.changePercent * 100).toFixed(2),
      week52High: data.week52High,
      week52Low: data.week52Low,
      peRatio: data.peRatio,
      marketCap: data.marketCap,
    };
    return filtered_data;
  } catch (err) {
    console.warn(err);
  }
};

const getSymbolCompanyInfo = async (query) => {
  try {
    const response = await fetch(
      `https://sandbox.iexapis.com/stable/stock/${query}/company?token=Tpk_1ba9a99eab1f410d8a803b8aaf3e2a2e`
    );

    if (!response.ok) {
      return handleAPIError(response);
    }

    const data = await response.json();
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
  } catch (err) {
    console.warn(err);
  }
};

const getSymbolNews = async (query) => {
  try {
    const response = await fetch(
      `https://sandbox.iexapis.com/stable/stock/${query}/news/last/3?token=Tpk_1ba9a99eab1f410d8a803b8aaf3e2a2e`
    );

    if (!response.ok) {
      return handleAPIError(response);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
};

const handleAPIError = (response) => {
  return { error: true, status: response.status, message: response.statusText };
};

export { getSymbolData };
