import React from 'react';

import { Card, CardTitle, CardText } from 'reactstrap';
import Tableau from './Table';





const Carte = (props) => {
    return (
        <div>
            <Card body className="text-center" body outline color="danger">
                <CardTitle><h1>Leaderboard</h1></CardTitle>
                <CardText><Tableau/></CardText>
            </Card>
        </div>
    );
};

export default Carte;
