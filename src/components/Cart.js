import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  return (
    <div>
      <h4>Carrinho</h4>
      {cartContext.cart.map((product) => (
        <div>
          {product.name} - {product.quantity}
        </div>
      ))}
    </div>
  );
};

export default Cart;
