import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import LayoutHome from "./LayoutHome";
import NameForm from "./NameForm";

export default class Homepage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         redirect: false
      };
   }
   handler() {
      this.setState({
         redirect: true
      });
   }

   componentDidMount() {
      if (localStorage.getItem("id")) {
         this.setState({
            redirect: true
         });
      }
   }

   render() {
      if (this.state.redirect) {
         return <Redirect to="/game" />;
      }
      return (
         <LayoutHome style={{ alignContent: "center" }}>
            <NameForm redirect={this.handler.bind(this)} />
         </LayoutHome>
      );
   }
}
