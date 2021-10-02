import axios from "axios";
import React, { useState } from "react";
import { Container, Modal } from "semantic-ui-react";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [open, setOpen] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios({
      method: "post",
      url: "https://slowfood.heroku.com/api/auth/",
      params: {
        email: userEmail,
        password: userPassword,
        password_confirmation: userConfirmPassword,
        confirm_success_url: "placeholder",
      },
    }).then(setOpen(true));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            data-cy="email-input"
            type="text"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          ></input>
        </label>
        <label>
          Password:
          <input
            data-cy="password-input"
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          ></input>
        </label>
        <label>
          Confirm password:
          <input
            data-cy="confirm-password-input"
            type="password"
            value={userConfirmPassword}
            onChange={(e) => setUserConfirmPassword(e.target.value)}
          ></input>
        </label>
        <input data-cy="btn-signup" type="submit" value="Submit" />
      </form>
      <Modal
        basic
        closeIcon
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size="small"
      >
        <Modal.Content>
          <h1 data-cy="registration-message">Registration successful</h1>
        </Modal.Content>
      </Modal>
    </Container>
  );
};

export default Login;
