import React, { useState } from "react";
import { Link } from "react-router-dom";

function Checkout({ cartItems }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const { firstName, lastName, email } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <h3>Complete los siguientes datos:</h3>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
      </div>
      {cartItems.length > 0 ? (
        <div>
          <h3>Productos en el carrito:</h3>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - Cantidad: {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
      <div style={{ textAlign: "center" }}>
        <Link to="/purchase-id">
          <button type="submit" onClick={handleSubmit}>
            Finalizar compra
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Checkout;
