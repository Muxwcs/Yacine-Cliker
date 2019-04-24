import React from "react";
import Tableau from "./Tableau";
import { Table } from "reactstrap";

export default function Tableaux() {
  return (
    <div>
      <h1>Leaderboard</h1>
      <Table dark>
        <thead>
          <tr>
            <th />
            <th>
              <h6>Pseudo</h6>
            </th>
            <th>
              <h6>Score</h6>
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
