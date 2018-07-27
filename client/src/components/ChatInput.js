import React, { Component } from 'react';
import API from '../utils/API';


class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = { chatInput: '' };

    // React ES6 does not bind 'this' to event handlers by default
    this.submitHandler = this.submitHandler.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
  }
  
  submitHandler(event) {
    // Stop the form from refreshing the page on submit
    event.preventDefault();

    let message = new FormData();

    message.set('username', this.state.username);
    message.set('message', this.state.message);
    message.set('fromMe', this.state.fromMe);
    message.set('messageTo', this.state.messageTo);
    message.set('messageFrom', this.state.messageFrom);
    message.set('date', this.state.date);

    API.addMessage(message)
    .then(res => {
        console.log(res)
        // if (!res.data.error) {
        //     // this.setState({
        //         // redirectTo: '/login',
        //         // username: "",
        //         // message: "",
        //         // fromMe: "",
        //         // messageTo: "",
        //         // messageFrom: "",
        //         // date: { type: Date, default: Date.now }
        //     // })
        // } else {
        //     console.log('username already taken')
        // }
    })
    .catch(err => {
        console.log('signup error: ')
        console.log(err)
    });


    // Clear the input box
    this.setState({ chatInput: '' });

    // Call the onSend callback with the chatInput message
    this.props.onSend(this.state.chatInput);
  }

  textChangeHandler(event)  {
    this.setState({ chatInput: event.target.value });
  }

  render() {
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