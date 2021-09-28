import React from "react";
import data from "../data/menuItems";
import { Container, List, Icon } from "semantic-ui-react";

const Menu = () => {
  let menuList = data.mainmenu.map((mainmenu) => {
    return (
      <div id={mainmenu.id}>
        Dish: {mainmenu.dish}
        Desciption: {mainmenu.description}
        Price: {mainmenu.price}
        <Icon name="cart" link></Icon>
      </div>
    );
  });

  let desertList = data.desert.map((desert) => {
    return (
      <div id={desert.id}>
        Dish: {desert.dish}
        Desciption: {desert.description}
        Price: {desert.price}
        <Icon name="cart" link></Icon>
      </div>
    );
  });

  return (
    <Container>
      <List data-cy="menu-section">
        <List.Header data-cy="main-menu-header" >Main Menu</List.Header>
        <List.Item data-cy="main-menu">{menuList}</List.Item>
        <List.Header data-cy="dessert-menu">Deserts</List.Header>
        {desertList}
      </List>
    </Container>
  );
};

export default Menu;
