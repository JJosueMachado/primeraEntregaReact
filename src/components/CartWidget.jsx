import { Cart4 } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const CartWidget = () => {
  const { items } = useContext(CartContext);
  const total = items.reduce((acc, elem) => acc + elem.quantity, 0);
  return (
    <Link to="/cart">
      <div id="cart-widget">
        <Cart4 className="carticon" size={30} color="whitesmoke" />
        <span>{total}</span>
      </div>
    </Link>
  );
};
