import React, {Component} from 'react';
import './style.css';

import {MessageContainer} from '../MessageContainer';

export class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showConversation: false,
      conversation: [],
      incomingResponse: false
    }
  }

  render() {
    const initMessage = {
      id: -1,
      isResponse: true,
      text: 'Hello Dillon! What can I help you with today?',
      timestamp: new Date()
    };

    return(
      <div className='chat'>
        <div className={`conversation ${this.state.showConversation ? 'show' : ''}`}>
          <MessageContainer message={initMessage}/>
          {this.state.conversation.map(message => <MessageContainer message={message}/>)}
        </div>
        <div className="input-container">
          <input className="input" type="text" />
          <span className="send-icon">></span>
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
};

Chat.defaultProps = {
};
