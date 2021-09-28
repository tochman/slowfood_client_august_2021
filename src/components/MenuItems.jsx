import React from "react";
import { List, Segment } from "semantic-ui-react";

const MenuItems = ({ starter }) => {
  return (
    
      <List divided relaxed>
        <List.Item>
          <List.Content>
            <List.Header>{starter.dish}</List.Header>
            <List.Description>
              {starter.description} 
            </List.Description>
            <List.Description>{starter.price} kr</List.Description>
          </List.Content>
        </List.Item>
        <List.Icon name="cart" link></List.Icon>
      </List>
   
  );
};

export default MenuItems;
