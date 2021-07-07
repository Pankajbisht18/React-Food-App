import React from "react";
import { Switch, Route } from "react-router";
import Navbar from "./Components/Navbar"
import Home from './Components/Home';
import Search from  './Components/Search';

const App = () => {
  return(
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
      </Switch>
    </>
  );
}
export default App;
