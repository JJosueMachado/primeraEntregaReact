import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

export const Item = ({ product }) => {
  const onAdd = (cantidad) => {
    alert(`Se agregó ${cantidad} articulos al carrito `);
  };
  return (
    <div className="col-md-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" height="250" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{`CLP ${product.price}`}</Card.Text>
          <Link to={`/item/${product.id}`}>
            <Button variant="primary">Ver mas</Button>
          </Link>
          <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </Card.Body>
      </Card>
    </div>
  );
};
