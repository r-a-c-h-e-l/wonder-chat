import React, { Component } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import { MessagesContainer as Messages } from './Components/Main/MessagesContainer';
import { MessageInputContainer as MessageInput } from './Components/Main/MessageInputContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="chatMain">
          <Messages/>
          <MessageInput/>
        </div>
      </div>
    );
  }
}

export default App;
