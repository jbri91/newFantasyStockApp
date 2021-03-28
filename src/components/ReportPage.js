import React, {useState, useEffect} from "react";
import StockCard from "./StockCard";

function ReportPage() {

  const [ stock ] = useState(100000)


  // useEffect(() => {
  //   fetch('/stock')
  //   .then(res => res.json())
  //   .then(data => setStock(data))
  //   .catch(error => console.log(error))
  // }, [])


  return (
    <div className="App">
      <h1  style={{ fontWeight: 'bolder' }}> Current Balance: ${stock}</h1>
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

export default ReportPage;
