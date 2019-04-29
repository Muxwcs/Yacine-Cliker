import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home.page";
import Game from "./Game.page";

const MyRouter = () => {
   return (
      <Router>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/game" component={Game} />
         </Switch>
      </Router>
   );
};

export default MyRouter;
