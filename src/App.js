import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './components/Login1';

function App() {
  return (
<Router>
  <Route exact path="/" component={Login}/>
</Router>
  );
 }
 


export default App;
