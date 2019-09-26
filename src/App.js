import React, { Component } from 'react';
import './App.css';
import './styles/style.css';
import { Switch, Route } from 'react-router-dom';
import DictionaryDetails from './components/dictionaries/DictionaryDetails';
import DictionaryList from './components/dictionaries/DictionaryList';
import Navbar from './components/navbar/Navbar';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/dictionaries"
            component={DictionaryList}
          />
          <Route
            exact
            path="/dictionaries/:id"
            component={DictionaryDetails}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
