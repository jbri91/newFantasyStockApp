import React from "react";
import { Card } from "react-bootstrap";

function StockCard() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Header
          style={{
            color: "black",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "left",
            height: "4rem",
          }}
        >
          TSLA
        </Card.Header>
        <Card.Body style={{ display: 'flex', justifyContent: 'left'}}>
          <Card.Text style={{ fontSize: '12px', color: 'gray'}}> Tesla Inc. - Common Stock</Card.Text>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default StockCard;
