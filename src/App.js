import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import LandingWrapper from './components/containers/LandingWrapper';
import FormOne from './components/FormOne';
import NotFound from './components/NotFound';
// import PropTypes from 'prop-types';
// import logo from './logo.svg';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <h1>My new app</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        
        <Switch>
          <Route exact path="/" component={LandingWrapper} />
          <Route exact path="/enquiry" component={FormOne} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
