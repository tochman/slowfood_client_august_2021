import React from "react";
import { List, Image } from "semantic-ui-react";

const MenuItems = ({ item }) => {
  return (
    <List horizontal>
      <List.Item>
        <Image src={item.url} size="mini" />
        <List.Content>
          <List.Header>{item.dish}</List.Header>
          <List.Description>{item.description}</List.Description>
          <List.Item>{item.price} kr</List.Item>
        </List.Content>
        <List.Icon name="cart" link data-cy="add-to-basket"></List.Icon>
      </List.Item>
    </List>
  );
};

export default MenuItems;
