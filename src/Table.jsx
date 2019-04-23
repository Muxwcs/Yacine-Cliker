import React from 'react';
import { Table } from 'reactstrap';
import styles from "./Table.module.css";

export default class Tableau extends React.Component {
    render() {
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
                <tbody>
                    <tr className="text-warning">
                        <th scope="row" >1</th>
                        <td>user.pseudo</td>
                        <td>user.score</td>
                    </tr>
                </tbody>
            </Table>
            </div>
        );
    }
}
