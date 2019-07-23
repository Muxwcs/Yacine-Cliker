import React from "react";
import Axios from "axios";

export default class Tableau extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         users: []
      };
   }
   // Rafraichissement du tableau (timer 100 ms) à décommenter une fois le back déployé
   // componentDidMount() {
   //    this.tableauRefresh = setInterval(() => this.refresh(), 250);
   // }
   // componentWillUnmount() {
   //    clearInterval(this.tableauRefresh);
   // }
   // Récupération des users (mapping)
   refresh() {
      Axios.get("http://localhost:8000/user/").then(response => {
         this.setState({ users: response.data });
      });
   }
   render() {
      return (
         <>
            {this.state.users.map((user, i) => {
               return (
                  <tr key={i}>
                     <th scope="row">{i + 1}</th>
                     <td>{user.pseudo}</td>
                     <td>{user.score}</td>
                  </tr>
               );
            })}
         </>
      );
   }
}
