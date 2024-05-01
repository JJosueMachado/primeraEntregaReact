import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    let refCollection;

    if (!id) {
      refCollection = collection(db, "Items");
    } else {
      refCollection = query(
        collection(db, "Items"),
        where("categoryId", "==", id)
      );
    }

    getDocs(refCollection).then((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, [id]);

  return (
    <Container>
      <ItemList products={products} />
    </Container>
  );
};
