import React from 'react';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Welcome from "./components/WelcomePage"
 
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
