import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import API from './utils/API';
import Navbar from './components/navbar';
import Home from './components/home';
import Signup from './components/signup';
import Login from './components/login';
import ViewPups from './components/view-pups';
import PupProfile from './components/view-profile';
import UserProfile from './components/user-profile';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      loggedInUser: {},
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  getUser() {
    axios.get('/api/pups/user').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')
        this.setState({
          loggedIn: true,
          loggedInUser: response.data.user,
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          loggedInUser: {},
        })
      }
    })
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  render() {
    return (
      <Router>
        <div className="App">

          <Navbar updateUser={this.updateUser} 
          loggedIn={this.state.loggedIn} 
          />
          {/* Routes to different components */}
          <Route
            exact path="/"
            component={Home} />
          <Route
            exact path="/signup"
            render={() =>
              <Signup />}
          />
          <Route
            exact path="/login"
            render={() =>
              <Login
                updateUser={this.updateUser}
              />}
          />
          <Route
            exact path="/profile"
            render={() =>
              <UserProfile
                updateUser={this.updateUser}
                loggedIn={this.state.loggedIn}
                loggedInUser={this.state.loggedInUser}
              />}
          />
          <Route
            exact path="/pups"
            render={() =>
              <ViewPups
                updateUser={this.updateUser}
                loggedIn={this.state.loggedIn}
              />}
          />
          <Route exact path="/pups/:id" component={PupProfile} />
          {/*<Route
            exact path="/pups/:id"
            render={() =>
              <PupProfile
                // updateUser={this.updateUser}
                // loggedIn={this.state.loggedIn}
              />}
            />*/}
        </div>
      </Router>
    );
  }
}

export default App;
