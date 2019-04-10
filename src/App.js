import React, { Component } from "react";

//  STYLE
import "./init_app.css";

// IMPORTS REACSTRAP
import { Row, Col } from "reactstrap";


// HOMEMADE COMPONENTS
import Counter from "./Counter";
import Navi from "./Navbar";

//IMPORTS EN ATTENTE DE COMPILATION
// import Cookie from './Cookie.js';
// import LeaderBoard from './LeaderBoard.js';
// import Add_ons from './Add_ons.js';
// import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <NameForm/> ATTENTE DE COMPILATION*/}
        <header className="App-header"><Navi /> </header>
        <div className="BackGround">
          <Row id="skeleton_one">
            <Col sm="12" lg={{ size: 6, offset: 3 }}>
              <Counter />
            </Col>
          </Row>
          <Row id="skeleton_two">
            <Col sm="12" lg="3">
              <img
                href
                src="https://fakeimg.pl/640x360/"
                className="img_fictive"
                alt="fictive"
              />
              {/* Add-ons ATTENTE DE COMPILATION*/}
            </Col>
            <Col sm="12" lg="6">
              <img
                href
                src="https://fakeimg.pl/640x360/"
                className="img_fictive"
                alt="fictive"
              />
              {/* Cookie ATTENTE DE COMPILATION*/}
            </Col>
            <Col sm="12" lg="3">
              <img
                href
                src="https://fakeimg.pl/640x360/"
                className="img_fictive"
                alt="fictive"
              />
              {/* LeaderBoard ATTENTE DE COMPILATION*/}
            </Col>
          </Row>
        <footer className="App-footer">
        {/* <Footer /> ATTENTE DE COMPILATION */}
        </footer>
        </div>
      </div>
    );
  }
}

export default App;
