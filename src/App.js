import React from "react";
import { Switch, Route } from "react-router";
import Navbar from "./Components/Navbar"
import Home from './Components/Home';
import Food from './Components/Food'
import Recipe from "./Components/Recipe";
import Search from  './Components/Search';

const App = () => {
  return(
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/food" component={Food} />
        <Route path="/recipe" component={Recipe} />
        <Route path="/search" component={Search} />
      </Switch>
    </>
  );
}
export default App;
