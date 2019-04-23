import React, { Component } from 'react';
import logo from './logo.svg';
import styles from "./Clicker.module.css";
import axios from "axios";
import RetroHitCounter from "react-retro-hit-counter";

class Clicker extends Component {
   constructor(props) {
   super(props);
      this.state = {users: [],score : 0,} // score à initialiser avec valeur dans serveur
      this.handleClick = this.handleClick.bind(this);
   }
   componentDidMount() {
      axios
      .get("http://localhost:8000/user/{id}'")
      .then(res => {this.setState({ users: res.data})})
   }

   // sur click : variable à renvoyer : score dans pseudo
   handleClick = () => {
      const score = this.state.score;
      // const userPseudo = this.props.match.params.filter;
      // const score = this.state;
      // score={users.filter(score => users.pseudo(userPseudo))}
      this.setState({ score: this.state.score +1 });
      // localStorage.setItem("score", score);
};
   render() {
      return (
         <div>
            <RetroHitCounter
               hits={this.state.score} 
               withBorder={false}
               withGlow={true}
               minLength={3}
               size={50}
               padding={4}
               digitSpacing={6}
               segmentThickness={4}
               segmentSpacing={0.5}
               segmentActiveColor="#FFFFFF"
               segmentInactiveColor="#0000"
               backgroundColor="#0000"
               borderThickness={7}
               glowStrength={0.4}
               glowSize={10}/>
            <p> </p>
            <p><img id="cookie" src={logo} className={styles.img_cookie} alt="cookie" 
            onClick={this.handleClick} user-select="none"/></p>
         </div>
      )
      
   }
}
export default Clicker;
