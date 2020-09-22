import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { DeleteButton } from "../styles";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  let totalValue = 0;

  cartContext.cart.forEach((product) => {
    totalValue = totalValue + product.price * product.quantity;
  });

  const handleRemoveItemFromCart = (productId) => {
    cartContext.dispatch({ type: "REMOVE_ITEM_FROM_CART", productId });
  };

  return (
    <div>
      <h4>Carrinho</h4>
      {cartContext.cart.map((product) => (
        <div>
          {product.name} - {product.quantity}
          <DeleteButton onClick={() => handleRemoveItemFromCart(product.id)}>
            {" "}
            X{" "}
          </DeleteButton>
        </div>
      ))}
      <p>Total: R${totalValue.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
