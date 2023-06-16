import React from 'react';

function ItemListContainer({ greeting }) {
  const containerStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  return (
    <div className="container" style={containerStyle}>
      <h2 style={titleStyle}>{greeting}</h2>
      <p>Encantados de poder acercarte lo que necesitas.</p>
    </div>
  );
}

export default ItemListContainer;
