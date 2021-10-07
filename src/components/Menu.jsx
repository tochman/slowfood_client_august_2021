import React, { useState, useEffect } from "react";
import { Segment, Grid, Menu, Container } from "semantic-ui-react";
import MenuItem from "./MenuItem";
import axios from "axios";

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("starters");
  const [flashMessage, setFlashMessage] = useState();
  const [cart, setCart] = useState();
  const [viewCart, setViewCart] = useState(false);

  useEffect(() => {
    axios.get("https://slowfood.heroku.com/api/products").then((response) => {
      setMenuItems(response.data.products);
    });
  }, []);

  const addToCart = async (itemId) => {
    let flashMessage;
    const method = cart ? "PUT" : "POST";
    try {
      const response = await axios({
        method: method,
        url: "https://slowfood.heroku.com/api/carts",
        data: { product_id: itemId },
      });
      const responseMessage = response.data.message;
      const product = menuItems.find((item) => item.id === itemId);
      flashMessage = responseMessage.replace(
        "This product ",
        product.name + " "
      );
      setCart(response.data.cart);
    } catch (error) {
      flashMessage = error.response.data.message;
    } finally {
      setFlashMessage(flashMessage);
    }
  };

  const itemsInCategories = menuItems.filter(
    (item) => item.category === activeCategory
  );

  let menuList = itemsInCategories.map((item) => {
    return <MenuItem key={item.id} item={item} addToCart={addToCart} />;
  });

  let cartProducts, cartTotal;
  if (cart) {
    cartProducts = cart.products.map((product) => {
      return (
        <React.Fragment key={product.id}>
          <h2>{product.name}</h2>
        </React.Fragment>
      );
    });
    let total = 0;
    cartTotal = cart.products.map((product) => {
      return (total += parseInt(product.price));
    });
  }

  return (
    <Container>
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name="Starters"
              data-cy="starter-tab"
              active={activeCategory === "starters"}
              onClick={() => setActiveCategory("starters")}
            />
            <Menu.Item
              name="Main Courses"
              data-cy="main-courses-tab"
              active={activeCategory === "main-menu"}
              onClick={() => setActiveCategory("main_courses")}
            />
            <Menu.Item
              name="Desserts"
              data-cy="desserts-tab"
              active={activeCategory === "desserts"}
              onClick={() => setActiveCategory("desserts")}
            />
            <Menu.Item
              name="Sides"
              data-cy="sides-tab"
              active={activeCategory === "sides"}
              onClick={() => setActiveCategory("sides")}
            />
            <Menu.Item
              name="Drinks"
              data-cy="drinks-tab"
              active={activeCategory === "drinks"}
              onClick={() => setActiveCategory("drinks")}
            />
            {cart && (
              <Menu.Item
                name={ viewCart ? 'Close Cart' : 'View cart'}
                data-cy="view-cart"
                onClick={() => setViewCart(!viewCart)}
              />
            )}
          </Menu>
        </Grid.Column>
        <Grid.Column width={12}>
          {viewCart ? (
            <div data-cy="cart-details">
              <div data-cy="cart-status">
                Status: {cart.finalized ? "closed" : "open"}
              </div>
              <div data-cy="cart-products">{cartProducts}</div>
              <div data-cy="cart-total"> {`To pay: ${cartTotal}kr`}</div>
            </div>
          ) : (
            <React.Fragment>
              <h1>{activeCategory}</h1>
              <Segment data-cy="menu-section">{menuList}</Segment>
            </React.Fragment>
          )}
        </Grid.Column>
      </Grid>
      {flashMessage && <h3 data-cy="flash-message">{flashMessage}</h3>}
    </Container>
  );
};

export default MenuPage;
