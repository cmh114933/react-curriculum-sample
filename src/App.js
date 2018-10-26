import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Users from './pages/Users'
import Gallery from './pages/Gallery'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
          <Route exact path="/" component={Gallery} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:userId/gallery" component={Gallery} />
        </div>
      </Router>
    );
  }
}

export default App;
