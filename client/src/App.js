import React, { Component } from 'react';
// import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import Signup from './components/signup';
import Login from './components/login';
import ViewPups from './components/view-pups';
import PupProfile from './components/view-profile'

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/pups" component={ViewPups}/>
        <Route exact path="/pups/:id" component={PupProfile}/>
      </Switch>
    </div>
  </Router>
);

export default App;
