import React, { useState } from "react";
import ReviewOrder from "./ReviewOrder";

function StockModal(props) {
  const [selected, setSelected] = useState("");
  const [quantity, setQuantity] = useState("");
  const [stockSum, setStockSum] = useState([]);

  function handleStockSum() {
    if (quantity <= 0 || selected === "" || selected === 'Select') {
      console.log('Please Fill Out All Fields')
    } else {
      let price = props.stockPrice;
      setStockSum(price * quantity);
    }
  }

  function handleSelectChange(e) {
    setSelected(e.target.value);
  }

  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }

  return (
    <div
      id="stockModal"
      className="modal fade"
      role="dialog"
      style={{ color: "black" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title"> Buy/Sell Stock</h4>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div
            style={{ display: "flex", justifyContent: "space-around" }}
            className="modal-body"
          >
            <div>
              <p style={{ marginBottom: "0px" }}>Action</p>
              <select
                name="trade"
                id="trade"
                value={selected}
                onChange={handleSelectChange}
              >
                <option value="Select"> --Select-- </option>
                <option value="Buy"> Buy </option>
                <option value="Sell"> Sell </option>
              </select>
            </div>
            <div>
              <p style={{ marginBottom: "0px" }}>Quanity</p>
              <input
                type="number"
                style={{ width: "100px", height: "32px" }}
                onChange={handleQuantityChange}
              />
            </div>
          </div>
          <button
            type="button"
            className="btn btn-info"
            style={{ color: "black", fontWeight: "bolder" }}
            data-toggle="modal"
            data-target="#reviewModal"
            onClick={handleStockSum}
          >
            Review Order
          </button>
          <div
            className="modal-footer"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <ReviewOrder
        stockSum={stockSum}
        stockPrice={props.stockPrice}
        stockName={props.stockName}
        symbol={props.symbol}
        stockId={props.stockId}
        dayChange={props.dayChange}
        percentageChange={props.percentageChange}
        date={props.date}
        quantity={quantity}
        selected={selected}
        buyingPower={props.buyingPower}
        sumofPurchasedStocks={props.sumofPurchasedStocks}
        purchasedStocks={props.purchasedStocks}
        setPurchasedStocks={props.setPurchasedStocks}
        buyingPower = {props.buyingPower}
        setBuyingPower = {props.setBuyingPower}
      />
    </div>
  );
}

export default StockModal;
