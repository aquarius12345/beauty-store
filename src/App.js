import './App.css';
import api from './configs/api';
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Today from './components/Today';
import Home from './views/Home';
import Signup from './views/Signup';



function App() {

  return (
    <div className="App">
      <Today />
      <Header />
      <Switch>
        <Route exact path='/' component= {Home} />
        <Route exact path='/signup' component= {Signup} />
      </Switch>
    </div>
  );
}

export default App;
