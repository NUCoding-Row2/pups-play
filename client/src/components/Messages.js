import React, { Component } from 'react';
import API from '../utils/API';
import Message from './Message';

class Messages extends Component {
  state = {
    chat: []
  }

  componentDidUpdate() {
    // There is a new message in the state, scroll to bottom of list
    const objDiv = document.getElementById('messageList');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  componentDidMount() {
    this.getMessages();
    // ^ can wrap in set interval here if needed - alterna-socket
  }

  // GET method to get messages
  // add logic to sort and display messages between two users
  getMessages = () => {
    console.log("messages.js: HERE !!!!! Getting Messages History");
    console.log(this.props.loggedInUser._id, this.props.params.id);
    API.getMessages(this.props.loggedInUser._id, this.props.params.id)
    .then(res => {
      console.log("THIS IS IT MAN: ",res)
      this.setState({
        chat: res.data
      })
    })
  }

  render() {
    // Loop through all the messages in the state and create a Message component
    // let messages = null;
    // if(this.state.messages.length > 0) {
      // messages = this.state.chat.map((message, i) {
    //}
    const chatdata = this.state.chat;
    console.log("CHAT DATA: ", chatdata);
    // SHOW HISTORICAL CHAT DATA

    return (
      <div className='messages' id='messageList'>
        {this.state.chat.map(message => (
          <div>
            {/* <p>{message.messageFrom}</p> */}
            <p>{message.message}</p>
          </div>
        ))}
      </div>
    )

    const messages = this.props.messages.map((message, i) => {
        return (
          <Message
            message={message}
            key={i}
            // username={message.username}
            // message={message.message}
            // fromMe={message.fromMe}
            // messageFrom={message.messageFrom} 
            loggedInUser={this.props.loggedInUser}
             />
        );
      });

    return (
      <div className='messages' id='messageList'>
        { messages }
      </div>
    );
  }
}

Messages.defaultProps = {
  messages: []
};

export default Messages;