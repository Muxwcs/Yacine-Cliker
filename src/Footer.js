import React from 'react';
import { Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';

import "./Footer.css";


export default class Footer extends React.Component {
  render() {
    return (
      <div className="cont">
      <Row className="row no-gutter">
      
        
          <Col sm="8" lg="6"><NavItem>
            <NavLink disabled href="#">TEAM WILDER CLICKER : Stéphane Van Pé, Nathalie Belotte, Stéphane Jacot, Nicolas Gagnant et Guillaume Ribéroux </NavLink>
          </NavItem></Col>

          <Row className="rows">

          <Col class="col-sm-1 col-lg-1"><NavItem>
            <NavLink disabled href="#">©</NavLink>
          </NavItem></Col>
        
          <Col class="col-sm-push-1 col-lg-1"><NavItem>
            <NavLink href="https://www.facebook.com"><img src="https://img.icons8.com/color/28/000000/facebook.png"/>  </NavLink>
          </NavItem></Col>
          <Col class="col-sm-push-1 col-lg-1"><NavItem>
            <NavLink href="https://www.twitter.com" ><img src="https://img.icons8.com/color/28/000000/twitter.png"/>  </NavLink>
          </NavItem></Col>
          <Col class="col-sm-push-1 col-lg-1"><NavItem>
            <NavLink href="https://www.instagram.com" ><img src="https://img.icons8.com/color/28/000000/instagram-new.png"/>  </NavLink>
          </NavItem></Col>
       
      </Row>
      </Row>
    </div>
    );
  }
}