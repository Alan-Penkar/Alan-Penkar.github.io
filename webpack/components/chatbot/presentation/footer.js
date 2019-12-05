import React from 'react';

function watchText(event){

}
class ChatboxFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasText:false, fetching:false};
        this.textRef = React.createRef();
        this.textHandler = this.textHandler.bind(this);
        this.submitText = this.submitText.bind(this);
      }
    
    textHandler(event){
        if (this.state.hasText && event.target.value===""){
            this.setState({hasText:false});
        }else if (!this.state.hasText && event.target.value!==""){
            this.setState({hasText:true});
        }
    }

    submitText(event){
        let message = this.textRef.current.value;
        this.textRef.current.value = "";
        this.textRef.current.placeholder="Type your message here...";
        this.setState({hasText:false});
        this.props.parentTextCallback(message);
    }


    render() {
      return (
    <div className="panel-footer">
    <div className="row">
      <div className="input-group">
        <input id="btn-input" type="text" className="form-control input-sm chat_set_height" placeholder="Type your message here..." tabIndex="0" dir="ltr" spellCheck="false" autoComplete="off" autoCorrect="off" autoCapitalize="off" contentEditable="true" onChange={this.textHandler} ref={this.textRef} />
    
        <span className="input-group-btn">
          <button className={`btn bt_bg btn-sm btn-block ${this.state.hasText?"":"disabled"}`} id="btn-chat" onClick={this.submitText}>
                Send
          </button>
        </span>
      </div>
    </div>
    </div>);
    };
}

export default ChatboxFooter;