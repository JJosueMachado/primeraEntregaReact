import { useState, useEffect } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "Items", id);

    getDoc(refDoc).then((snapshot) => {
      setProduct({ id: snapshot.id, ...snapshot.data() });
    });
  }, [id]);

  if (!product)
    return (
      <div className="spinner-container">
        <Spinner className="mi-spinner" animation="border" />
      </div>
    );
  return <ItemDetail product={product} />;
};
