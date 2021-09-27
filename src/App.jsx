import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
