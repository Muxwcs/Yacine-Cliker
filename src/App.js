import React, { Component } from "react";

//  STYLE
import "./init_app.css";

// IMPORTS REACSTRAP
import { Row, Col } from "reactstrap";

// HOMEMADE COMPONENTS
import Navi from "./Navbar";
import Footer from "./Footer.js";
import Clicker from "./Clicker";
import Tableaux from "./Tableaux";
import NameForm from "./NameForm";
import Router from "./Router";

class App extends Component {
   render() {
      return (
         <div className="App" style={{ minHeight: "100vh" }}>
            <Router />
         </div>
      );
   }
}

export default App;
