import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { ItemList } from "./ItemList";
import data from "../data/products.json";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
    get.then((data) => {
      if (!id) {
        setProducts(data);
      } else {
        const filtered = data.filter((p) => p.category === id);
        setProducts(filtered);
      }
    });
  }, [id]);
  return (
    <Container>
      <ItemList products={products} />
    </Container>
  );
};
