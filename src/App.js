import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import JokeList from './containers/JokeList';

import logo from './logo.svg';
import './App.css';

const NotFound = () => (
  <p>404:( Page not Found</p>
)


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={JokeList} />
            {/* And other pages go on */}
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
