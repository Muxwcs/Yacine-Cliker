import React from "react";
import Navi from "./Navbar";

const LayoutHome = ({ children }) => {
   return (
      <React.Fragment>
         <Navi />
         <div className="container-fluid" style={{ justifyContent: "center", alignItems: "center" }}>
            {children}
         </div>
      </React.Fragment>
   );
};

export default LayoutHome;