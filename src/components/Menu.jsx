import React, { useState, useEffect } from "react";
import { Segment, List } from "semantic-ui-react";
import MenuItem from "./MenuItem";
import axios from "axios";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
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
    <Segment.Inline data-cy="menu-section" clearing>
      {menuList}
    </Segment.Inline>
  );
};

export default Menu;
