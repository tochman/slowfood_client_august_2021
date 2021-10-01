import React, { useState } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeItem, setActiveItem] = useState();

  return (
    <Menu inverted data-cy="header">
      <Menu.Item
        id="home"
        name="home"
        as={Link}
        to={{ pathname: "/" }}
        data-cy="home"
        active={activeItem === "home"}
        onClick={setActiveItem}
      >
        Home
      </Menu.Item>
      <Menu.Item
        id="menu"
        name="menu"
        as={Link}
        to={{ pathname: "/Menu" }}
        active={activeItem === "menu"}
        onClick={setActiveItem}
        data-cy="menu"
      >
        Menu
      </Menu.Item>
      <Menu.Item
        id="about"
        name="about"
        as={Link}
        to={{ pathname: "/About" }}
        active={activeItem === "about"}
        onClick={setActiveItem}
        data-cy="about"
      >
        About
      </Menu.Item>
      <Menu.Item as="a" data-cy="btn-login" position="right">
        Log in
      </Menu.Item>
      <Menu.Item
        id="cart"
        name="cart"
        as={Link}
        to={{ pathname: "/Cart" }}
        data-cy="cart"
        active={activeItem === "cart"}
        onClick={setActiveItem}
      >
        <Icon data-cy="shopping-cart" name="shopping cart" size="big" />
      </Menu.Item>
    </Menu>
  );
};

export default Header;
