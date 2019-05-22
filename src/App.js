import React, { Component } from "react";

//  STYLE
import "./init_app.css";

// HOMEMADE COMPONENTS
import Router from "./Router";

class App extends Component {
   render() {
      return (
         <div className="App" style={{ minHeight: "100vh" }}>
            <Router />
         </div>
      );
   }
}
export default App;
