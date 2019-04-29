import React, { Component } from "react";
import Layout from "./Layout";
import Clicker from "./Clicker";
import Tableaux from "./Tableaux";

export default function Gamepage() {
   return (
      <Layout>
         <Clicker />
         <Tableaux />
      </Layout>
   );
}
