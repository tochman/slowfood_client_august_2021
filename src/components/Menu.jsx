import React, { useState, useEffect } from "react";
import { Segment, Grid, Menu, Container } from "semantic-ui-react";
import MenuItem from "./MenuItem";
import axios from "axios";

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("starters");
  useEffect(() => {
    axios.get("https://slowfood.heroku.com/api/products").then((response) => {
      setMenuItems(response.data.products);
    });
  }, []);
  useEffect(() => {
    axios.get("https://slowfood.heroku.com/api/products").then((response) => {
      setMenuItems(response.data.products);
    });
  }, [activeCategory]);

  const filteredCategory = menuItems.filter((item) => item.category === activeCategory);
  

  let menuList = filteredCategory.map((item) => {
    return (
      <MenuItem
        key={item.id}
        item={item}
        
      ></MenuItem>
    );
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
              onClick={() => setActiveCategory()}
            />
            <Menu.Item
              name="Main Menu"
              data-cy="main-menu-tab"
              active={activeCategory == "main-menu"}
              onClick={() => setActiveCategory()}
            />
            <Menu.Item
              name="Desserts"
              data-cy="dessert-tab"
              // active={activeCategory === "desserts"}
              onClick={() => setActiveCategory()}
            />
            <Menu.Item
              name="Sides"
              data-cy="sides-tab"
              active={activeCategory === "sides"}
              onClick={() => setActiveCategory()}
            />
            <Menu.Item
              name="Drinks"
              data-cy="drinks-tab"
              active={activeCategory === "drinks"}
              onClick={() => setActiveCategory()}
            />
          </Menu>
        </Grid.Column>
        <Grid.Column width={12}>
          <h1>{activeCategory}</h1>
          <Segment data-cy="menu-section">{menuList}</Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default MenuPage;
