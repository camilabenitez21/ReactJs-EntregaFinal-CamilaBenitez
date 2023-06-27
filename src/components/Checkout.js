import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Checkout({ cartItems }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  const navigate = useNavigate(); // Obtener la función de navegación

  const handleFinishCheckout = () => {
    // Lógica para finalizar el checkout
    navigate("/purchaseconfirmation"); // Redireccionar a la página de confirmación de compra
  };

  return (
    <div className="container">
      <h1>Checkout</h1>
      <h3>Resumen de compra:</h3>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - Cantidad: {item.quantity}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay elementos en el carrito.</p>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </form>

      <button
        type="button"
        className="btn btn-success"
        onClick={handleFinishCheckout} // Añadir evento para finalizar el checkout
      >
        Finalizar Checkout
      </button>

      <Link to="/">Volver a la tienda</Link>
    </div>
  );
}

export default Checkout;
