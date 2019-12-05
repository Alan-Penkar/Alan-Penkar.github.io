import React from 'react';
import LeoPic from'../../assets/LeoPup.jpg'
import UserPic from'../../assets/user.jpg'
import DateHead from './presentation/datehead'

const MessageItem = (props) => {
  return (<li key={props.lkey} className="chat_text">{props.message}</li>);
}
  
class MessageList extends React.Component {

  render() {
    return (
      <div className={`chatbox__body__message chatbox__body__message--${this.props.sender==="u" ? "right":"left"}`}>
        <DateHead time={this.props.time} date={this.props.date}/>
        <img src={this.props.sender==="u"?UserPic:LeoPic} alt="Chat Image" className="prof"/>
        <div className="clearfix"></div>
        <div className="ul_section_full">
          <ul className="ul_msg">            
            <li key="1"><strong>{this.props.sender==="u"?"Me":"Leopold"}</strong></li>
            {this.props.messages.map((message, index) => {
                return <MessageItem lkey={index+2} message={message}/>} 
            )}
            
          </ul>
          <div className="clearfix"></div>
        </div>
      </div> )
  };
}
  
  export default MessageList;
  