import React, { useState, useEffect } from "react";
import { Segment, Grid, Menu, Container } from "semantic-ui-react";
import MenuItem from "./MenuItem";
import axios from "axios";

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("starters");
  const [flashMessage, setFlashMessage] = useState();

  useEffect(() => {
    axios.get("https://slowfood.heroku.com/api/products").then((response) => {
      setMenuItems(response.data.products);
    });
  }, []);

  const addToCart = async (itemId) => {
    let flashMessage
    try {
      const response = await axios.post(
        "https://slowfood.heroku.com/api/carts",
        {
          params: { product_id: itemId },
        }
      );
      const responseMessage = response.data.message;
      const product = menuItems.find((item) => item.id === itemId);
      flashMessage = responseMessage.replace(
        "This product ",
        product.name + " "
      );
    } catch (error) {
      flashMessage = error.response.data.message
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
          </Menu>
        </Grid.Column>
        <Grid.Column width={12}>
          <h1>{activeCategory}</h1>
          <Segment data-cy="menu-section">{menuList}</Segment>
        </Grid.Column>
      </Grid>
      {flashMessage && <h3 data-cy="flash-message">{flashMessage}</h3>}
    </Container>
  );
};

export default MenuPage;
