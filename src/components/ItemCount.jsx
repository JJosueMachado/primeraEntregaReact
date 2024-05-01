import React, { useState } from "react";

/* const ItemQuantity = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const sumar = () => {
    if (stock > quantity) {
      setQuantity(quantity + 1);
    }
  };

  const restar = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const AgregarCantidad = () => {
    onAdd(quantity);
  };

  return (
    <>
      <div className="containerButton">
        <button className="Boton1" onClick={restar}>
          -
        </button>

        <label>{quantity}</label>

        <button className="Boton1" onClick={sumar}>
          +
        </button>
      </div>
      <button className="Agregar" onClick={AgregarCantidad}>
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemQuantity; */

export const ItemCount = ({ stock, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (stock > quantity) setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAdd = () => {
    onAdd(quantity);
    setQuantity(1);
  };
  return (
    <div className="d-flex">
      <div
        style={{ padding: "0 10px", color: "red", fontWeight: 900 }}
        onClick={handleDecrease}
      >
        -
      </div>
      <input type="number" value={quantity} readOnly />
      <div
        style={{ padding: "0 10px", color: "red", fontWeight: 900 }}
        onClick={handleIncrease}
      >
        +
      </div>
      <button type="button" onClick={handleAdd}>
        aAgregar al carrito
      </button>
    </div>
  );
};
