import React from 'react';



const ChatboxHeader = (props) => {
    return (
    <div className="chatbox__title">
        <h5 onClick={props.BarClickHandle}><a href={`${window.location.hash}`}>{props.title}</a></h5>
        <button className="chatbox__title__tray" onClick={props.MinClickHandle}>
            <span></span>
        </button>
        <button className="chatbox__title__close" onClick={props.CloseClickHandle}>
            <span>
                <svg viewBox="0 0 12 12" width="12px" height="12px">
                <line stroke="#FFFFFF" x1="11.75" y1="0.25" x2="0.25" y2="11.75"></line>
                <line stroke="#FFFFFF" x1="11.75" y1="11.75" x2="0.25" y2="0.25"></line>
                </svg>
            </span>
        </button>
    </div>);
};

ChatboxHeader.defaultProps = {
    "title":"Ask About Alan"
}

export default ChatboxHeader;