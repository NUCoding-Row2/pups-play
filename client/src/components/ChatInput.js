import React, { Component } from 'react';
import API from '../utils/API';


class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      chatInput: '',
      username: '',
      message: '',
      fromMe: false,
      messageTo: '',
      messageFrom: ''
    };

    // React ES6 does not bind 'this' to event handlers by default
    this.submitHandler = this.submitHandler.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
  }
  
  submitHandler(event) {
    // Stop the form from refreshing the page on submit
    event.preventDefault();

    let message = {
      username: this.props.loggedInUser.ownername,
      message: this.state.chatInput,
      fromMe: this.state.fromMe,
      messageTo: this.props.params.id,
      messageFrom: this.props.loggedInUser._id,
      date: Date.now
    };

    // message = new Note {
    //   username: this.state.username,
    //   message: this.state.message,
    //   fromMe: this.state.fromMe,
    //   messageTo: this.state.messageTo,
    //   messageFrom: this.state.messageFrom,
    //   date: Date.now      
    // };

    // let message = new FormData();

    // message.set('username', this.state.username);
    // message.set('message', "Always send this message");
    // message.set('fromMe', this.state.fromMe);
    // message.set('messageTo', this.state.messageTo);
    // message.set('messageFrom', this.state.messageFrom);
    // message.set('date', this.state.date);

    API.addMessage(message)
    .then(res => {
        console.log(res)

    })
    .catch(err => {
        console.log('signup error: ')
        console.log(err)
    });

    // Call the onSend callback with the chatInput message
    this.props.onSend(message);
    //^remove this

    // Clear the input box
    this.setState({ chatInput: '' });

  }

  textChangeHandler(event)  {
    this.setState({ chatInput: event.target.value });
  }

  render() {
    // console.log(this.props);
    return (
      <form className="chat-input" onSubmit={this.submitHandler}>
        <input type="text"
          onChange={this.textChangeHandler}
          value={this.state.chatInput}
          placeholder="Write a message..."
          required />
      </form>
    );
  }
}

ChatInput.defaultProps = {
};

export default ChatInput;