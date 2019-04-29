import React, { Component } from "react";
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
            <Col lg={{ size: 6, offset: 3 }}>
               <Clicker />
            </Col>
            <Col lg={{ size: 3 }}>
               <Tableaux />
            </Col>
         </Row>
      </Layout>
   );
}
