import React, { useEffect, useState } from "react";
function ReportPage() {
  const [allStocks, setAllStocks] = useState([])
  const [allSymbols, setAllSymbols] = useState([])
  const [numberShares, setNumberShares ] = useState([])
  const [totalInvested, setTotalInvested ] = useState([])
  const [totalPortfolioSum, setTotalPortfolioSum] = useState([])
  const [portfolioPercentage, setPortfolioPercentage] = useState([])

  useEffect(() => {
    fetch('/api/purchased')
    .then(res => res.json())
    .then(data => setAllStocks(data))
  }, [])
  
  console.log(allStocks)

  useEffect(() => {
    fetch('/api/allsymbols')
    .then(res => res.json())
    .then(data => setAllSymbols(data))
  }, [])


  
  useEffect(() => {
    fetch('/api/shares')
    .then(res => res.json())
    .then(data => setNumberShares(data))
  }, [])
  
  useEffect(() => {
    fetch('/api/invested')
    .then(res => res.json())
    .then(data => setTotalInvested(data))
  }, [])

  useEffect(() => {
    fetch('/api/totalPortfolio')
    .then(res => res.json())
    .then(data => setTotalPortfolioSum(data))
  }, [])

  console.log(totalPortfolioSum)

  useEffect(() => {
    setPortfolioPercentage((totalInvested / totalPortfolioSum) * 100)
  }, [])
console.log(portfolioPercentage)


  return (
    <div className="App">
      <table style={{ color: "white" }} className="table">
        <thead>
          <tr>
            <th scope="col">Symbol</th>
            <th scope="col">Shares</th>
            <th scope="col">Total Invested</th>
            <th scope="col"> % of Your Portfolio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {allSymbols[0]} </td>
            <td> {numberShares} </td>
            <td> {totalInvested} </td>
            <td> {(totalInvested / totalPortfolioSum * 100).toFixed(2)} % </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ReportPage;
