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
      input: '',
      helpText: this.getHelpText()
    }
  }

  componentDidMount() {
    window.setInterval(() => {
        this.setState({helpText: this.getHelpText()})
      },
      20000)
  }

  getHelpText() {
    const helpText = [
      'visitors',
      'restaurants recommended by your coworkers',
      'the weather',
      'where conference rooms are',
      'what I can help you with',
      'when your next meeting is'
    ];

    let currentHelp = (this.state || {}).helpText || '';
    let randomHelp = currentHelp;

    while(randomHelp === currentHelp || randomHelp === '') {
      let index = Math.floor(Math.random() * (helpText.length - 1));
      randomHelp = helpText[index];
    }

    return randomHelp;
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
      this.messasges.scrollTop = this.messasges.scrollHeight;
      window.setTimeout(() => {
        conversation.push({
          id: Math.random(),
          isResponse: true,
          text: `Thanks for telling me "${input}"`,
          timestamp: new Date()
        });

        this.setState({conversation, incomingResponse: false}, () => this.messasges.scrollTop = this.messasges.scrollHeight);
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
          <div className="messages" ref={(c) => this.messasges = c}>
            <MessageContainer message={initMessage}/>
            {this.state.conversation.map(message => <MessageContainer key={message.id} message={message}/>)}
          </div>
        </div>
        <div className="input-container">
          <input
            className="input"
            type="text"
            placeholder={`Ask about ${this.state.helpText}`}
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
