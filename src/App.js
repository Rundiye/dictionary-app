import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard'
import Navbar from './components/navbar/Navbar';
import Dictionary from './components/dictionaries/Dictionary';
import DictionaryInputList from './components/dictionaries/DictionaryInputList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route 
            exact 
            path="/" 
            component={Dashboard}
          />
          <Route 
            exact 
            path="/dictionary/:id" 
            component={Dictionary} 
          />
          <Route 
            exact 
            path="/dictionary/:id//:taskId" 
            component={DictionaryInputList} 
          /> 
        </Switch>
      </div>
    );
  }
}

export default App;