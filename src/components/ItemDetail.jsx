import Container from "react-bootstrap/Container";
import { useContext } from "react";
import Card from "react-bootstrap/Card";

import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const add = (quantity) => {
    addItem(product, quantity);
  };
  return (
    <Container className="mt-4 ">
      <>
        <div>
          <Card className="text-center">
            <Card.Header>Categoria: {product.categoryId}</Card.Header>
            <Card.Body>
              <img
                src={product.image}
                style={{ height: 300, width: "auto" }}
                alt={product.title}
              />
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <ItemCount stock={product.stock} onAdd={add} />
            </Card.Body>
            <Card.Footer>
              <h4>
                Precio: {product.price} CLP | Stock: {product.stock}
              </h4>
            </Card.Footer>
          </Card>
        </div>
      </>
    </Container>
  );
};
