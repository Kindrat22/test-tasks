import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
function App() {

  return (   
    <div className="app">
      <Switch>
        <Route exact path='/' component = {Login}/>
        <Route exact path='/main' component = {Main}/>
      </Switch>
    </div>
  );
}
export default App;