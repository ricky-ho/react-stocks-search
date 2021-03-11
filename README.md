# React-Stocks-Search

Check out the application [here](https://ricky-ho.github.io/react-stocks-search/).

## Description
This stock market inspired project allows users to search for any public stock, provided that it is available on the Investors Exchange (IEX). Users will have to enter their desired company's ticker symbol in order for the search to work. The application will then retrieve common market data on that company through [IEX Cloud](https://iexcloud.io) and render that information on screen (data includes latest stock quote, intraday price movement, company information/description, and three latest news articles). The chart for intraday price movement was created using [Apexcharts](https://apexcharts.com/) and [React-Apexcharts](https://www.npmjs.com/package/react-apexcharts).

**NOTE**: Due to IEX free tier restrictions, historical price data is not included in the chart. The intraday price data may also be incomplete (e.g. missing market data for specific times throughout the day) which may cause breaks in the chart.

![screenshot of the app 1](./client/src/images/ss-1.png)

![screenshot of the app 2](./client/src/images/ss-2.png)

![screenshot of the app 3](./client/src/images/ss-3.png)
