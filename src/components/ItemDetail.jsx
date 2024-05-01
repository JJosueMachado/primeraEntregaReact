import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const add = (quantity) => {
    addItem(product, quantity);
  };
  return (
    <Container className="mt-4 ">
      <h1>{product.title}</h1>
      <img
        src={product.image}
        style={{ height: 300, width: "auto" }}
        alt={product.title}
      />
      <h2>{product.description}</h2>
      <h2>{`Precio: ${product.price}`}</h2>
      <h2>{`Stock: ${product.stock}`}</h2>
      <ItemCount stock={product.stock} onAdd={add} />
    </Container>
  );
};
