import React, { useState, useEffect } from "react";
import StockCard from "./StockCard";

function SummaryPage() {
  const [stock, setStock] = useState([]);
  const [tesla, setTesla] =  useState([]);
  const [apple, setApple] = useState([]);
  const [amazon, setAmazon] = useState([]);
  const [microsoft, setMicrosoft] =useState([]);

  useEffect(() => {
    fetch('/api/tesla')
    .then((res) => res.json())
    .then((data) => setTesla(data))
    .catch((error) => console.log(error));
  }
  , []);

  useEffect(() => {
    fetch('/api/amazon')
    .then((res) => res.json())
    .then((data) => setAmazon(data))
    .catch((error) => console.log(error));
  }
  , []);

  useEffect(() => {
    fetch('/api/microsoft')
    .then((res) => res.json())
    .then((data) => setMicrosoft(data))
    .catch((error) => console.log(error));
  }
  , []);
  useEffect(() => {
    fetch('/api/apple')
    .then((res) => res.json())
    .then((data) => setApple(data))
    .catch((error) => console.log(error));
  }
  , []);

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
        Positions Cards{" "}
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
          symbol={tesla.symbol}
          stockName={tesla.companyName}
          price={tesla.latestPrice}
          dayChange={tesla.change}
          percentChange={tesla.changePercent}
          time={tesla.latestTime}
        />
        <StockCard
          symbol={amazon.symbol}
          stockName={amazon.companyName}
          price={amazon.latestPrice}
          dayChange={amazon.change}
          percentChange={amazon.changePercent}
          time={amazon.latestTime}
        />
        <StockCard
          symbol={apple.symbol}
          stockName={apple.companyName}
          price={apple.latestPrice}
          dayChange={apple.change}
          percentChange={apple.changePercent}
          time={apple.latestTime}
        />
        <StockCard
          symbol={microsoft.symbol}
          stockName={microsoft.companyName}
          price={microsoft.latestPrice}
          dayChange={microsoft.change}
          percentChange={microsoft.changePercent}
          time={microsoft.latestTime}
        />
      </div>
    </div>
  );
}

export default SummaryPage;
