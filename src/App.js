import React, { Component } from "react";
import Home from "./screens/Home/Home";
import { Route } from "react-router-dom";
import Login from "./screens/Login/Login";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
      </div>
    );
  }
}

export default App;
