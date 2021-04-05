import React, { useState, useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import StockCard from "./StockCard";
import StockModal from "./StockModal";

function SummaryPage() {
  const [buyingPower, setBuyingPower] = useState(20000);
  const [purchasedStocks, setPurchasedStocks] = useState([]);
  const [tesla, setTesla] = useState([]);
  const [apple, setApple] = useState([]);
  const [amazon, setAmazon] = useState([]);
  const [microsoft, setMicrosoft] = useState([]);
  const [stockPrice, setStockPrice] = useState(0);
  const [stockName, setStockName] = useState("");
  const [dayChange, setDayChange] = useState('');
  const [percentageChange, setPercentageChange] = useState('')
  const [date, setDate] = useState('')
  const [symbol, setSymbol] = useState("");
  const [searchStock, setSearchStock] = useState("");
  const [accountValue, setAccountValue] = useState(0);
  const [sumofPurchasedStocks, setSumofPurchasedStocks] = useState(0);
  const [profitDebt, setProfitDebt] = useState(0);

console.log(searchStock)

  useEffect(() => {
    setAccountValue(
      buyingPower - sumofPurchasedStocks + parseFloat(sumofPurchasedStocks)
    );
  }, []);

  // useEffect(() => {
  //   setProfitDebt((accountValue - buyingPower).toFixed(2));
  // }, []);

  useEffect(() => {
    fetch("/api/sum")
      .then((res) => res.json())
      .then((data) => setSumofPurchasedStocks(data));
  }, []);

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
        setDate={setDate}
        setDayChange={setDayChange}
        setPercentageChange={setPercentageChange}
      />
    );
  }

  return (
    <div>
      <div
        style={{
          display: "grid",
          justifyContent: "flex-start",
          marginLeft: "10px",
          borderStyle: "solid",
          width: "400px",
          position: "relative",
          top: "-70px",
          left: "-10px",
        }}
      >
        <h3>Buying Power: ${buyingPower -  sumofPurchasedStocks}</h3>
        <h3>Account Value: ${accountValue}</h3>
        <h3>Profit/Debt: ${profitDebt}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleSearch} placeholder="Search" />
      </form>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {searchStock.companyName ? (
          <StockCard
            symbol={searchStock.symbol}
            stockName={searchStock.companyName}
            price={searchStock.latestPrice}
            dayChange={searchStock.change}
            percentChange={searchStock.changePercent}
            time={searchStock.latestTime}
            setPrice={setStockPrice}
            setStockName={setStockName}
            setSymbol={setSymbol}
            setDate={setDate}
        setDayChange={setDayChange}
        setPercentageChange={setPercentageChange}

          />
        ) : null}
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
          setDate={setDate}
        setDayChange={setDayChange}
        setPercentageChange={setPercentageChange}

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
          setDate={setDate}
        setDayChange={setDayChange}
        setPercentageChange={setPercentageChange}

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
          setDate={setDate}
        setDayChange={setDayChange}
        setPercentageChange={setPercentageChange}

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
          setDate={setDate}
          setDayChange={setDayChange}
          setPercentageChange={setPercentageChange}

        />
        <StockModal
          stockPrice={stockPrice}
          stockName={stockName}
          symbol={symbol}
          dayChange={dayChange}
          date={date}
          percentageChange={percentageChange}
          buyingPower={buyingPower}
          sumofPurchasedStocks={sumofPurchasedStocks}
        />
      </div>
    </div>
  );
}

export default SummaryPage;
