import React, { Component } from 'react';
import ChatApp from './ChatApp';

require('../styles/App.css');
require('../styles/Login.css');

class Messenger extends Component {
  constructor(props) {
    super(props);
    // this.state = { username: '' };

    // Bind 'this' to event handlers. React ES6 does not do this by default
    // this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    // this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
  }

//   usernameChangeHandler(event) {
//     this.setState({ username: event.target.value });
//   }

//   usernameSubmitHandler(event) {
//     event.preventDefault();
//     this.setState({ submitted: true, username: this.state.username });
//   }

  render() {
    const loggedIn = this.props.loggedIn;
    const loggedInUser = this.props.loggedInUser;
    // if (this.state.submitted) {
      // Form was submitted, now show the main App
      return (
        <ChatApp username={loggedInUser.ownername} />
      );
    // }

    // Initial page load, show a simple login form
    // return (
    //   <form onSubmit={this.usernameSubmitHandler} className="username-container">
    //     <h1>React Instant Chat</h1>
    //     <div>
    //       <input
    //         type="text"
    //         onChange={this.usernameChangeHandler}
    //         placeholder="Enter a username..."
    //         required />
    //     </div>
    //     <input type="submit" value="Submit" />
    //   </form>
    // );
  }

}
Messenger.defaultProps = {
};

export default Messenger;