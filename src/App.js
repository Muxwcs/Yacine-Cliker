import React, { Component } from "react";

//  STYLE
import "./init_app.css";

// IMPORTS REACSTRAP
import { Row, Col } from "reactstrap";


// HOMEMADE COMPONENTS
import Navi from "./Navbar";
import Footer from './Footer.js';
import Clicker from "./Clicker";
import Tableau from "./Table";
import VerifPseudo from "./VerifPseudo";


class App extends Component {
  render() {
    return (
      <div className="App">
        <VerifPseudo />
        <header className="App-header"><Navi /> </header>
        <div className="BackGround">
          <Row id="skeleton_one">
            <Col sm="12" lg={{ size: 6, offset: 3 }}>
            </Col>
          </Row>
          <Row id="skeleton_two">
            <Col sm="12" lg="3">
              {/* Add-ons ATTENTE DE COMPILATION*/}
            </Col>
            <Col sm="12" lg="6">
              <Clicker />
            </Col>
            <Col sm="12" lg="3">
            <Tableau/>
            </Col>
          </Row>
        <footer className="App-footer">
        <Footer></Footer>
        </footer>
        </div>
      </div>
    );
  }
}

export default App;
