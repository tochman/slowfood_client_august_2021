import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import MenuItems from "./MenuItems";
import axios from "axios";

const Menu = () => {
  const [menuItems, setIdentification] = useState([]);
  useEffect(() => {
    axios.get("./data/menuItems.json").then((response) => {
      setIdentification(response.data);
    });
  }, []);

  let menuList = menuItems.map((item) => {
    return (
      <div data-cy={`item-${item.id}`} key={item.id}>
        <MenuItems item={item} />
      </div>
    );
  });

  return (
    <Segment.Inline data-cy="menu-section" clearing>
      {menuList}
    </Segment.Inline>
  );
};

export default Menu;
