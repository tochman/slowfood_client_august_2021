import React, { useState, useEffect } from "react";
import { Segment, Grid, Menu, Container, GridColumn } from "semantic-ui-react";
import MenuItem from "./MenuItem";
import axios from "axios";
import { Link } from "react-router-dom";

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeItem, setActiveItem] = useState();
  useEffect(() => {
    axios.get("https://slowfood.heroku.com/api/products").then((response) => {
      setMenuItems(response.data.products);
      
    });
  }, []);

  const filteredCategory = menuItems.filter(
    (item) => item.category === "starters"
  );

  let menuList = filteredCategory.map((item) => {
    return <MenuItem item={item} data-cy={`item-${item.id}`}></MenuItem>;
  });

  return (
    <Container>
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              id="tab"
              name="Starters"
              data-cy="starter-tab"
              active={activeItem === "starters"}
              onClick={setActiveItem}
              as={Link}
              to={{ pathname: "/starters" }}
            />
            <Menu.Item
              id="tab"
              name="Main Menu"
              data-cy="main-menu-tab"
              active={activeItem === "main-menu"}
              onClick={() => setActiveItem({ tab: "main-menu" })}
              as={Link}
              to={{ pathname: "/main-menu" }}
            />
            <Menu.Item
              name="Desserts"
              data-cy="dessert-tab"
              active={activeItem === "desserts"}
              onClick={setActiveItem}
              as={Link}
              to={{ pathname: "/dessert" }}
            />
            <Menu.Item
              name="Sides"
              data-cy="sides-tab"
              active={activeItem === "sides"}
              onClick={setActiveItem}
              as={Link}
              to={{ pathname: "/sides" }}
            />
            <Menu.Item
              name="Drinks"
              data-cy="drinks-tab"
              active={activeItem === "drinks"}
              onClick={setActiveItem}
              as={Link}
              to={{ pathname: "/drinks" }}
            />
          </Menu>
        </Grid.Column>
        <Grid.Column width={12}>
          <Segment.Inline data-cy="menu-section">{menuList}</Segment.Inline>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default MenuPage;
