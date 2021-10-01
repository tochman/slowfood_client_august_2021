import React from "react";
import { Container } from "semantic-ui-react";

const Login = () => {
  return (
    <Container>
      <form>
        <label>
          Email:
          <input type="text" name="name"></input>
        </label>
        <label>
          Password:
          <input type="password" name="name"></input>
        </label>
      </form>
      <button>Submit</button>
      <button data-cy="btn-signup">Signup</button>
    </Container>
  );
};

export default Login;
