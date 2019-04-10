import React from "react";
import './navbar.css';
import Logo_cookie from "./img/logo_cookie.svg";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default class Navi extends React.Component {
  render() {
    return (
      <div>
        {/* Logo + lien Basile */}
        <Navbar color="dark" dark expand="md">
          <NavbarBrand >
            <img id = "logo"
              src={Logo_cookie}
              className="d-inline"
              alt="cookie"
            />
            {/* Titre */}
          </NavbarBrand>
          <Nav className="" navbar>
            <p className="d-inline my-auto text-white font-weight-bold font-italic">
              WILDER CLICKER
            </p>
          </Nav>
          {/* Logos + liens réseaux sociaux */}
          <Nav className="ml-auto">
            <NavItem className="d-none d-sm-block d-md-block d-lg-block">
              <NavLink href="https://www.facebook.com">
                <img
                  src="https://img.icons8.com/color/36/000000/facebook.png"
                  alt="facebook"
                />
              </NavLink>
            </NavItem>
            <NavItem className="d-none d-sm-block d-md-block d-lg-block">
              <NavLink href="https://twitter.com/login?lang=fr">
                <img
                  src="https://img.icons8.com/color/36/000000/twitter.png"
                  alt="twitter"
                />
              </NavLink>
            </NavItem>
            <NavItem className="d-none d-sm-block d-md-block d-lg-block">
              <NavLink href="https://www.instagram.com/?hl=fr">
                <img
                  src="https://img.icons8.com/color/36/000000/instagram-new.png"
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
