import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const Item = ({ product }) => {
  return (
    <div className="col-md-4 mt-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" height="250" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{`CLP ${product.price}`}</Card.Text>
          <Link to={`/item/${product.id}`}>
            <div>
              <Button className="buttonItem ">Ver mas</Button>
            </div>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
