import React, { useEffect, useState } from "react";
function ReportPage() {
  const [allSymbols, setAllSymbols] = useState([]);
  const [numberShares, setNumberShares] = useState([]);
  const [totalInvested, setTotalInvested] = useState([]);
  const [totalPortfolioSum, setTotalPortfolioSum] = useState([]);
  const [stockReport, setStockReport] = useState([])


  useEffect(() => {
    fetch("/api/allsymbols")
      .then((res) => res.json())
      .then((data) => setAllSymbols(data))
      .catch(error => console.log(error));
      fetch("/api/shares")
      .then((res) => res.json())
      .then((data) => setNumberShares(data))
      .catch(error => console.log(error));
      fetch("/api/invested")
      .then((res) => res.json())
      .then((data) => setTotalInvested(data))
      .catch(error => console.log(error));
      fetch("/api/totalPortfolio")
      .then((res) => res.json())
      .then((data) => setTotalPortfolioSum(data))
      .catch(error => console.log(error));

      fetch('/api/stockreport')
      .then(res => res.json())
      .then(data => setStockReport(data))
      .catch(error => console.log(error))
  }, []);



  function handleDelete(e) {
    console.log(e.target.id)
    const requestOptions = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({
        stock_symbol: e.target.id,
      })
    };
    fetch('/api/deleteall', requestOptions)
  
 
//       for(let i = 0; i < stockReport.length; i++) { 
// const index = stockReport[i][0].indexOf(e.target.id)
// console.log(index)
//       }
    // for(let i = 0; i < stockReport.length; i++) {
    //  const index = stockReport[i].indexOf(e.target.id)
    //  stockReport.splice(index, 1)
    //  console.log(stockReport)
    

// console.log(index)
      // Find index of item I want to delete
      // Delete item based on the index
      // One state which includes symbols and shares
    
  }


 

   




  let stockRows = [];
  for (let i = 0; i < stockReport.length; i++) {
    stockRows.push(
      <tr key={i}>
        <td> {stockReport[i][0]} </td>
        <td> {stockReport[i][1]} </td>
        <td> ${(numberShares[i] * totalInvested[i]).toFixed(2)} </td>
        <td> {((totalInvested[i] / totalPortfolioSum) * 100).toFixed(2)}% </td>
        <td>
          <button id={allSymbols[i]} type="button" onClick={handleDelete} className="btn btn-secondary">
            Sell All
          </button>
        </td>
      </tr>
    );
  }

  return (
    <div className="App">
      <table style={{ color: "white" }} className="table">
        <thead>
          <tr>
            <th scope="col">Symbol</th>
            <th scope="col">Shares</th>
            <th scope="col">Total Invested</th>
            <th scope="col"> % of Your Portfolio</th>
            <th>Quick Sell</th>
          </tr>
        </thead>
        <tbody>
          {stockRows}
        </tbody>
      </table>
    </div>
  );
}

export default ReportPage;
