import React, { useState, useEffect } from "react";
import { Segment, Icon } from "semantic-ui-react";
import MenuItems from "./MenuItems";
import axios from "axios";

const Menu = () => {
  const [starters, setStarters] = useState([]);
  const [menuLists, setMenuList] = useState([]);
  const [dessertLists, setDessertList] = useState([]);
  useEffect(() => {
    axios.get("./data/MenuItems.json").then((response) => {
      setStarters(response.data)
      setMenuList(response.data)
      setDessertList(response.data);
    });
  });

  let starterList = starters.map((starter) => {
    return (
      <div>
        <div data-cy="starter-list" id={`ballon-${starters.id}`}>
          <MenuItems starter={starter} />
        </div>
      </div>
    );
  });
  let menuList = menuLists.map((main_menu) => {
    return (
      <div id={main_menu.id}>
        {main_menu.dish}
        {main_menu.description}
        {main_menu.price} kr
        <Icon name="cart" link></Icon>
      </div>
    );
  });

  let dessertList = dessertLists.map((dessert) => {
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
    <Segment data-cy="menu-section">
      {starterList}
      {menuList}
      {dessertList}
    </Segment>
  );
};

export default Menu;
