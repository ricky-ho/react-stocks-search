# React-Stocks-Search

Check out the application at [https://reactstocksearch.netlify.app](https://reactstocksearch.netlify.app).

## Description
This stock market inspired web application allows users to search for any publicly traded US stock, provided that it is available on the Investors Exchange (IEX). Users will be able to search for a specific stock by entering the company's ticker symbol. The application will then make an API request to retrieve the market data on that stock through the [IEXCloud API](https://iexcloud.io). Due to the limited API credits, the data that is requested will contain the latest stock quote, intraday price movement, company information & description, and the most recent news article. The chart for intraday price movement was created using [Apexcharts](https://apexcharts.com/) and [React-Apexcharts](https://www.npmjs.com/package/react-apexcharts).

**NOTE**: Due to the IEXCloud API's free tier restrictions, historical price data is not included in the price movement chart. The intraday price data may also be incomplete (e.g. missing market data for short intervals of time throughout the day) which may cause breaks in the chart.

## External Dependencies
- [IEXCloud API](https://iexcloud.io)
- [Apexcharts](https://apexcharts.com/)
  - [react-apexcharts](https://www.npmjs.com/package/react-apexcharts)
- [moment.js](https://momentjs.com/)
- [react-icons](https://react-icons.github.io/react-icons)

## Screenshots
![screenshot of the app 1](https://res.cloudinary.com/ricky-ho/image/upload/v1628835882/Stocks%20Search/stocksearch_1280.png)

![screenshot of the app 2](https://res.cloudinary.com/ricky-ho/image/upload/v1628837122/Stocks%20Search/stocksearch_2_ovgmwf.png)

