import React from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Media,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);
  
  }
      
  render() {
    return (
      <div>
        {/* Logo + lien Basile */}
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="https://secure.meetupstatic.com/photos/member/6/3/d/5/member_283225557.jpeg">
            <img id = "logo"
              src="./yacine.png"
              height="80"
              className="d-inline-block align-top"
              alt="yacine"
            />
            {/* Titre */}
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <p className="text-white font-weight-bold font-italic">
              WILDER CLICKER
            </p>
          </Nav>
          {/* Logos + liens réseaux sociaux */}
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://www.facebook.com">
                <img
                  src="https://img.icons8.com/color/48/000000/facebook.png"
                  alt="facebook"
                />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://twitter.com/login?lang=fr">
                <img
                  src="https://img.icons8.com/color/48/000000/twitter.png"
                  alt="twitter"
                />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.instagram.com/?hl=fr">
                <img
                  src="https://img.icons8.com/color/48/000000/instagram-new.png"
                  alt="instagram"
                />
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
