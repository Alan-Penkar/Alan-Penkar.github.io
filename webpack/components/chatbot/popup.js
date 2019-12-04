import React from 'react';

import MessageList from './messages'

import LeoPic from '../../assets/LeoPup.jpg'
import UserPic from '../../assets/user.jpg'
import ChatboxFooter from './presentation/footer'
import ChatboxHeader from './presentation/header'


const defaultGreeting = "Hello, I'm Leopold the puppy AI!  My dad, Alan, created me to help you.  I love helping people, ask me anything you want about him!";
const newDate = new Date();


class Chatbox extends React.Component {
  static defaultProps = {
    "title":"Ask About Alan!",
    "vizstate":"tray",
    "messages": [
                {"sender":"a",
                "messages":[{message:defaultGreeting,
                  "date":newDate.toDateString(),
                  "time":newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds()}]
                }
              ]
  };
  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.messages,
      vizstate: this.props.vizstate,
      title: this.props.title
    };

    this.toggle_box = this.toggle_box.bind(this);
    this.close_box = this.close_box.bind(this);
    this.min_box = this.min_box.bind(this);
  }

  toggle_box(event){
    let priorvs = this.state.vizstate;
    if (priorvs==="tray"){
      var nextvs = "open";
    } else if (priorvs==="open"){
      var nextvs = "tray";
    } else {
      var nextvs = "closed";
    }
    this.setState({
      vizstate: nextvs,
      messages: this.state.messages
    });
  }

  close_box(event){
    this.setState({
      vizstate: "closed",
      messages: this.state.messages
    });
  }

  min_box(event){
    this.setState({
      vizstate: "tray",
      messages: this.state.messages
    });
  }

  render() {
    return (
      <div className="container">
          <div className="row">
              <div className={`chatbox chatbox22 chatbox--${this.state.vizstate}`}>
                <ChatboxHeader BarClickHandle={this.toggle_box} MinClickHandle={this.min_box} CloseClickHandle={this.close_box}/>
                <div className="chatbox__body">
                  {this.state.messages.map( (messages) => {
                  return <MessageList sender={messages.sender} messages={messages.messages}/>})}
                </div>
              <ChatboxFooter/>
            </div>
          </div>
      </div>)};
  }

export default Chatbox;