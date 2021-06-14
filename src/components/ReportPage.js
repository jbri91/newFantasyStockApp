import React, { useEffect, useState } from "react";
function ReportPage(props) {
  const [allSymbols, setAllSymbols] = useState([]);
  const [numberShares, setNumberShares] = useState([]);
  const [totalInvested, setTotalInvested] = useState([]);
  const [totalPortfolioSum, setTotalPortfolioSum] = useState([]);
  const [stockReport, setStockReport] = useState([]);
  const { userId } = props;
  const [buyingPower, setBuyingPower] = useState("");
  const { fetchBuyingPower } = props;

  

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    

    fetch(`/api/allsymbols/${userId}`)
      .then((res) => res.json())
      .then((data) => setAllSymbols(data))
      .catch((error) => console.log(error));
    fetch(`/api/shares/${userId}`)
      .then((res) => res.json())
      .then((data) => setNumberShares(data))
      .catch((error) => console.log(error));
    fetch(`/api/totalPortfolio/${userId}`, { signal:signal })
      .then((res) => res.json())
      .then((data) => setTotalPortfolioSum(data))
      .catch((error) => console.log(error));

    fetch(`/api/stockreport/${userId}`)
      .then((res) => res.json())
      .then((data) => setStockReport(data))
      .catch((error) => console.log(error));

    fetch("/api/userbalance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: parseInt(userId),
      }),
    })
      .then((res) => res.json())
      .then((data) => setBuyingPower(data))
      .catch((error) => console.log(error));

      return function cleanup() {
        abortController.abort()
      }
  }, []);

  function handleDelete(e) {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        stock_symbol: e.target.id,
        userId: parseInt(userId),
      }),
    };
    fetch("/api/deleteall", requestOptions).then((res) => {
      fetch(`/api/allsymbols/${userId}`)
        .then((res) => res.json())
        .then((data) => setAllSymbols(data))
        .catch((error) => console.log(error));
      fetch(`/api/stockreport/${userId}`)
        .then((res) => res.json())
        .then((data) => setStockReport(data))
        .catch((error) => console.log(error));
      fetch(`/api/shares/${userId}`)
        .then((res) => res.json())
        .then((data) => setNumberShares(data))
        .catch((error) => console.log(error));
      fetch(`/api/totalPortfolio/${userId}`)
        .then((res) => res.json())
        .then((data) => setTotalPortfolioSum(data))
        .catch((error) => console.log(error));


        let amountInvested = -1;
        for(let i =0; i < stockReport.length; i++){
          if(stockReport[i][0] == e.target.id) {
            amountInvested = stockReport[i][2] * stockReport[i][1];
            break;
          }
        }
        let updatedBalance = Number(Number(buyingPower) + amountInvested).toFixed(2)
        console.log('buyingPower:', Number(buyingPower),'amountInvested: ', amountInvested.toFixed(2), 'updatedBalance: ', updatedBalance)
        fetch('/api/boughtstock', {
          method: 'PUT',
          headers: { 'Content-Type' : 'application/json' },
          body: JSON.stringify({
            userId: parseInt(userId),
            boughtStock: updatedBalance,
          })
        }).catch(error => console.log(error))
       

        
      let stockRows = [];
      for (let i = 0; i < numberShares.length; i++) {
        stockRows.push(
          <tr key={i}>
            <td> {stockReport[i][0]} </td>
            <td> {stockReport[i][1]} </td>
            <td> ${(stockReport[i][1] * stockReport[i][2]).toFixed(2)} </td>
            <td>
              {" "}
              {((stockReport[i][2] / totalPortfolioSum) * 100).toFixed(
                2
              )}%{" "}
            </td>
            <td>
              <button
                id={stockReport[i][0]}
                type="button"
                onClick={handleDelete}
                className="btn btn-secondary"
              >
                Sell All
              </button>
            </td>
          </tr>
        );
      }
    });
  }


  let stockRows = [];
  for (let i = 0; i < stockReport.length; i++) {
    stockRows.push(
      <tr key={i}>
        <td> {stockReport[i][0]} </td>
        <td> {stockReport[i][1]} </td>
        <td> ${(stockReport[i][1] * stockReport[i][2]).toFixed(2)} </td>
        <td>
          {" "}
          {(((stockReport[i][2] / totalPortfolioSum) * 100) * stockReport[i][1]).toFixed(2)}%{" "}
        </td>
        <td>
          <button
            id={stockReport[i][0]}
            type="button"
            onClick={handleDelete}
            className="btn btn-secondary"
          >
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
        <tbody>{stockRows}</tbody>
      </table>
    </div>
  );
}

export default ReportPage;
