import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import MiNavbar from "./components/NavBar";
import Pagination from "./components/Pagination";
import CartWidget from './components/CartWidget';
import Home from './components/Home';
import CategoriaRopa from './components/CategoriaRopa';
import CategoriaZapatos from './components/CategoriaZapatos';
import CategoriaAccesorios from './components/CategoriaAccesorios';
import Ofertas from './components/Ofertas';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Checkout from './components/Checkout';
import PurchaseConfirmation from './components/PurchaseConfirmation';

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
    navigate('/purchase-id'); // Utilizar la función navigate para redirigir
  };

  return (
    <>
      <MiNavbar />
      <Routes>
        <Route path="/" element={<Home handleAddToCart={handleAddToCart} handleCheckout={handleCheckout} />} />
        <Route path="/ropa" element={<CategoriaRopa />} />
        <Route path="/zapatos" element={<CategoriaZapatos />} />
        <Route path="/accesorios" element={<CategoriaAccesorios />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        <Route path="/purchase-id" element={<PurchaseConfirmation />} />
      </Routes>

      <CartWidget cartItems={cartItems} handleCheckout={handleCheckout} />

      <Pagination />
    </>
  );
}

export default App;
