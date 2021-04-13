import React, { useEffect, useState } from "react";
function ReportPage() {
  const [allSymbols, setAllSymbols] = useState([]);
  const [numberShares, setNumberShares] = useState([]);
  const [totalInvested, setTotalInvested] = useState([]);
  const [totalPortfolioSum, setTotalPortfolioSum] = useState([]);


  useEffect(() => {
    fetch("/api/allsymbols")
      .then((res) => res.json())
      .then((data) => setAllSymbols(data));
  }, [allSymbols]);

  useEffect(() => {
    fetch("/api/shares")
      .then((res) => res.json())
      .then((data) => setNumberShares(data));
  }, [numberShares]);

  useEffect(() => {
    fetch("/api/invested")
      .then((res) => res.json())
      .then((data) => setTotalInvested(data));
  }, [totalInvested]);

  useEffect(() => {
    fetch("/api/totalPortfolio")
      .then((res) => res.json())
      .then((data) => setTotalPortfolioSum(data));
  }, [totalPortfolioSum]);


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
  }

  let stockRows = [];
  for (let i = 0; i < allSymbols.length; i++) {
    stockRows.push(
      <tr key={i}>
        <td> {allSymbols[i]} </td>
        <td> {numberShares[i]} </td>
        <td> ${totalInvested[i]} </td>
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
