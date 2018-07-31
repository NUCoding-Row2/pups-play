import React, { Component } from 'react';

class Message extends Component {

  render() {
    const { loggedIn, loggedInUser } = this.props;

    if (!this.props.loggedIn) {
      return false;
    }
    
    let fromMe = false;

    console.log(this.props);
    console.log("LoggedInUser: ", loggedInUser._id);

    if ((this.props.message.messageFrom[0] === loggedInUser._id) || (this.props.message.messageFrom === loggedInUser._id)) {
      fromMe = true;
    }

    return (
      <div className={`message ${fromMe ? 'from-me' : ''}`}>
        <div className='username'>
          {this.props.message.username}
          {/* { loggedInUser.ownername } */}
        </div>
        <div className='message-body'>
          {this.props.message.message}
        </div>
      </div>
    );
  }
}

// Message.defaultProps = {
//   message: '',
//   username: '',
//   // fromMe: false,
//   messageTo: '',
//   messageFrom: ''
// };

export default Message;