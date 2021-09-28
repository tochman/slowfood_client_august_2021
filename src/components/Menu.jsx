import React from "react";
import data from "../data/menuItems";
import { Container, List, Icon } from "semantic-ui-react";

const Menu = () => {
  let starterList = data.starters.map((starters) => {
    return (
      <div>
        <div data-cy="starter-list" id={starters.id}>
          {starters.dish}
          {starters.description}
          {starters.price}
          kr
        <Icon name="cart" link></Icon>
        </div>
      </div>
    );
  });
  let menuList = data.main_menu.map((main_menu) => {
    return (
      <div id={main_menu.id}>
        {main_menu.dish}
        {main_menu.description}
        {main_menu.price} kr
        <Icon name="cart" link></Icon>
      </div>
    );
  });

  let dessertList = data.dessert.map((dessert) => {
    return (
      <div id={dessert.id}>
        {dessert.dish}
        {dessert.description}
        {dessert.price} kr
        <Icon name="cart" link></Icon>
      </div>
    );
  });

  return (
    <Container>
      <List data-cy="menu-section">
        <List.Header data-cy="starter-header">Starters</List.Header>
        <List.Item data-cy="starter-menu">{starterList}</List.Item>
        <List.Header data-cy="main-menu-header">Main Menu</List.Header>
        <List.Item data-cy="main-menu">{menuList}</List.Item>
        <List.Header data-cy="dessert-header">Desserts</List.Header>
        <List.Item data-cy="dessert-menu">{dessertList}</List.Item>
      </List>
    </Container>
  );
};

export default Menu;
