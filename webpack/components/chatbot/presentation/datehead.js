import React from 'react';
import LeoPic from'../../../assets/LeoPup.jpg'
import UserPic from'../../../assets/user.jpg'

const DateHead = (props) => {
    return (
        <div className="chatbox_timing">
          <ul>
            <li key="1"><i className="fa fa-calendar"></i> {props.date}</li>
            <li key="2"><i className="fa fa-clock-o"></i> {props.time}</li>
          </ul>
        </div>    
    );
  }

export default DateHead;