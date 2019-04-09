import React, { Component } from "react";

//  STYLE
import "./init_app.css";

// COMPONENTS REACSTRAP
import { Row, Col } from "reactstrap";


// HOMEMADE COMPONENTS
// import NameForm from './NameForm';
// import Navi from './Navbar.js';
import Counter from "./Counter";
// import Cookie from './Cookie.js';
// import LeaderBoard from './LeaderBoard.js';
// import Add_ons from './Add_ons.js';
// import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <NameForm/> */}
        <header className="App-header">{/* <Navbar /> */}</header>
        <div className="BackGround">
          <Row id="skeleton_one">
            <Col sm="12" lg={{ size: 6, offset: 3 }}>
              {/* <img
                href
                src="https://fakeimg.pl/640x360/"
                className="img_fictive"
                alt="fictive"
              /> */}
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
              {/* Add-ons */}
            </Col>
            <Col sm="12" lg="6">
              <img
                href
                src="https://fakeimg.pl/640x360/"
                className="img_fictive"
                alt="fictive"
              />
              {/* Cookie */}
            </Col>
            <Col sm="12" lg="3">
              <img
                href
                src="https://fakeimg.pl/640x360/"
                className="img_fictive"
                alt="fictive"
              />
              {/* LeaderBoard */}
            </Col>
          </Row>
        <footer className="App-footer">{/* <Footer />  */}</footer>
        </div>
      </div>
    );
  }
}

export default App;
