import React from "react";
import { List, Image } from "semantic-ui-react";

const MenuItem = ({ item }) => {
  return (
    <List.Item data-cy={`item-${item.id}`}>
      <Image data-cy="image" src={item.image} size="mini" />
      <List.Content floated="left">
        <List.Header data-cy="name">{item.name}</List.Header>
        <List.Description data-cy="description">
          {item.description}
        </List.Description>
        <List.Item data-cy="price">{item.price} kr</List.Item>
      </List.Content>
      <List.Icon
        floated="right"
        name="cart"
        link
        data-cy={`add-to-basket-${item.id}`}
      ></List.Icon>
    </List.Item>
  );
};

export default MenuItem;
