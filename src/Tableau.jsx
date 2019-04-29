import React from "react";
import Axios from "axios";
import ReactDOM from "react-dom";

export default class Tableau extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  // Rafraichissement du tableau (timer 100 ms)
  componentDidMount() {
    this.tableauRefresh = setInterval(() => this.refresh(), 100);
  }
  componentWillUnmount() {
    clearInterval(this.tableauRefresh);
  }
  // Récupération des users (mapping)
  refresh() {
    Axios.get("http://192.168.88.228:8000/user/").then(response => {
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
ReactDOM.render(<Tableau />, document.getElementById("root"));
