import React from "react";
import StockCard from "./StockCard";

function ReportPage() {
  return (
    <div className="App">
      <h1  style={{ fontWeight: 'bolder' }}> Current Balance: $100,000</h1>
      <br/>
      <h2 style={{ color: 'gray', fontWeight: 'bolder'}}>Market Snapshot</h2>
      <div
        style={{ display: "flex", justifyContent: "space-around", borderStyle: 'solid' }}
      >
        <StockCard
          symbol="$DJI"
          stockName="DOW JONES 30 INDUSTRIALS"
          price="$30,303.17"
          dayChange="30,303.17 (-2.05)"
          time="04:53:58pm ET 01/27/21"
        />
        <StockCard
          symbol="$COMPX"
          stockName="NASDAQ Composite"
          price="$13,271"
          dayChange="-355.47 (-2.61%)"
          time="05:16:00pm ET 01/27/21"
        />
         <StockCard
          symbol='$SPX.X'
          stockName="S&P 500"
          price="$3,750.77"
          dayChange="-98.85 (-2.57%)"
          time="04:53:00pm ET 01/27/21"
        />
      </div>
    </div>
  );
}

export default ReportPage;
