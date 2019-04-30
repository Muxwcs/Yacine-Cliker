import React, { Component } from "react";
import { Button, Input, FormFeedback, FormGroup } from "reactstrap";
import axios from "axios";
import { Row, Col } from "reactstrap";
class NameForm extends Component {
   constructor() {
      super();
      this.state = { InputValue: "", isInvalid: false };
      this.handleChange = this.handleChange.bind(this);
      this.sendForm = this.sendForm.bind(this);
      this.onClick = this.onClick.bind(this);
   }
   //sur chagement de valeur saisie, on interdit un bakspace et on passe la valeur entrée à "Valid"
   handleChange = event => {
      this.setState({ InputValue: event.target.value.replace(/[ ]/gi, "") });
      this.setState({ isInvalid: false });
   };
   //sur click, vérification valeur dans Input
   sendForm(callback) {
      const pseudo = this.state.InputValue;
      if (pseudo.length === 0) {
         this.setState({ isInvalid: true });
      } else {
         localStorage.setItem("pseudo", pseudo);
         axios
            .post("http://192.168.88.228:8000/user/subscribe", {
               pseudo: pseudo
            })
            .then(function(response) {
               let id = response.data.insertId;
               localStorage.setItem("id", id);
               callback();
            })
            .catch(function(error) {
               console.log(error);
            });
      }
   }

   onClick() {
      this.sendForm(this.props.redirect);
   }
   render() {
      return (
         <Row>
            <Col lg={{ size: 2, offset: 5 }}>
               <FormGroup>
                  <Input
                     id="name"
                     type="text"
                     pseudo={this.state.InputValue}
                     onChange={this.handleChange}
                     invalid={this.state.isInvalid}
                     onKeyPress={event => {
                        if (event.key === "Enter") {
                           event.preventDefault();
                           this.onClick();
                        }
                     }}
                  />
                  <FormFeedback>Oh Noes... Please enter your nickname guy !</FormFeedback>
               </FormGroup>
               <Button color={this.state.isInvalid ? "danger" : "primary"} onClick={this.onClick}>
                  Sign up
               </Button>
            </Col>
         </Row>
      );
   }
}
export default NameForm;
