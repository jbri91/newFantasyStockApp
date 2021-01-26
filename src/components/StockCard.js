import React from "react";
import { Card } from "react-bootstrap";

function StockCard() {
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
          TSLA
          </p>
          <p type='button'>Trade</p>
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
            Tesla Inc. - Common Stock
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
                $880.80{" "}
              </Card.Text>
              <Card.Text
                style={{ fontSize: "12px", fontWeight: "bold", color: "green" }}
              >
                {" "}
                34.16 (4.03%){" "}
              </Card.Text>
            </div>
          </div>
          <Card.Text style={{ fontSize: "12px", fontWeight: "bold", color: "gray", display: 'flex'}}> 04:00:00pm ET 01/25/21 </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default StockCard;
