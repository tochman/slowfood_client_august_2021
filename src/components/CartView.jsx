import React from "react";

const CartView = () => {
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
      return (total += parseInt(product.price));
    });
  }
}

export default CartView