import React, { useState, useEffect } from "react";
import StockCard from "./StockCard";

function SummaryPage() {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    fetch("/stock")
      .then((res) => res.json())
      .then((data) => setStock(data))
      .catch((error) => console.log(error));
  }, []);

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
      </header>
      <h1 style={{ fontSize: "30px", marginTop: "15px" }}> Popular Stocks </h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
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
