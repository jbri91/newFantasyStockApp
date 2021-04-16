import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

function ReviewOrder(props) {
  const { selected } = props;
  const { quantity } = props;
  const { stockId } = props;
  const { setQuantity } = props;
  // const [buyingStock, setBuyingStock] = useState("");

  function handlePlaceOrder() {
    if (selected === "Buy") {
      if (props.stockSum > props.buyingPower) {
        alert("You do not have enough buy power!");
      } else {
        console.log(props.quantity);
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            symbol: props.symbol,
            stockName: props.stockName,
            price: props.stockPrice,
            day_change: props.dayChange,
            percentage_change: props.percentageChange,
            date: props.date,
            shares: quantity,
          }),
        };
        fetch("/api/buystock", requestOptions)
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));

        fetch("/api/purchased")
          .then((res) => res.json())
          .then((data) => props.setPurchasedStocks(data))
          .catch((error) => console.log(error));

        props.setBuyingPower(props.buyingPower - props.stockSum);
      }
    } else if (selected === "Sell") {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          shares: quantity,
          stock_id: stockId
        }),
      };
      fetch("/api/updatestocks", requestOptions)
        .then((res) => res.json())
        .then((data) => setQuantity(data))
        .catch((error) => console.log(error));

      // const requestOptions = {
      //   method: "DELETE",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     stock_id: props.stockId,
      //   }),
      // };
      // fetch("/api/deleterow", requestOptions).then(() =>
      //   fetch("/api/purchased")
      //     .then((res) => res.json())
      //     .then((data) => props.setPurchasedStocks(data))
      //     .catch((error) => console.log(error))
      // );
      props.setBuyingPower(props.buyingPower + props.stockSum);
    }
    fetch("/api/purchased")
      .then((res) => res.json())
      .then((data) => props.setPurchasedStocks(data))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <div
        id="reviewModal"
        className="modal fade"
        role="dialog"
        style={{ color: "black" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title"> Review Order </h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div
              style={{ display: "flex", justifyContent: "space-around" }}
              className="modal-body"
            >
              <div style={{ fontSize: "20px" }}>
                <p>
                  {props.selected} {props.quantity} shares of {props.symbol} (
                  {props.stockName})
                </p>
                <p> Limit at ${props.stockPrice}</p>
                <p>Estimated Total: ${props.stockSum}</p>
                <p>
                  {" "}
                  Remaining Buy Power: $
                  {props.selected === "Buy"
                    ? (
                        props.buyingPower -
                        props.sumofPurchasedStocks -
                        props.stockSum
                      ).toFixed(2)
                    : props.buyingPower -
                      props.sumofPurchasedStocks +
                      props.stockSum}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-info"
              style={{ color: "black", fontWeight: "bolder" }}
              onClick={handlePlaceOrder}
              data-dismiss="modal"
            >
              Place Order
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
      </div>
    </div>
  );
}

export default ReviewOrder;
