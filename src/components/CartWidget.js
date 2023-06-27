import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function CartWidget({ cartItems }) {
  return (
    <div>
      <div className="row">
        {cartItems && cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems &&
              cartItems.map((item) => (
                <li key={item.id}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <Button variant="danger">Remove</Button>
                    </Card.Body>
                  </Card>
                </li>
              ))}
          </ul>
        )}
      </div>
      <div className="row">
        <Link to="/checkout">
          <Button variant="primary">Checkout</Button>
        </Link>
      </div>
    </div>
  );
}

export default CartWidget;
