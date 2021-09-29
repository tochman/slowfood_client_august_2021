import React from "react";
import { List, Image } from "semantic-ui-react";

const MenuItem = ({ items }) => {
  return (
    <List.Item>
      <Image data-cy="image" src={items.image} size="mini" />
      <List.Content floated="left">
        <List.Header data-cy="name">{items.name}</List.Header>
        <List.Description data-cy="description">
          {items.description}
        </List.Description>
        <List.Item data-cy="price">{items.price} kr</List.Item>
      </List.Content>
      <List.Icon
        floated="right"
        name="cart"
        link
        data-cy="add-to-basket"
      ></List.Icon>
    </List.Item>
  );
};

export default MenuItem;
