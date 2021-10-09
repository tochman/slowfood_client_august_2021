import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import axios from "axios";

const CartView = ({ cart }) => {
  const [finalizeOrder, setFinalizeOrder] = useState("open");
  let cartTotal = 0;

  const closeOrder = async () => {
    debugger;
    const response = await axios.put({
      url: `https://slowfood.heroku.com/api/carts?${cart.id}`,

      params: {
        finalized: true,
      },
    });

    setFinalizeOrder(response.data.cart.finalized);
  };

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
          Status: {finalizeOrder ? "closed" : "open"}
        </div>
        <div data-cy="cart-products">{cartProducts}</div>
        <div data-cy="cart-total"> {`To pay: ${cartTotal}kr`}</div>
      </div>
      <Button data-cy="finalize-order" onClick={() => closeOrder()}>
        Finalize Order
      </Button>
    </>
  );
};

export default CartView;
