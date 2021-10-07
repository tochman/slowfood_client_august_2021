import React from "react";
// import { Grid, Segment,  } from "semantic-ui-react";

const CartView = (cart) => {
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
  // return (
  //   <Grid>
  //     <Grid.Column width={12}>
  //       viewCart ? (
  //       <div data-cy="cart-details">
  //         <div data-cy="cart-status">
  //           Status: {cart.finalized ? "closed" : "open"}
  //         </div>
  //         <div data-cy="cart-products">{cartProducts}</div>
  //         <div data-cy="cart-total"> {`To pay: ${cartTotal}kr`}</div>
  //       </div>
  //       ) : (
  //       <>
  //         <h1>{activeCategory}</h1>
  //         <Segment data-cy="menu-section">{menuList}</Segment>
  //       </>
  //       );
  //     </Grid.Column>
  //     ;
  //   </Grid>
  // );
};

export default CartView;
