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
    API.getMessages(this.props.loggedInUser._id, this.props.params.id)
    .then(res => {
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