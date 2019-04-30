import React from "react";
import { Row } from "reactstrap";
import Navi from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
   return (
      <React.Fragment>
         <Navi />
         <div className="container-fluid" style={{ justifyContent: "center", alignItems: "center" }}>
            {children}
         </div>
         <Footer />
      </React.Fragment>
   );
};

export default Layout;
