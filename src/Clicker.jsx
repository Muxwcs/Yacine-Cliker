import React, { Component } from "react";
import logo from "./logo.svg";
import styles from "./Clicker.module.css";
import axios from "axios";
import RetroHitCounter from "react-retro-hit-counter";

class Clicker extends Component {
   constructor(props) {
      super(props);
      this.state = {
         users: [],
         score: 0,
         id: localStorage.getItem("id")
      };
      this.handleClick = this.handleClick.bind(this);
   }
   getScore() {
      axios.get(`http://localhost:8000/user/${this.state.id}`).then(response => {
         if (response.data[0].score > 0) {
            this.setState({ score: response.data[0].score });
         } else {
            return <alert color="danger">Database empty, contact us for more information</alert>;
         }
      });
   }
   componentDidUpdate() {
      // this.getScore();
   }

   componentDidMount() {
      this.getScore();
   }
   // sur click : variable à renvoyer : score dans pseudo
   handleClick = event => {
      this.setState({ score: this.state.score + 1 });
      let scoreUp = 0;
      const scoreUpdate = {
         score: scoreUp + 1
      };
      axios.put(`http://localhost:8000/user/${this.state.id}/click`, scoreUpdate).then(response => console.log(response.data));
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
               glowSize={10}
            />
            <p>
               <img
                  id="cookie"
                  src={logo}
                  className={styles.img_cookie}
                  alt="cookie"
                  onClick={this.handleClick}
                  user-select="none"
               />
            </p>
         </div>
      );
   }
}
export default Clicker;
