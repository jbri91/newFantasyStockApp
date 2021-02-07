import React from "react";
import { Card } from "react-bootstrap";

function StockCard(props) {
  console.log(props)
  return (
    <div>
      <Card style={{ width: "18rem", height: '11rem', margin: '20px' }}>
        <Card.Header
          style={{
            color: "black",
            fontWeight: "bold",
            display: "flex",
            justifyContent: 'space-between',
            height: "3rem",
            fontSize: "16px",
            textDecoration: "underline",
          }}
        >
            <p>
          {props.symbol}
          </p>
          <p type='button'
          data-toggle='modal'
          data-target='#stockModal'>Trade</p>
        </Card.Header>
        <Card.Body>
          <Card.Text
            style={{
              fontSize: "12px",
              color: "gray",
              textDecoration: "underline",
              display: "flex",
              justifyContent: "left",
            }}
          >
            {" "}
            {props.stockName}
          </Card.Text>
          <div style={{ display: "grid", justifyContent: "left" }}>
            <div
              style={{
                color: "gray",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Card.Text
                style={{
                  display: "flex",
                  fontSize: "12px",
                  marginBottom: "0px",
                }}
              >
                {" "}
                Price{" "}
              </Card.Text>
              <Card.Text
                style={{ fontSize: "12px", color: "gray" }}
              >
                {" "}
                Day's change
              </Card.Text>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: '10px'
              }}
            >
              <Card.Text
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "black",
                  marginRight: "15px",
                  marginBottom: "0px",
                }}
              >
                {" "}
                {props.price}{" "}
              </Card.Text>
              <Card.Text
                style={{ fontSize: "12px", fontWeight: "bold", color: "green" }}
              >
                {" "}
                {props.dayChange}{" "}
              </Card.Text>
            </div>
          </div>
          <Card.Text style={{ fontSize: "12px", fontWeight: "bold", color: "gray", display: 'flex'}}> 04:00:00pm ET 01/25/21 </Card.Text>
        </Card.Body>
      </Card>

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
            <div style={{ display: 'flex', justifyContent: 'space-around'  }} className="modal-body">
                <div>
                <p  style={{ marginBottom: '0px'}}>Action</p>
                <select name='trade' id='trade'>
                <option value='buy'> --Select-- </option>
                  <option value='buy'> Buy </option>
                  <option value='buy'> Sell </option>
                </select>
                </div>
                <div>
                <p style={{ marginBottom: '0px'}}>Quanity</p>
                <input type="number" style={{ width: '100px', height:'32px'}} />
            </div>
            </div>
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

export default StockCard;
