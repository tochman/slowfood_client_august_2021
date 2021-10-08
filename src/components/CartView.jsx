import React from "react";

const CartView = ({ cart }) => {
  let cartProducts, cartTotal;

  if (cart) {
    cartProducts = cart.products.map((product) => {
      return (
        <div key={product.id}>
          <h2>{product.name}</h2>
        </div>
      );
    });
    let total = 0;
    cartTotal = cart.products.map((product) => {
      debugger
      return (total += parseInt(product.price));
    });
  }

  return (
    <>
      <div data-cy="cart-details">
        <div data-cy="cart-status">
          Status: {cart.finalized ? "closed" : "open"}
        </div>
        <div data-cy="cart-products">{cartProducts}</div>
        <div data-cy="cart-total"> {`To pay: ${cartTotal}kr`}</div>
      </div>
    </>
  );
};

export default CartView;
