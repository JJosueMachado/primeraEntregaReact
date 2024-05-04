import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import swal from "sweetalert";

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
    swal({
      title: "En hora buena!",
      text: `Se ha agreado ${quantity} producto al carrito`,
      icon: "success",
      button: false,
      timer: 2100,
    });
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Button
          className=" countButton"
          onClick={handleDecrease}
          style={{ padding: "0 15px", color: "black", fontWeight: 900 }}
        >
          -
        </Button>

        <input
          type="number"
          value={quantity}
          style={{
            padding: "0 20px",
            color: "black",
            fontWeight: 700,
            textAlign: "center",
          }}
          readOnly
        />

        <Button
          className=" countButton"
          onClick={handleIncrease}
          style={{ padding: "0 15px", color: "black", fontWeight: 900 }}
        >
          +
        </Button>
      </div>
      <div className="mt-3">
        <Button className="addButton" onClick={handleAdd}>
          Agregar al carrito
        </Button>
      </div>
    </>
  );
};
