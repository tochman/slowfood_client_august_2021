import React, { useState, useEffect } from "react";
import { Segment, List, Grid, Menu } from "semantic-ui-react";
import MenuItem from "./MenuItem";
import axios from "axios";

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeItem, setActiveItem] = useState();
  useEffect(() => {
    axios.get("https://slowfood.heroku.com/api/products").then((response) => {
      setMenuItems(response.data.products);
    });
  }, []);

  let menuList = menuItems.map((item) => {
    return (
      <List data-cy={`item-${item.id}`}>
        <MenuItem item={item} />
      </List>
    );
  });

  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name="Starters"
              data-cy="starter-tab"
              active={activeItem === "starters"}
              onClick={setActiveItem}
            />
            <Menu.Item
              name="Main Menu"
              data-cy="main-menu-tab"
              active={activeItem === "main-menu"}
              onClick={setActiveItem}
            />
            <Menu.Item
              name="Desserts"
              data-cy="dessert-tab"
              active={activeItem === "desserts"}
              onClick={setActiveItem}
            />
            <Menu.Item
              name="Sides"
              data-cy="sides-tab"
              active={activeItem === "sides"}
              onClick={setActiveItem}
            />
            <Menu.Item
              name="Drinks"
              data-cy="drinks-tab"
              active={activeItem === "drinks"}
              onClick={setActiveItem}
            />
          </Menu>
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
      <Segment.Inline data-cy="menu-section" clearing>
        {menuList}
      </Segment.Inline>
      </Grid>
    </div>
  );
};

export default MenuPage;
