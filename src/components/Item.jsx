import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const Item = ({ product }) => (
  <div className="col-md-4">
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.pictureUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{`CLP ${product.price}`}</Card.Text>
        <Link to={`/item/${product.id}`}>
          <Button variant="primary">Ver mas</Button>
        </Link>
      </Card.Body>
    </Card>
  </div>
);
