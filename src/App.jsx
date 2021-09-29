import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import MenuPage from "./components/Menu";
import About from "./components/About";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/menu" component={MenuPage}></Route>
        <Route exact path="/about" component={About}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
