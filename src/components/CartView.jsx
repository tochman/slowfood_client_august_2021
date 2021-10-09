import React from 'react';

const CartView = ({ cart }) => {
  let cartTotal = 0;

  const cartProducts = cart?.products.map((product) => {
    return (
      <div key={product.id}>
        <h2>{product.name}</h2>
      </div>
    );
  });

  cart.products.map((product) => {
    return (cartTotal += parseInt(product.price));
  });

  return (
    <>
      <div data-cy="cart-details">
        <div data-cy="cart-status">
          Status: {cart.finalized ? 'closed' : 'open'}
        </div>
        <div data-cy="cart-products">{cartProducts}</div>
        <div data-cy="cart-total"> {`To pay: ${cartTotal}kr`}</div>
      </div>
    </>
  );
};

export default CartView;
