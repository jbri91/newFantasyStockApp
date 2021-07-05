import React, { useEffect, useState, useRef } from "react";

function ReviewOrder(props) {
  const { selected } = props;
  const { quantity } = props;
  const { stockId } = props;
  const { purchasedStocks } = props;
  const { setPurchasedStocks } = props;
  const { userId } = props;
  const { buyingPower } = props;
  const { setBuyingPower } = props;
  const [shares, setShares] = useState([]);
  const countRef = useRef(0);

  // console.log(shares)

  useEffect(() => {
    for (let i = 0; i < purchasedStocks.length; i++) {
      if (stockId === purchasedStocks[i][0]) {
        setShares(purchasedStocks[i][7]);
      }
    }

    if (userId) {
      fetch(`/api/purchased/${userId}`)
        .then((res) => res.json())
        .then((data) => setPurchasedStocks(data))
        .catch((error) => console.log(error));
    }
  }, [
    shares,
    buyingPower,
    stockId,
    userId,
    quantity,
    setPurchasedStocks,
    countRef.purchasedStocks,
    quantity,
  ]);

 async function handlePlaceOrder() {
    let boughtStock = buyingPower - props.stockSum;
    // let sellingStock = Number(buyingPower) + props.stockSum;

    if (selected === "Buy") {
      if (props.stockSum > buyingPower) {
        alert("You do not have enough buy power!");
      } else {
        await fetch("/api/buystock", {
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
            userId: parseInt(userId),
            initialPrice: props.stockPrice,
          }),
        })
          .then(
            await fetch(`/api/purchased/${userId}`)
              .then((res) => res.json())
              .then((data) => props.setPurchasedStocks(data))
              .catch((error) => console.log(error))
          )
          .then(
            await fetch("/api/boughtstock", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                userId: parseInt(userId),
                boughtStock: boughtStock,
              }),
            })
          )
          .then(
            await fetch("/api/userbalance", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                userId: parseInt(userId),
              }),
            })
              .then((res) => res.json())
              .then((data) => setBuyingPower(data))
              .catch((error) => console.log(error))
          );
      }
    } else if (selected === "Sell") {
      // let soldStock = shares - quantity;

      if (shares - quantity >= 1) {
        fetch("/api/updatestocks", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            shares: shares - quantity,
            stock_id: stockId,
          }),
        });

        fetch("/api/boughtstock", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: parseInt(userId),
            boughtStock: Number(buyingPower) + props.stockSum,
          }),
        });
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
      } else {
        fetch("/api/deleterow", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            stock_id: stockId,
          }),
        }).then(
          fetch(`/api/purchased/${userId}`)
            .then((res) => res.json())
            .then((data) => props.setPurchasedStocks(data))
            .catch((error) => console.log(error))
        );
        fetch("/api/boughtstock", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: parseInt(userId),
            boughtStock: Number(buyingPower) + props.stockSum,
          }),
        }).then(
          fetch("/api/userbalance", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              userId: parseInt(userId),
            }),
          })
            .then((res) => res.json())
            .then((data) => setBuyingPower(data))
        );
      }
    }
  }

  let boughtStock = buyingPower - props.stockSum;
  let sellingStock = Number(buyingPower) + Number(props.stockSum);
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
                <p>Estimated Total: ${Number(props.stockSum).toFixed(2)}</p>
                <p>
                  {" "}
                  Remaining Buy Power: $
                  {props.selected === "Buy"
                    ? boughtStock.toFixed(2)
                    : sellingStock.toFixed(2)}
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
