import React from "react";
import { Container, Icon, Button } from "semantic-ui-react";

const Header = () => {
  return <Container data-cy="header">welcome menu about
    <Button size="small" data-cy="btn-login">Log in</Button>
  <Icon data-cy="shopping-cart" name="shopping cart" size="big" />  
  </Container>;
};

export default Header;
