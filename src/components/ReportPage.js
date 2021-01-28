import React from "react";
import StockCard from "./StockCard";

function ReportPage() {
  return (
    <div className="App">
      <header className="App-header" style={{ display: 'flex', justifyContent: 'center'}}>
        <StockCard
        symbol= '$DJI'
        stockName= 'DOW JONES 30 INDUSTRIALS'
        price='$30,303.17'
        dayChange='30,303.17 (-2.05)'
        time='04:53:58pm ET 01/27/21' />
          <StockCard
        symbol= 'NDAQ'
        stockName= 'Nasdaq Inc.-Common Stock'
        price='$141.20'
        dayChange='0.07 (0.05%)'
        time='04:00:00pm ET 01/27/21' />
      </header>
    </div>
  );
}

export default ReportPage;
