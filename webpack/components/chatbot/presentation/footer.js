import React from 'react';



const ChatboxFooter = (props) => {
  return (
  <div className="panel-footer">
  <div className="input-group">
      <input id="btn-input" type="text" className="form-control input-sm chat_set_height" placeholder="Type your message here..." tabIndex="0" dir="ltr" spellCheck="false" autoComplete="off" autoCorrect="off" autoCapitalize="off" contentEditable="true" />
      <span className="input-group-btn">
          <button className="btn bt_bg btn-sm" id="btn-chat">
              Send
          </button>
      </span>
  </div>
</div>);
};

export default ChatboxFooter;