import React, { useState } from "react";
import StockCard from "./StockCard";

function ReportPage() {

  const [ stock ] = useState(20000)


  // useEffect(() => {
  //   fetch('/stock')
  //   .then(res => res.json())
  //   .then(data => setStock(data))
  //   .catch(error => console.log(error))
  // }, [])


  return (
    <div className="App">
      <h1  style={{ fontWeight: 'bolder' }}> Buying Power: ${stock}</h1>
      <h1 style={{ fontWeight: 'bolder' }}>Account Value: $22000</h1>
      <h1 style={{ fontWeight: 'bolder' }}>Profit/Debt $2000</h1>
    </div>
  );
}

export default ReportPage;
