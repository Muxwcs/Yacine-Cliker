import React from 'react';
import { Table } from 'reactstrap';

export default class Tableau extends React.Component {
    render() {
        return (
            <Table borderless>
                <thead>
                    <tr>
                        <th></th>
                        <th><h6>Score</h6></th>
                        <th><h6>Pseudo</h6></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-warning">
                        <th scope="row" >1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                    </tr>
                    <tr>
                        <th scope="row">10</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}