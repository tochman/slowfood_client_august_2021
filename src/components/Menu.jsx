import React, { useState, useEffect } from "react";
import { Segment, List } from "semantic-ui-react";
import MenuItem from "./MenuItem";
import axios from "axios";

const Menu = () => {
  const [menuItems, setIdentification] = useState([]);
  useEffect(() => {
    axios.get("https://slowfood.heroku.com/api/products").then((response) => {
      setIdentification(response.data.products);
    });
  }, []);

  let menuList = menuItems.map((items) => {
    return (
      <List data-cy={`item-${items.id}`}>
        <MenuItem items={items} />
      </List>
    );
  });

  return (
    <Segment.Inline data-cy="menu-section" clearing>
      {menuList}
    </Segment.Inline>
  );
};

export default Menu;
