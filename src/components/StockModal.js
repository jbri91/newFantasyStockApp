import React from "react";
import ReviewOrder from "./ReviewOrder";

function StockModal() {
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
              <select name="trade" id="trade">
                <option > --Select-- </option>
                <option value="buy"> Buy </option>
                <option value="sell"> Sell </option>
              </select>
            </div>
            <div>
              <p style={{ marginBottom: "0px" }}>Quanity</p>
              <input type="number" style={{ width: "100px", height: "32px" }} />
            </div>
          </div>
          <button
            type="button"
            className="btn btn-info"
            style={{ color: "black", fontWeight: "bolder" }}
            data-toggle="modal"
            data-target="#reviewModal"
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
      <ReviewOrder />
    </div>
  );
}

export default StockModal;
