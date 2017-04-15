import React, {Component} from 'react';
import './style.css';

import {MessageContainer} from '../MessageContainer';

export class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showConversation: false,
      conversation: [],
      incomingResponse: false,
      input: ''
    }
  }

  showConversation() {
    this.setState({showConversation: true});
  }

  hideConversation() {
    this.setState({showConversation: false});
  }

  sendMessage() {
    const input = this.state.input;
    let conversation = this.state.conversation;

    conversation.push({
      id: Math.random(),
      isResponse: false,
      text: this.state.input,
      timestamp: new Date()
    });

    this.setState({conversation, incomingResponse: true, input: ''}, () => {
      window.setTimeout(() => {
        conversation.push({
          id: Math.random(),
          isResponse: true,
          text: `Thanks for telling me "${input}"`,
          timestamp: new Date()
        });

        this.setState({conversation, incomingResponse: false});
      }, 2000);
    });
  }

  setInput(e) {
    this.setState({input: e.target.value});
  }

  checkIfEnter(e) {
    let code = (e.keyCode ? e.keyCode : e.which);
    if(code === 13) {
      this.sendMessage();
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
          <div className="close">
            <div className="close-button" onClick={this.hideConversation.bind(this)}>Leave Conversation</div>
          </div>
          <MessageContainer message={initMessage}/>
          {this.state.conversation.map(message => <MessageContainer key={message.id} message={message}/>)}
        </div>
        <div className="input-container">
          <input
            className="input"
            type="text"
            value={this.state.input}
            onInput={this.setInput.bind(this)}
            onFocus={this.showConversation.bind(this)}
            onKeyUp={this.checkIfEnter.bind(this)}
          />
          <span
            className="send-icon"
            onClick={this.sendMessage.bind(this)}
          >
            >
          </span>
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
};

Chat.defaultProps = {
};
