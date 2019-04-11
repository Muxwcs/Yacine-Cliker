import React, { Component } from "react";
// import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormFeedback, FormGroup} from "reactstrap";

   class NameForm extends Component {
   constructor() {
      super();
      this.state = { InputValue: "", modal: true, isInvalid: false };
      this.handleChange = this.handleChange.bind(this);
      this.toggle = this.toggle.bind(this);
   }
   handleChange = event => {
      this.setState({ InputValue: event.target.value.replace(/[ ]/gi, "") });
      this.setState({isInvalid: false})
   };
   toggle(){
      const nickName = this.state.InputValue;
      if (nickName.length === 0) {
         this.setState({isInvalid: true})
      } else {
         this.setState(prevState => ({
         modal: !prevState.modal
         }));
      }
   };
   render() {
      return (
      <div>
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
         <ModalHeader toggle={this.toggle}><h3>Login</h3></ModalHeader>
         <ModalBody>
            <FormGroup>
               <Input id="name" type="text"
               value={this.state.InputValue}
               onChange={this.handleChange} 
               invalid={this.state.isInvalid} />
               <FormFeedback>Oh noes... Enter your nickname !</FormFeedback>
            </FormGroup>
         </ModalBody>
         <ModalFooter>
            <Button color={this.state.isInvalid ? "danger" : "primary"} onClick={this.toggle}>Sign up</Button>{" "}
         </ModalFooter>
      </Modal>
      </div>
      );
   }
}
export default NameForm;
