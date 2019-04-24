import React, { Component } from "react";
import axios from "axios";

class Filtre extends Component {
   constructor(props) {
   super(props);
      this.state = {users: []} 
      //this.handleClick = this.handleClick.bind(this);
   }

   componentDidMount() {
      axios
      .get("http://localhost:8000/user/")
      .then(res => {this.setState({ users: res.data})})
   }
   render(){
      const userNameFilter = this.props.match.params.filter;
      const { users} = this.state;
      return (
         users={users.filter(user => user.score(les10meilleurs))}
      )
   }
}
export default Filtre;