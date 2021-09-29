import React, { useState, useEffect } from "react";
import { Segment, List, Grid, Menu } from "semantic-ui-react";
import MenuItem from "./MenuItem";
import axios from "axios";

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeTab, setActiveTab] = useState("starters");
  useEffect(() => {
    axios.get("https://slowfood.heroku.com/api/products").then((response) => {
      setMenuItems(response.data.products);
      setActiveTab();
    });
  }, []);

  const filteredCategory = menuItems.filter(item => item.category === "main menu");

  // let menuList = filteredCategory.map((item) => {
  //   return (
  //     <List key={item.id} data-cy={`item-${item.id}`}>
  //       <List.Content
  //         data-cy={`${activeTab.slice(0, -1)}-${filteredCategory.indexOf(
  //           item.id
  //         )}`}
  //       >
  //         <MenuItem item={item} />
  //       </List.Content>
  //     </List>
  //   );
  // });

  let menuList = filteredCategory.map((item) => {
    return (
      <List data-cy={`item-${item.id}`}>
        <MenuItem item={item} />
      </List>
    );
  });

  // const tab = { tab: "" };
  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name="Starters"
              data-cy="starter-tab"
              active={activeTab === "starters"}
              onClick={setActiveTab}
            />
            <Menu.Item
              name="Main Menu"
              data-cy="main-menu-tab"
              active={activeTab === "main-menu"}
              onClick={setActiveTab}
            />
            <Menu.Item
              name="Desserts"
              data-cy="dessert-tab"
              active={activeTab === "desserts"}
              onClick={setActiveTab}
            />
            <Menu.Item
              name="Sides"
              data-cy="sides-tab"
              active={activeTab === "sides"}
              onClick={setActiveTab}
            />
            <Menu.Item
              name="Drinks"
              data-cy="drinks-tab"
              active={activeTab === "drinks"}
              onClick={setActiveTab}
            />
          </Menu>
        </Grid.Column>
        <Grid.Column></Grid.Column>
        <Segment.Inline data-cy="menu-section" clearing>
          {menuList}
          {/* {filteredCategory} */}
        </Segment.Inline>
      </Grid>
    </div>
  );
};

export default MenuPage;
