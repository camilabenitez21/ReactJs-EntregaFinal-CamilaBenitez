import React from "react";
import { Link } from "react-router-dom";

function PurchaseConfirmation() {
  return (
    <div className="container">
      <h1>Confirmación de compra</h1>
      <p>Muchas Gracias por confiar en nosotros.
        Tu compra ha sido confirmada.</p>
      <p>Tu ID de compra es: AbG268.</p>
      <p>
        ¿Quieres seguir comprando? <Link to="/">Volver a la tienda</Link>
      </p>
    </div>
  );
}

export default PurchaseConfirmation;
