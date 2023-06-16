import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

function Home({ handleAddToCart, handleCheckout }) {
  const [characterList, setCharacterList] = useState([]);
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacterList(data.results));
  }, []);

  const decrementCounter = (id) => {
    const updatedCounters = [...counters];
    if (updatedCounters[id] > 0) {
      updatedCounters[id] = updatedCounters[id] - 1;
      setCounters(updatedCounters);
    }
  };

  const incrementCounter = (id) => {
    const updatedCounters = [...counters];
    updatedCounters[id] = (updatedCounters[id] || 0) + 1;
    setCounters(updatedCounters);
  };

  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
          color: "rgb(255, 192, 203)",
          textShadow: "1px 1px 1px black",
        }}
      >
        BIENVENIDOS A NUESTRA TIENDA ONLINE
      </h1>
      <h2
        style={{
          textAlign: "center",
          fontStyle: "italic",
          color: "rgb(255, 192, 203)",
          textShadow: "1px 1px 1px black",
        }}
      >
        Tenemos todo lo que estás buscando.
      </h2>
      <div className="row">
        {characterList.map((character) => (
          <div key={character.id} className="col-sm-6 col-md-3">
            <Card style={{ width: "18rem", marginBottom: "20px" }}>
              <Card.Img variant="top" src={character.image} />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>Status: {character.status}</Card.Text>
                <div className="counter">
                  <button onClick={() => decrementCounter(character.id)}>-</button>
                  <span>{counters[character.id]}</span>
                  <button onClick={() => incrementCounter(character.id)}>+</button>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(character)}
                >
                  Agregar al carrito
                </button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
