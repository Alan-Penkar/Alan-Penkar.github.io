import React from 'react';
import LeoPic from'../../assets/LeoPup.jpg'
import UserPic from'../../assets/user.jpg'
import LoadingGIF from '../../assets/loading.gif'
import DateHead from './presentation/datehead'

const API_ADDRESS = "https://2lt638vo5f.execute-api.us-east-1.amazonaws.com/dev/dummyChatAPI";

class Loading extends React.Component {

    render() {
        return (
        <div className={`chatbox__body__message chatbox__body__message--${this.props.sender==="u" ? "right":"left"}`}>
         
            <img src={this.props.sender==="u"?UserPic:LeoPic} alt="Chat Image" className="prof"/>
          <div className="clearfix"></div>
          <div className="ul_section_loading">
            <ul className="ul_msg">            
              <li key="1"><strong>{this.props.sender==="u"?"Me":"Leopold"}</strong></li>
              <li key="2"><img src={LoadingGIF} alt="Chat Image" className="loading"/></li>
            </ul>
            <div className="clearfix"></div>
          </div>
        </div> );
        };
  }
  
  

export default Loading;