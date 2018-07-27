import React, { Component } from 'react';

class Message extends Component {
  render() {
    const loggedIn = this.props.loggedIn;
    const loggedInUser = this.props.loggedInUser;
    // Was the message sent by the current user. If so, add a css class
    const fromMe = this.props.fromMe ? 'from-me' : '';

    return (
      <div className={`message ${fromMe}`}>
        <div className='username'>
          {/* { this.props.username } */}
          { loggedInUser.ownername }
        </div>
        <div className='message-body'>
          { this.props.message }
        </div>
      </div>
    );
  }
}

Message.defaultProps = {
  message: '',
  username: '',
  fromMe: false,
  messageTo: '',
  messageFrom: ''
};

export default Message;