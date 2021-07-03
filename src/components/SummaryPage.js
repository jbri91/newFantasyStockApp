import React, { useState, useEffect } from "react";
import StockCard from "./StockCard";
import StockModal from "./StockModal";

function SummaryPage(props) {
  const [buyingPower, setBuyingPower] = useState("");
  const [purchasedStocks, setPurchasedStocks] = useState([]);
  const [tesla, setTesla] = useState([]);
  const [apple, setApple] = useState([]);
  const [amazon, setAmazon] = useState([]);
  const [microsoft, setMicrosoft] = useState([]);
  const [stockPrice, setStockPrice] = useState(0);
  const [stockName, setStockName] = useState("");
  const [dayChange, setDayChange] = useState("");
  const [percentageChange, setPercentageChange] = useState("");
  const [date, setDate] = useState("");
  const [symbol, setSymbol] = useState("");
  const [stockId, setStockId] = useState("");
  const [searchStock, setSearchStock] = useState("");
  const [accountValue, setAccountValue] = useState(0);

  const [sumOfAllStocksPurchased, setSumOfAllStocksPurchased] = useState(0);
  const { userId } = props;

  useEffect(() => {
    if (userId) {
      fetch("/api/tesla")
        .then((res) => res.json())
        .then((data) => setTesla(data))
        .then(
          fetch("/api/amazon")
            .then((res) => res.json())
            .then((data) => setAmazon(data))
        )
        .then(
          fetch("/api/microsoft")
            .then((res) => res.json())
            .then((data) => setMicrosoft(data))
        )
        .then(
          fetch("/api/apple")
            .then((res) => res.json())
            .then((data) => setApple(data))
        )
        .then(
          fetch(`/api/sumofallstockspurchased/${userId}`)
            .then((res) => res.json())
            .then((data) => setSumOfAllStocksPurchased(data))
        )
        .then(
          fetch(`/api/purchased/${userId}`)
            .then((res) => res.json())
            .then((data) => setPurchasedStocks(data))
        )
        .catch((error) => console.log(error))
        .then(
          fetch("/api/userbalance", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              userId: parseInt(userId),
            }),
          })
            .then((res) => res.json())
            .then((data) => setBuyingPower(data))
            .catch((error) => console.log(error))
        )
        .then(
          fetch("/api/accountvalue", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              userId: parseInt(userId),
            }),
          })
        )
        .then((res) => res.json())
        .then((data) => setAccountValue(data == 0 ? 20000 : data))
        .then(
          fetch(`/api/allsymbols/${userId}`)
            .then((res) => res.json())
            .then((data) => {
              for (let i = 0; i < data.length; i++) {
                fetch(`/api/searchStock/${data[i]}`)
                  .then((res) => res.json())
                  .then((data) =>
                    fetch("/api/lateststocks", {
                      method: "PUT",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        symbol: data.symbol,
                        stockPrice: data.latestPrice,
                        dayChange: data.change,
                        percentageChange: data.changePercent,
                        userId: parseInt(userId),
                      }),
                    })
                  );
              }
            })
            .catch((error) => console.log(error))
        );
    }
  }, [userId]);

  function handleSearch(e) {
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
        stockId={purchasedStocks[i][0]}
        symbol={purchasedStocks[i][1]}
        stockName={purchasedStocks[i][2]}
        price={purchasedStocks[i][3]}
        dayChange={purchasedStocks[i][4]}
        percentChange={purchasedStocks[i][5]}
        time={purchasedStocks[i][6]}
        shares={purchasedStocks[i][7]}
        initialPrice={purchasedStocks[i][9]}
        setPrice={setStockPrice}
        setStockName={setStockName}
        setSymbol={setSymbol}
        setDate={setDate}
        setDayChange={setDayChange}
        setPercentageChange={setPercentageChange}
        setStockId={setStockId}
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
        <h3>Buying Power: ${Number(buyingPower).toFixed(2)}</h3>
        <h3>Account Value: ${Number(accountValue).toFixed(2)}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleSearch} placeholder="Search" />
      </form>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {searchStock.companyName ? (
          <StockCard
            symbol={searchStock.symbol}
            stockName={searchStock.companyName}
            price={searchStock.latestPrice.toFixed(2)}
            dayChange={searchStock.change}
            percentChange={searchStock.changePercent}
            time={searchStock.latestTime}
            setPrice={setStockPrice}
            setStockName={setStockName}
            setSymbol={setSymbol}
            setDate={setDate}
            setDayChange={setDayChange}
            setPercentageChange={setPercentageChange}
            setStockId={setStockId}
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
          price={
            tesla.latestPrice ? tesla.latestPrice.toFixed(2) : tesla.latestPrice
          }
          dayChange={tesla.change}
          percentChange={tesla.changePercent}
          time={tesla.latestTime}
          setPrice={setStockPrice}
          setStockName={setStockName}
          setSymbol={setSymbol}
          setDate={setDate}
          setDayChange={setDayChange}
          setPercentageChange={setPercentageChange}
          setStockId={setStockId}
        />
        <StockCard
          symbol={amazon.symbol}
          stockName={amazon.companyName}
          price={
            amazon.latestPrice
              ? amazon.latestPrice.toFixed(2)
              : amazon.latestPrice
          }
          dayChange={amazon.change}
          percentChange={amazon.changePercent}
          time={amazon.latestTime}
          setPrice={setStockPrice}
          setStockName={setStockName}
          setSymbol={setSymbol}
          setDate={setDate}
          setDayChange={setDayChange}
          setPercentageChange={setPercentageChange}
          setStockId={setStockId}
        />
        <StockCard
          symbol={apple.symbol}
          stockName={apple.companyName}
          price={
            apple.latestPrice ? apple.latestPrice.toFixed(2) : apple.latestPrice
          }
          dayChange={apple.change}
          percentChange={apple.changePercent}
          time={apple.latestTime}
          setPrice={setStockPrice}
          setStockName={setStockName}
          setSymbol={setSymbol}
          setDate={setDate}
          setDayChange={setDayChange}
          setPercentageChange={setPercentageChange}
          setStockId={setStockId}
        />
        <StockCard
          symbol={microsoft.symbol}
          stockName={microsoft.companyName}
          price={
            microsoft.latestPrice
              ? microsoft.latestPrice.toFixed(2)
              : microsoft.latestPrice
          }
          dayChange={microsoft.change}
          percentChange={microsoft.changePercent}
          time={microsoft.latestTime}
          setPrice={setStockPrice}
          setStockName={setStockName}
          setSymbol={setSymbol}
          setDate={setDate}
          setDayChange={setDayChange}
          setPercentageChange={setPercentageChange}
          setStockId={setStockId}
        />
        <StockModal
          stockPrice={stockPrice}
          stockName={stockName}
          symbol={symbol}
          dayChange={dayChange}
          date={date}
          percentageChange={percentageChange}
          sumOfAllStocksPurchased={sumOfAllStocksPurchased}
          purchasedStocks={purchasedStocks}
          setPurchasedStocks={setPurchasedStocks}
          stockId={stockId}
          buyingPower={buyingPower}
          setBuyingPower={setBuyingPower}
          userId={userId}
        />
      </div>
    </div>
  );
}

export default SummaryPage;
