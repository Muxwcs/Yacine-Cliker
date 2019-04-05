import React, { Component } from 'react';
import logo from './logo.svg';

class Compteur extends Component {
   constructor(props) {
      super(props);
      this.state = { count : 0 }
   }
   handleClick = () => {
         this.setState({ count: this.state.count + 1 });
   };
   render() {
      return (
         <button onClick={this.handleClick}>
            <img src={logo} className="App-logo" alt="logo" onClick={this.handleClick} />
            <div> <h4>score : {this.state.count}</h4></div>
         </button>
      // return (
      //   <div onClick={this.handleClick}>
      //       <img src={logo} className="App-logo" alt="logo" onClick={this.handleClick} />
      //       <div> Score : {this.state.count}</div>
      //     </div>
      );   
   }
}
export default Compteur;
