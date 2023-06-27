import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

function Home({ handleAddToCart }) {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetchCharacterList();
  }, []);

  const fetchCharacterList = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        const updatedCharacterList = data.results.map((character) => ({
          ...character,
          quantity: 0, // Cambiar el valor inicial del contador a cero
        }));
        setCharacterList(updatedCharacterList);
      })
      .catch((error) => console.log(error));
  };

  const handleQuantityChange = (characterId, e) => {
    const updatedCharacterList = characterList.map((character) => {
      if (character.id === characterId) {
        return {
          ...character,
          quantity: parseInt(e.target.value),
        };
      }
      return character;
    });
    setCharacterList(updatedCharacterList);
  };

  return (
    <div className="container">
      <h1>BIENVENIDOS A NUESTRA TIENDA ONLINE</h1>
      <h2>Tenemos todo lo que estás buscando.</h2>
      <div className="row">
        {characterList.map((character) => (
          <div key={character.id} className="col-sm-6 col-md-3">
            <Card style={{ width: "18rem", marginBottom: "20px" }}>
              <Card.Img variant="top" src={character.image} />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>Status: {character.status}</Card.Text>
                <div className="quantity-input">
                  <input
                    type="number"
                    value={character.quantity}
                    onChange={(e) => handleQuantityChange(character.id, e)}
                    min="0" // Establecer el valor mínimo como 0
                  />
                </div>
                <Button
                  variant="primary"
                  onClick={() => handleAddToCart(character, character.quantity)}
                >
                  Agregar al carrito
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
