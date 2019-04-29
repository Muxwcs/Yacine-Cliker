import React from "react";
import { Row } from "reactstrap";
import Navi from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
   return (
      <>
         <Navi />
         <div className="container-fluid">
            <Row>{children}</Row>
         </div>
         <Footer />
      </>
   );
};

export default Layout;
