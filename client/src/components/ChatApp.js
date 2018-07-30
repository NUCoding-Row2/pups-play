import React, { Component } from 'react';
import io from 'socket.io-client';
import config from '../config';
import Messages from './Messages';
import ChatInput from './ChatInput';
import SadDog from "../assets/images/sad-dog.png";

require('../styles/ChatApp.css');

const imageSize = {
  width: "200px"
}


const center = {
  alignSelf: "center",
  width: "200px"
}

class ChatApp extends Component {
  socket = {};
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.sendHandler = this.sendHandler.bind(this);

    // Connect to the server
    this.socket = io(config.api, { query: `username=${props.username}` }).connect();

    // Listen for messages from the server
    this.socket.on('server:message', message => {
      this.addMessage(message);
    });
  }

  sendHandler(message) {
    const messageObject = {
      username: message.username,
      message: message.message,
      // fromMe: false,
      messageTo: message.messageTo,
      messageFrom: message.messageFrom
    };
    //^remove this

    // Emit the message to the server
    this.socket.emit('client:message', messageObject);

    messageObject.fromMe = true;
    this.addMessage(messageObject);
  }

  addMessage(message) {
    // Append the message to the component state
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  render() {

    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ')
    console.log(this.props);


    return (
      <div className="pups-bg">
        {loggedIn ? (
          <div className="container centerContent">
          <div className="card chat-specs">
          <div className="card-header">
          <div className="card-title h5">Message to:</div>
          <div className="card-subtitle text-gray"></div>
          <div className="card-body chat chatWindow">
            {/* <h3>Howler</h3> */}
            <Messages messages={this.state.messages} loggedInUser={this.props.loggedInUser} params={this.props.match.params} />
            </div>
            <div class="card-footer">
            <ChatInput onSend={this.sendHandler} loggedInUser={this.props.loggedInUser} params={this.props.match.params} />
            <p class="message">Click "Enter" on keyboard to send message.</p>
            </div>
            </div>
          </div>
          <br />
          <div className="columns"><a href="javascript:history.back()" className="text-center"><button class="btn btn-primary btn-action btn-lg"><i class="icon icon-back"></i></button> Back to profile</a></div>
          </div>
        ) : (
            <div className="container grid-md">
              <h1 className="hero__title">Oops!</h1>
              <p className="text-center mt-2 subtitle">Sorry You Don't Have Permission to View This Page!</p>
              <img src={SadDog} style={imageSize} style={center} />
            </div>
          )}
      </div>
    );
  }

}
// ChatApp.defaultProps = {
//   username: 'Anonymous'
// };

export default ChatApp;