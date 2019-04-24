import React from "react";
import Tableau from "./Tableau";
import { Table } from 'reactstrap';

export default function Tableaux() {
   const users = [
      {
         "id": 2,
         "pseudo": "Baz",
         "score": 12,
         "isLogged": 0
      },
      {
         "id": 3,
         "pseudo": "Yacine",
         "score": 25,
         "isLogged": 0
      },
      {
         "id": 4,
         "pseudo": "samy",
         "score": 32,
         "isLogged": 0
      }
   ]
   return (
      <div><h1>Leaderboard</h1>
      <Table dark>
                <thead>
                    <tr>
                        <th></th>
                        <th><h6>Pseudo</h6></th>
                        <th><h6>Score</h6></th>
                    </tr>
                </thead>
      <ul>
      {users.map((user, i) => (
         <li key={i}>
            <Tableau
            pseudo={user.pseudo}
            score={user.score}
            />
         </li>
      ))}
      </ul>
      </Table>
      </div>
   );
}