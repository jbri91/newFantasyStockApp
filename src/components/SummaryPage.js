import React from "react";
import StockCard from "./StockCard";

function SummaryPage() {
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
          symbol="TSLA"
          stockName="Tesla Inc. - Common Stock"
          price="$880.80"
          dayChange="34.16 (4.03%)"
          time="04:00:00pm ET 01/25/21"
        />
        <StockCard
          symbol="TSLA"
          stockName="Tesla Inc. - Common Stock"
          price="$880.80"
          dayChange="34.16 (4.03%)"
          time="04:00:00pm ET 01/25/21"
        />
        <StockCard
          symbol="TSLA"
          stockName="Tesla Inc. - Common Stock"
          price="$880.80"
          dayChange="34.16 (4.03%)"
          time="04:00:00pm ET 01/25/21"
        />
        <StockCard
          symbol="TSLA"
          stockName="Tesla Inc. - Common Stock"
          price="$880.80"
          dayChange="34.16 (4.03%)"
          time="04:00:00pm ET 01/25/21"
        />
        <StockCard
          symbol="TSLA"
          stockName="Tesla Inc. - Common Stock"
          price="$880.80"
          dayChange="34.16 (4.03%)"
          time="04:00:00pm ET 01/25/21"
        />
      </header>
      <h1 style={{ fontSize: "30px", marginTop: "15px" }}> Popular Stocks </h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <StockCard 
        symbol="AAPL"
        stockName="Apple"
        price="$880.80"
        dayChange="34.16 (4.03%)"
        time="04:00:00pm ET 01/25/21"/>
        <StockCard
        symbol="AMZN"
        stockName="Amazon"
        price="$880.80"
        dayChange="34.16 (4.03%)"
        time="04:00:00pm ET 01/25/21" />
        <StockCard
        symbol="MSFT"
        stockName="Microsoft"
        price="$880.80"
        dayChange="34.16 (4.03%)"
        time="04:00:00pm ET 01/25/21" />
        <StockCard
        symbol="NVDA"
        stockName="Nvidia"
        price="$880.80"
        dayChange="34.16 (4.03%)"
        time="04:00:00pm ET 01/25/21" />
      </div>
    </div>
  );
}

export default SummaryPage;
