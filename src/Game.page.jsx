import React from "react";
import { Redirect } from "react-router-dom";
import { Row, Col } from "reactstrap";

import Layout from "./Layout";
import Clicker from "./Clicker";
import Tableaux from "./Tableaux";

export default function Gamepage() {
   if (!localStorage.getItem("pseudo")) {
      return <Redirect to="/" />;
   }
   return (
      <Layout>
         <Row>
            <Col sm="12" lg="6">
               <Clicker />
            </Col>
            <Col sm={{size:8, offset:2}} lg={{size:3, offset:2}}>
               <Tableaux />
            </Col>
         </Row>
      </Layout>
   );
}
