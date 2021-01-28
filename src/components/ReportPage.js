import React from "react";
import StockCard from "./StockCard";

function ReportPage() {
  return (
    <div className="App">
      <h1> Current Balance: $100,000</h1>
      <header
        className="App-header"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <StockCard
          symbol="$DJI"
          stockName="DOW JONES 30 INDUSTRIALS"
          price="$30,303.17"
          dayChange="30,303.17 (-2.05)"
          time="04:53:58pm ET 01/27/21"
        />
        <StockCard
          symbol="NDAQ"
          stockName="Nasdaq Inc.-Common Stock"
          price="$141.20"
          dayChange="0.07 (0.05%)"
          time="04:00:00pm ET 01/27/21"
        />
         <StockCard
          symbol='$SPX.X'
          stockName="S&P 500"
          price="$3,750.77"
          dayChange="-98.85 (-2.57%)"
          time="04:53:00pm ET 01/27/21"
        />
      </header>
    </div>
  );
}

export default ReportPage;
