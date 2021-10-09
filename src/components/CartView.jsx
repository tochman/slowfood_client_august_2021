import React from "react";

const CartView = ({ cart }) => {
  let cartProducts, cartTotal;
  let total = 0;
  if (cart) {
    cartProducts = cart.products.map((product) => {
      return (
        <div key={product.id}>
          <h2>{product.name}</h2>
        </div>
      );
    });

    cartTotal = cart.products.map((product) => {
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
        <div data-cy="cart-total"> {`To pay: ${total}kr`}</div>
      </div>
    </>
  );
};

export default CartView;
