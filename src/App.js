import React, { Component } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Messages from './Components/Main/Messages';
import MessageInput from './Components/Main/MessageInput';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="chatMain">
          <Messages />
          <MessageInput />
        </div>
      </div>
    );
  }
}

export default App;
