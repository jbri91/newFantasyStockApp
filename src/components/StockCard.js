import React from "react";
import { Card } from "react-bootstrap";

function StockCard(props) {
  const {price} = props;
  const {stockName} = props;
  const {symbol} = props;

  function handleClick() {
    props.setPrice(price);
    props.setStockName(stockName);
    props.setSymbol(symbol);
  }

  const greenStock={
    fontSize: "12px", 
    fontWeight: "bold", 
    color: "green"
  }

  const redStock={
    fontSize: "12px", 
    fontWeight: "bold", 
    color: "red"
  }

  return (
    <div>
      <Card style={{ width: "18rem", height: "11rem", margin: "20px" }}>
        <Card.Header
          style={{
            color: "black",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
            height: "3rem",
            fontSize: "16px",
            textDecoration: "underline",
          }}
        >
          <p>{props.symbol}</p>
          <p
            type="button"
            data-toggle="modal"
            data-target="#stockModal"
            onClick={handleClick}
          >
            Trade
          </p>
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
              <Card.Text style={{ fontSize: "12px", color: "gray" }}>
                {" "}
                Day's change
              </Card.Text>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: "10px",
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
                ${props.price}{" "}
              </Card.Text>
              <Card.Text
                style={ props.dayChange >= 0 ? greenStock : redStock }
              >
                {" "}
                {props.dayChange} ({props.percentChange}%){" "}
              </Card.Text>
            </div>
          </div>
          <Card.Text
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "gray",
              display: "flex",
            }}
          >
            {props.time}
          </Card.Text>
        </Card.Body>
      </Card> 
    </div>
  );
}

export default StockCard;
