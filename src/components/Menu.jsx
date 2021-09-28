import React from "react";
import data from "../data/menuItems";
import { List } from "semantic-ui-react";

const Menu = () => {
  return (
    <List data-cy="menu-section">
      <List.Header data-cy="main-menu">Main Menu</List.Header>
      {data.mainmenu.map((mainmenu, index) => (
        <List.Item data-cy="item-1"
          key={index}
          header={mainmenu.dish}
          description={mainmenu.description}
          value={mainmenu.price}
          image={mainmenu.url}
        >
        </List.Item>
      ))}
    </List>
  );
};

export default Menu;
