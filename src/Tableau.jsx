import React from "react";
import { Table } from "reactstrap";
import styles from "./Table.module.css";
import Axios from "axios";

export default class Tableau extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
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
