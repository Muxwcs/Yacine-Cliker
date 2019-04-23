import React, { Component } from 'react';
import logo from './logo.svg';
import styles from "./Clicker.module.css";


class Clicker extends Component {
   constructor(props) {
      super(props);
      this.state = { count : 0  }
   }
   handleClick = () => {
         this.setState({ count: this.state.count +1 });
         localStorage.setItem("count", this.state.count);
   };
   render() {
      return (
         <div><h4 className={styles.h4}>score : {this.state.count}</h4>
         <p><img id="cookie" src={logo} className={styles.img_cookie} alt="cookie" 
         onClick={this.handleClick} user-select="none"/></p>
         </div>
      )
      
   }
}
export default Clicker;

// style={this.state.acceleration ? {animation: 'img-spin infinite 0.1s linear'} : null}
// <button id="button" onClick={this.handleClick}>
//    <div> <h4>score : {this.state.count}</h4></div>
//    <img id="cookie" src={logo} className="Cookie" alt="cookie" onClick={this.handleClick} />
// </button>