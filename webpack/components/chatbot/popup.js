import React from 'react';
import * as Scroll from 'react-scroll';

import MessageList from './messages'
import Loading from './loading'

import LeoPic from '../../assets/LeoPup.jpg'
import UserPic from '../../assets/user.jpg'
import ChatboxFooter from './presentation/footer'
import ChatboxHeader from './presentation/header'
import LoadingGIF from '../../assets/typing1.gif'


const FETCH_TIMEOUT = 5000;
const defaultGreeting = "Hello, I'm Leopold the puppy AI!  My dad, Alan, created me to help you.  I love helping people, ask me anything you want about him!";
const API_ADDRESS = "https://2lt638vo5f.execute-api.us-east-1.amazonaws.com/dev/dummyChatAPI";
let newDate = new Date();
let scroll = Scroll.animateScroll;


class Chatbox extends React.Component {
  static defaultProps = {
    "title":"Ask About Alan!",
    "vizstate":"tray",
    "messages": [
                  {"sender":"a",
                    "date":newDate.toDateString(),
                    "time":newDate.getHours() + ":" + newDate.getMinutes().toString().padStart(2, "0") + ":" + newDate.getSeconds().toString().padStart(2, "0"),
                    "messages":[defaultGreeting]
                  }
                ]
  };

  constructor(props) {
    super(props);
    this.state = {
      fetching:false,
      messages: this.props.messages,
      vizstate: this.props.vizstate
    };

    this.toggle_box = this.toggle_box.bind(this);
    this.close_box = this.close_box.bind(this);
    this.min_box = this.min_box.bind(this);
    this.submitText = this.submitText.bind(this);
    this.MessagesRef = React.createRef();
    this.FooterRef = React.createRef();
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
      fetching: this.state.fetching,
      vizstate: nextvs,
      messages: this.state.messages
    });
  }

  submitText(message){
    if (this.state.messages[this.state.messages.length-1].sender==="u"){
      this.state.messages[this.state.messages.length-1].messages.push(message);
    }else{
      let newDate = new Date();
      this.state.messages.push({"sender":"u",
      "date":newDate.toDateString(),
      "time":newDate.getHours() + ":" + newDate.getMinutes().toString().padStart(2, "0") + ":" + newDate.getSeconds().toString().padStart(2, "0"),
      "messages":[message]
      });
    }
    this.setState(this.state);
    this.getResponse(message);
  }

  getResponse(message){
    console.log(message);
    console.log({"text":JSON.stringify(message)});
    this.setState({
        fetching: true,
        vizstate: this.state.vizstate,
        messages: this.state.messages
    });

    this.forceUpdate();
    //let newDate = new Date();
    fetch(API_ADDRESS,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"text":message})
    })
    .then(res => {return res.json();})
    .then(data => {return {message:data.message,
                           newDate:new Date()};
          })
    .then(data => {this.state.messages.push({"sender":"a",
        "date":data.newDate.toDateString(),
        "time":data.newDate.getHours() + ":" + data.newDate.getMinutes().toString().padStart(2, "0") + ":" + data.newDate.getSeconds().toString().padStart(2, "0"),
        "messages":[data.message]
          });
    })
    .then(n => {this.setState({
      fetching: false,
      vizstate: this.state.vizstate,
      messages: this.state.messages
  });})
    .then(n => {this.forceUpdate();})
    .catch(err => {alert(err);this.state.fetching=false; this.setState(this.state); this.FooterRef.alterFetchingState(false);});
    
    //this.MessagesRef.current.render();
  }

  close_box(event){
    this.setState({
      fetching: this.state.fetching,
      vizstate: "closed",
      messages: this.state.messages
    });
  }

  min_box(event){
    this.setState({
      fetching: this.state.fetching,
      vizstate: "tray",
      messages: this.state.messages
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    var element = document.getElementById("chatbody");
    console.log(element);
    element.scrollTop = element.scrollHeight;
  }

  render() {
    return (
      <div className="container">
          <div className="row">
              <div className={`chatbox chatbox22 chatbox--${this.state.vizstate}`}>
                <ChatboxHeader BarClickHandle={this.toggle_box} MinClickHandle={this.min_box} CloseClickHandle={this.close_box}/>
                <div className="chatbox__body" id="chatbody">
                  {this.state.messages.map( (messages) => {
                  return <MessageList sender={messages.sender} messages={messages.messages} date={messages.date} time={messages.time} ref={this.MessagesRef}/>})}
                  {this.state.fetching?<Loading sender="a"/>:null}
                </div>
              <ChatboxFooter parentTextCallback={this.submitText} ref={this.FooterRef}/>
            </div>
          </div>
      </div>)};
  }

export default Chatbox;