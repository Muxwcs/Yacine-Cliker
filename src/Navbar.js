import React from "react";
import styles from './navbar.module.css';
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
        <Navbar className={styles.navbar} color="dark" dark expand="md">
          <NavbarBrand >
            <img 
              src={Logo_cookie}
              className={`${styles.logo} d-inline`} 
              alt="cookie"
            />
            {/* Titre */}
          </NavbarBrand>
          <Nav>
            <h2 className={`${styles.h2} d-inline my-auto text-white font-weight-bold font-italic`}>
              Wilder Clicker
            </h2>
          </Nav>
          {/* Logos + liens réseaux sociaux */}
          <Nav className="ml-auto">
            <NavItem className="d-none d-sm-block d-md-block d-lg-block" id="nav_link" >
              <NavLink href="https://www.facebook.com" target = "blank">
                <img
                  src="https://img.icons8.com/color/36/000000/facebook.png" 
                  alt="facebook"
                />
              </NavLink>
            </NavItem>
            <NavItem className="d-none d-sm-block d-md-block d-lg-block" id="nav_link" >
              <NavLink href="https://twitter.com/login?lang=fr" target = "blank">
                <img
                  src="https://img.icons8.com/color/36/000000/twitter.png"
                  alt="twitter"
                />
              </NavLink>
            </NavItem>
            <NavItem className="d-none d-sm-block d-md-block d-lg-block" id="nav_link">
              <NavLink href="https://www.instagram.com/?hl=fr" target = "blank">
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
