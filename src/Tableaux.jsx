import React from "react";
import Tableau from "./Tableau";
import { Table } from "reactstrap";
//  STYLE
import styles from "./Table.module.css";

export default function Tableaux() {
  return (
    <div>
      <p className={`${styles.title}`}>Leaderboard</p>
      <Table dark>
        <thead>
          <tr>
            <th />
            <th>
              <h3>Pseudo</h3>
            </th>
            <th>
              <h3>Score</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          <Tableau />
        </tbody>
      </Table>
    </div>
  );
}
