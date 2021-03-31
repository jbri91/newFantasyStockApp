import React, { useState, useEffect } from "react";
import StockCard from "./StockCard";
import StockModal from "./StockModal";

function SummaryPage() {
  const [balance, setBalance] = useState(20000);
  const [purchasedStocks, setPurchasedStocks] = useState([]);
  const [tesla, setTesla] = useState([]);
  const [apple, setApple] = useState([]);
  const [amazon, setAmazon] = useState([]);
  const [microsoft, setMicrosoft] = useState([]);
  const [stockPrice, setStockPrice] = useState(0);
  const [stockName, setStockName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [searchStock, setSearchStock] = useState("");
  const [purchasedTotal, setPurchasedTotal] = useState(0);
  const [profitDebt, setProfitDebt] = useState(0);


  useEffect(() => {
    fetch("/api/tesla")
      .then((res) => res.json())
      .then((data) => setTesla(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("/api/amazon")
      .then((res) => res.json())
      .then((data) => setAmazon(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("/api/microsoft")
      .then((res) => res.json())
      .then((data) => setMicrosoft(data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetch("/api/apple")
      .then((res) => res.json())
      .then((data) => setApple(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("/api/purchased")
      .then((res) => res.json())
      .then((data) => setPurchasedStocks(data))
      .catch((error) => console.log(error));
  }, []);


  function handleSearch(e) {
    console.log(e.target.value);
    setSearchStock(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(); 
    fetch(`/api/searchStock/${searchStock}`)
      .then((res) => res.json())
      .then((data) => setSearchStock(data))
      .catch((error) => console.log(error));
  }



  let stocksPurchased = [];
  for (let i = 0; i < purchasedStocks.length; i++) { 
    stocksPurchased.push(
      <StockCard
        key={purchasedStocks[i][0]}
        symbol={purchasedStocks[i][1]}
        stockName={purchasedStocks[i][2]} 
        price={purchasedStocks[i][3]}
        dayChange={purchasedStocks[i][4]}
        percentChange={purchasedStocks[i][5]}
        time={purchasedStocks[i][6]}
        setPrice={setStockPrice}
        setStockName={setStockName}
        setSymbol={setSymbol}
      />
    );
  }
  



 
  for(let j=0; j < purchasedStocks.length;j++){
    let sum = 0;  
    sum += purchasedStocks[j][3]; 
    setPurchasedTotal(sum);
  } 
  console.log(purchasedTotal)


  
  return (
    <div>
      <div style={{ display: 'grid',justifyContent:'flex-start', marginLeft:'10px', borderStyle:'solid', width:'400px', position:'relative', top:'-70px', left:'-10px' }}>
      <h3>Buying Power: ${balance}</h3>
      <h3>Account Value: ${purchasedTotal}</h3>
      <h3>Profit/Debt: ${profitDebt}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleSearch} placeholder="Search" />
      </form>
      <div style={{display:"flex", justifyContent: 'center'}}>
      {searchStock.companyName ? <StockCard
        symbol={searchStock.symbol}
        stockName={searchStock.companyName}
        price={searchStock.latestPrice}
        dayChange={searchStock.change}
        percentChange={searchStock.changePercent}
        time={searchStock.latestTime}
        setPrice={setStockPrice}
        setStockName={setStockName}
        setSymbol={setSymbol}
      /> : null} 
      </div>
      <h1 style={{ fontSize: "30px", marginTop: "15px" }}> Positions Cards </h1>
      <header
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {stocksPurchased}
      </header>
      <h1 style={{ fontSize: "30px", marginTop: "15px" }}> Popular Stocks </h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <StockCard
          symbol={tesla.symbol}
          stockName={tesla.companyName}
          price={tesla.latestPrice}
          dayChange={tesla.change}
          percentChange={tesla.changePercent}
          time={tesla.latestTime}
          setPrice={setStockPrice}
          setStockName={setStockName}
          setSymbol={setSymbol}
        />
        <StockCard
          symbol={amazon.symbol}
          stockName={amazon.companyName}
          price={amazon.latestPrice}
          dayChange={amazon.change}
          percentChange={amazon.changePercent}
          time={amazon.latestTime}
          setPrice={setStockPrice}
          setStockName={setStockName}
          setSymbol={setSymbol}
        />
        <StockCard
          symbol={apple.symbol}
          stockName={apple.companyName}
          price={apple.latestPrice}
          dayChange={apple.change}
          percentChange={apple.changePercent}
          time={apple.latestTime}
          setPrice={setStockPrice}
          setStockName={setStockName}
          setSymbol={setSymbol}
        />
        <StockCard
          symbol={microsoft.symbol}
          stockName={microsoft.companyName}
          price={microsoft.latestPrice}
          dayChange={microsoft.change}
          percentChange={microsoft.changePercent}
          time={microsoft.latestTime}
          setPrice={setStockPrice}
          setStockName={setStockName}
          setSymbol={setSymbol}
        />
        <StockModal
          stockPrice={stockPrice}
          stockName={stockName}
          symbol={symbol}
        />
      </div>
    </div>
  );
}

export default SummaryPage;
