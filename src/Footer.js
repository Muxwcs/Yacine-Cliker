import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

import styles from "./footer.module.css";

export default class Footer extends React.Component {
   render() {
      return (
         <div style={{ bottom: 0, position: "fixed", width: "100%" }}>
            <Navbar className={`${styles.navbar} mx-auto`} color="dark">
               <Nav>
                  <p className={`${styles.p} d-inline my-auto text-white`}>
                     © TEAM WILDER CLICKER : Stéphane Van Pé, Nathalie Balotte, Stéphane Jacot, Nicolas Gagnant et Guillaume
                     Ribéroux
                  </p>
               </Nav>
               <Nav className={`${styles.nav} ml-auto mr-md-auto mx-sm-auto`}>
                  <NavItem>
                     <NavLink href="https://www.facebook.com">
                        <img src="https://img.icons8.com/color/26/000000/facebook.png" alt="facebook" />
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink href="https://twitter.com/login?lang=fr">
                        <img src="https://img.icons8.com/color/26/000000/twitter.png" alt="twitter" />
                     </NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink href="https://www.instagram.com/?hl=fr">
                        <img src="https://img.icons8.com/color/26/000000/instagram-new.png" alt="instagram" />
                     </NavLink>
                  </NavItem>
               </Nav>
            </Navbar>
         </div>
      );
   }
}