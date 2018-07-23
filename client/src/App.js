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
      // id: false,
      ownername: null,
      email: null,
      password: null,
      pupname: null,
      breed: null,
      age: null,
      size: null,
      location: null,
      bio: null,
      photo: null,
      date: null
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
          // id: response.data.user._id,
          ownername: response.data.user.ownername,
          email: response.data.user.email,
          password: response.data.user.password,
          pupname: response.data.user.pupname,
          breed: response.data.user.breed,
          age: response.data.user.age,
          size: response.data.user.size,
          location: response.data.user.location,
          bio: response.data.user.bio,
          photo: response.data.user.photo,
          date: response.data.user.date,
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          // id: null,
          ownername: null,
          email: null,
          password: null,
          pupname: null,
          breed: null,
          age: null,
          size: null,
          location: null,
          bio: null,
          photo: null,
          date: null
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

          <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          {/* greet user if logged in: */}
          {this.state.loggedIn &&
            <div>
              <p>Hi owner: {this.state.email}!</p>
              <p>Your dog's name is: "{this.state.pupname}"!</p>
            </div>
          }
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

// const App = () => (
//   <Router>
//     <div>
//       <Navbar />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/signup" component={Signup} />
//         <Route exact path="/login" component={Login} />
//         <Route exact path="/pups" component={ViewPups} />
//         <Route exact path="/pups/:id" component={PupProfile} />
//       </Switch>
//     </div>
//   </Router>
// );

export default App;
