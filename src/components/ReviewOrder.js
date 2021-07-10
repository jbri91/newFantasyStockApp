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
  const { setAccountValue } = props;
  const { setReviewOrderErrors } = props;
  const [shares, setShares] = useState([]);
<<<<<<< HEAD
=======
  const countRef = useRef(0);

  // console.log(shares)
>>>>>>> toggleModal

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
<<<<<<< HEAD
  }, [shares, buyingPower, purchasedStocks]);

  function handlePlaceOrder() {
    let boughtStock = buyingPower - props.stockSum;
    let sellingStock = Number(buyingPower) + props.stockSum;
=======

    fetch("/api/accountvalue", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: parseInt(userId),
      }),
    })
      .then((res) => res.json())
      .then((data) => setAccountValue(Number(data) === 0 ? 20000 : data))
      .catch((error) => console.log(error));
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
>>>>>>> toggleModal

    if (selected === "Buy") {
      if (props.stockSum > buyingPower) {
        setReviewOrderErrors('"You do not have enough buying power!"');
      } else {
<<<<<<< HEAD
        fetch("/api/buystock", {
=======
        setReviewOrderErrors("");
        await fetch("/api/buystock", {
>>>>>>> toggleModal
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            symbol: props.symbol,
            stockName: props.stockName,
            price: props.stockPrice,
            day_change: props.dayChange,
            percentage_change: props.percentageChange,
            date: props.date,
            shares: parseInt(quantity),
            userId: parseInt(userId),
            initialPrice: props.stockPrice,
          }),
<<<<<<< HEAD
        }).then(
        fetch(`/api/purchased/${userId}`)
          .then((res) => res.json())
          .then((data) => props.setPurchasedStocks(data))
          .catch((error) => console.log(error))
          ).then(
        fetch("/api/boughtstock", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: parseInt(userId),
            boughtStock: boughtStock.toFixed(2),
          }),
        })).then(

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
      }
    } else if (selected === "Sell") {
      let soldStock = shares - quantity;

      if (soldStock >= 1) {
        console.log("Or am I being called first");
        fetch("/api/updatestocks", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            shares: soldStock,
            stock_id: stockId,
          }),
        });
        fetch(`/api/purchased/${userId}`)
          .then((res) => res.json())
          .then((data) => props.setPurchasedStocks(data))
          .catch((error) => console.log(error));

        fetch("/api/boughtstock", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: parseInt(userId),
            boughtStock: sellingStock,
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
        console.log("I am getting called to delete the whole row");
        fetch("/api/deleterow", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            stock_id: stockId,
          }),
        });
        fetch(`/api/purchased/${userId}`)
          .then((res) => res.json())
          .then((data) => props.setPurchasedStocks(data))
          .catch((error) => console.log(error));

        fetch("/api/boughtstock", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: parseInt(userId),
            boughtStock: sellingStock,
          }),
        });
        fetch("/api/userbalance", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: userId,
          }),
        })
          .then((res) => res.json())
          .then((data) => setBuyingPower(data))
          .catch((error) => console.log(error));
=======
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
      if (shares == 0) {
        setReviewOrderErrors("You do not own this stock!");
      } else {
        setReviewOrderErrors("");
        if (quantity > shares) {
          setReviewOrderErrors("You do not have that many shares to sell!");
        } else {
          setReviewOrderErrors("");
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
            setReviewOrderErrors("");
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
>>>>>>> toggleModal
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
