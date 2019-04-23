import React, { Component } from 'react';
import logo from './logo.svg';
import styles from "./Clicker.module.css";
import axios from "axios";

class Clicker extends Component {
   constructor(props) {
   super(props);
      this.state = {users: [],score : 0,}
      this.handleClick = this.handleClick.bind(this);
   }
   componentDidMount() {
      axios
      .get("http://localhost:8000/user/{id}'")
      .then(res => {this.setState({ users: res.data})})
   }

   // sur click : variable à renvoyer : score dans pseudo
   handleClick = () => {
      // const userPseudo = this.props.match.params.filter;
      // const score = this.state;
      // score={users.filter(score => users.pseudo(userPseudo))}
      this.setState({ score: this.state.score +1 });
};
   render() {
      return (
         <div><h4 className={styles.h4}>score : {this.state.score}</h4>
         <p><img id="cookie" src={logo} className={styles.img_cookie} alt="cookie" 
         onClick={this.handleClick} user-select="none"/></p>
         </div>
      )
      
   }
}
export default Clicker;

// export default class UsersPageBis extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//       isLoading: false,
//       isError: false
//     };
//   }

//   componentDidMount() {
//     this.setState({ isLoading: true });
//     Axios.get("https://jsonplaceholder.typicode.com/users")
//       .then(res => {
//         debugger;
//         throw new Error("AYE");
//         this.setState({ users: res.data, isLoading: false });
//       })
//       .catch(() =>
//         this.setState({
//           isError: true,
//           isLoading: false
//         })
//       );
//   }

//   render() {
//     const userNameFilter = this.props.match.params.filter;
//     const { users, isLoading, isError } = this.state;
//     if (isError) {
//       return <Redirect to="/" />;
//     }
//     if (isLoading) {
//       return <div>Mon Super Loader !!!! ... les données arrivent .....</div>;
//     }
//     return (
//       <div>
//         <Link to="/">Back to Home page</Link>
//         <h1>Liste d'utilisateurs (filtrer par {userNameFilter})</h1>
//         <UserCards
//           users={users.filter(user => user.name.includes(userNameFilter))}
//         />
//       </div>
//     );
//   }
// }