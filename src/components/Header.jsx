import React from "react";
import { Container, Icon, Button, Menu } from "semantic-ui-react";

const Header = () => {
  return (
    <Menu data-cy="header">
      <Menu.Item data-cy="home">Home </Menu.Item>
      <Menu.Item data-cy="menu">Menu</Menu.Item>
      <Menu.Item data-cy="about">About</Menu.Item>
      <Menu.Item position="right">
        <Button size="tiny" data-cy="btn-login">
          Log in
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Icon data-cy="shopping-cart" name="shopping cart" size="big" />
      </Menu.Item>
    </Menu>
  );
};

export default Header;
