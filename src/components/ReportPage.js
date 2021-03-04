import React, {useState, useEffect} from "react";
import StockCard from "./StockCard";

function ReportPage() {

  const [stock, setStock] = useState([])

  useEffect(() => {
    fetch('/stock')
    .then(res => res.json())
    .then(data => setStock(data))
    .catch(error => console.log(error))
  }, [])

  console.log(stock)

  return (
    <div className="App">
      <h1  style={{ fontWeight: 'bolder' }}> Current Balance: $100,000</h1>
      <br/>
      <h2 style={{ color: 'gray', fontWeight: 'bolder'}}>Market Snapshot</h2>
      <div
        style={{ display: "flex", justifyContent: "space-around", borderStyle: 'solid' }}
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
