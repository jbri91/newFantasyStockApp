import React, { useEffect, useState } from "react";

function ReviewOrder(props) {
  const [buyingStock, setBuyingStock] = useState("");
  const [postId, setPostId] = useState(null);


  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        symbol : 'symbol',
        stockName : 'stockName',
        price : 'price',
        day_change : 'day_change',
        percentage_change : 'percentage_change',
        date : 'date'
     })
    };
    fetch('/api/buystock', requestOptions)
    .then(res => res.json())
    .then(data => setPostId(data))
    .catch(error => console.log(error))
  }, []);
  
  console.log(postId)
  
  function handlePlaceOrder() {
      
  console.log(postId)

    console.log(
      "Price ",
      props.stockPrice,
      "Estimated Total ",
      props.stockSum,
      "Remaining Buy Power ",
      props.buyingPower - props.sumofPurchasedStocks - props.stockSum,
      "Quantity ",
      props.quantity,
      "Stock Symbol ",
      props.symbol
    );
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
                    ? props.buyingPower -
                      props.sumofPurchasedStocks -
                      props.stockSum
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
