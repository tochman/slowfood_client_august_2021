import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import axios from "axios";

const CartView = ({ cart }) => {
  const [finalizeOrder, setFinalizeOrder] = useState("open");
  const [responseMessage, setResponseMessage] = useState("")

  let cartTotal = 0;

  const closeOrder = async () => {
    const response = await axios
    .put(`https://slowfood.heroku.com/api/carts?=125&finalized=true`)
    .then((response) => {
      setFinalizeOrder(response.data.cart.finalized);
      debugger;
        setResponseMessage(response.data.message);
      });
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
      <h3 data-cy="finalise-response-message">{`${responseMessage}`}</h3>
    </>
  );
};

export default CartView;
