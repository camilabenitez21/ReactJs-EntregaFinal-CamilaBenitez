import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MiNavbar from "./components/NavBar";
import CartWidget from './components/CartWidget';
import Home from './components/Home';
import Checkout from './components/Checkout';
import PurchaseConfirmation from './components/PurchaseConfirmation';
import CategoriaAccesorios from './components/CategoriaAccesorios';
import CategoriaRopa from './components/CategoriaRopa';
import CategoriaZapatos from './components/CategoriaZapatos';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import Ofertas from './components/Ofertas';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // Obtener la función de navegación

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const handleCheckout = () => {
    // Lógica para realizar el checkout
    const fakeCheckoutId = 'hdaouHIUHF'; // Checkout ID ficticio
    // Redireccionar a la página de confirmación de compra
    navigate('/purchaseconfirmation'); // Utilizar la función navigate para redirigir
  };

  return (
    <>
      <MiNavbar />
      <Routes>
        <Route
          path="/"
          element={<Home handleAddToCart={handleAddToCart} />}
        />
        <Route
          path="/checkout"
          element={<Checkout cartItems={cartItems} handleCheckout={handleCheckout} />}
        />
        <Route
          path="/purchaseconfirmation"
          element={<PurchaseConfirmation />}
        />
        <Route path="/accesorios" element={<CategoriaAccesorios />} />
        <Route path="/ropa" element={<CategoriaRopa />} />
        <Route path="/zapatos" element={<CategoriaZapatos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/ofertas" element={<Ofertas />} />
      </Routes>
    </>
  );
}

export default App;
