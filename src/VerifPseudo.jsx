import React, { Component } from "react";
import NameForm from "./NameForm";
//import axios from 'axios';

class VerifPseudo extends Component {
    render(){        
        return (
            <div>
            {"pseudo" in localStorage ? null: <NameForm/> }
            </div>
        )
    }
}
export default VerifPseudo;
