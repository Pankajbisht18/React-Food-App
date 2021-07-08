import React from "react";
import { Switch, Route } from "react-router";
import Navbar from "./Components/Navbar"
import Home from './Components/Home';
import Search from  './Components/Search';
import Error from './Components/Error';
const App = () => {
  return(
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route component={Error} />
      </Switch>
    </>
  );
}
export default App;
