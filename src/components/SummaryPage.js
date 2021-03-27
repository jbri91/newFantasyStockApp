import React, { useState, useEffect } from "react";
import StockCard from "./StockCard";

function SummaryPage() {
  const [stock, setStock] = useState([]);
  const [popularStocks, setPopularStocks] =  useState([]);

  useEffect(() => {
    fetch('/api/popularstocks')
    .then((res) => res.json())
    .then((data) => setPopularStocks(data))
    .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("/api/purchased")
      .then((res) => res.json())
      .then((data) => setStock(data))
      .catch((error) => console.log(error));
  }, []);

  let stocksPurchased = []

  for(let i = 0; i < stock.length; i++){stocksPurchased.push(<StockCard
  key = {stock[i][0]}
  symbol={stock[i][1]}
  stockName={stock[i][2]}
  price={stock[i][3]}
  dayChange={stock[i][4]}
  percentChange={stock[i][5]}
  time={stock[i][6]}
/>)}


  return (
    <div>
      <input placeholder="Search" />
      <h1 style={{ fontSize: "30px", marginTop: "15px" }}>
        {" "}
        Postitions Cards{" "}
      </h1>
      <header
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
       {stocksPurchased}
      </header>
      <h1 style={{ fontSize: "30px", marginTop: "15px" }}> Popular Stocks </h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <StockCard
          symbol={popularStocks.symbol}
          stockName={popularStocks.companyName}
          price={popularStocks.latestPrice}
          dayChange={popularStocks.change}
          percentChange={popularStocks.changePercent}
          time={popularStocks.latestTime}
        />
        <StockCard
          symbol={stock.symbol}
          stockName={stock.companyName}
          price={stock.latestPrice}
          dayChange={stock.change}
          percentChange={stock.changePercent}
          time={stock.latestTime}
        />
        <StockCard
          symbol={stock.symbol}
          stockName={stock.companyName}
          price={stock.latestPrice}
          dayChange={stock.change}
          percentChange={stock.changePercent}
          time={stock.latestTime}
        />
        <StockCard
          symbol={stock.symbol}
          stockName={stock.companyName}
          price={stock.latestPrice}
          dayChange={stock.change}
          percentChange={stock.changePercent}
          time={stock.latestTime}
        />
      </div>
    </div>
  );
}

export default SummaryPage;
