import React from 'react';
import LeoPic from'../../assets/LeoPup.jpg'
import UserPic from'../../assets/user.jpg'

class MessageItem extends React.Component {
    state = {
        sender:null,
        messages:[]
    }
    
    render() {
      return (<li>
        TEST
      </li>);
    }
}
  
class MessageList extends React.Component {
    state = {
      sender: this.props.sender,
      messages: this.props.messages
    };
    
    

    render() {
        console.log(window.location.hash)
        return (<div className={`chatbox__body__message chatbox__body__message--${this.state.sender==="u" ? "right":"left"}`}>
    
        <div className="chatbox_timing">
          <ul>
            <li key="1"><a href="#"><i className="fa fa-calendar"></i> 11/28/2019</a></li>
            <li key="2"><a href="#"><i className="fa fa-clock-o"></i> 7:00 PM</a></li>
          </ul>
        </div>
          <img src={this.sender==="u"?UserPic:LeoPic} alt="Picture"/>
          <div className="clearfix"></div>
          <div className="ul_section_full">
            <ul className="ul_msg">
              <li key="1"><strong>{this.sender==="u"?"Me":"Leopold"}</strong></li>
              <li key="2">Hello, I'm Leopold the puppy AI!  My dad, Alan, created me to help you.  I love helping people, ask me anything you want about him!</li>
            </ul>
            <div className="clearfix"></div>
            
          </div>
        </div> )
        };
  }
  
  export default MessageList;
  