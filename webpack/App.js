import React, { Component } from 'react';
import "@babel/polyfill";
import Chatbox from './components/chatbot/popup'
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  state = {
    messages:["Hello, I'm Leopold the puppy AI!  My dad, Alan, created me to help you.  I love helping people, ask me anything you want about him!"]
  }
  
  render() {
    return (
      <Chatbox title="Chat with Alan!"/>
    );
  }
}

export default App;
