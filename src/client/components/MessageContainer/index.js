import React, {Component} from 'react';
import moment from 'moment';
import './style.css';

import {Card} from '../Card';
import {Feedback} from '../Feedback';

export class MessageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tsInterval: null,
      tsMessage: this.getTsMessage()
    }
  }

  componentDidMount() {
    const timeStamp = moment(this.props.message.timestamp);
    const pastMinutes = timeStamp.diff(moment(), 'minutes');

    if (pastMinutes < 1440) {
      this.setState({
        tsInterval: window.setInterval(() => {
            const message = this.getTsMessage();
            this.setState({tsMessage: message});

            if (message.indexOf('/') !== -1) {
              window.clearInterval(this.state.tsInterval);
            }
          },
          60000)
      });
    }
  }

  getTsMessage() {
    const timeStamp = moment(this.props.message.timestamp);
    const pastMinutes = timeStamp.diff(moment(), 'minutes');

    if (pastMinutes >= 1440) {
      return moment.format('MM/DD/YYYY hh:mm a');
    }
    else if (pastMinutes <= 0) {
      return 'Just now';
    }
    else if (pastMinutes <= 60) {
      return `${pastMinutes} minutes ago`;
    }
    else {
      return 'Earlier today';
    }
  }

  render() {
    return(
      <div className="message-container">
        <Card
          altStyle={this.props.message.isResponse}
          right={!this.props.message.isResponse}
        >
          <p className="message-text">{this.props.message.text}</p>
          {this.props.message.isResponse && <Feedback />}
        </Card>
        <span className={`message-timestamp ${!this.props.message.isResponse ? 'right' : ''}`}>{this.state.tsMessage}</span>
        {this.props.detailsComponent}
      </div>
    );
  }
}

MessageContainer.propTypes = {
  message: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    isResponse: React.PropTypes.bool,
    text: React.PropTypes.string.isRequired,
    timestamp: React.PropTypes.object.isRequired,
    detailsComponent: React.PropTypes.element,
    followUps: React.PropTypes.arrayOf(React.PropTypes.shape({
      display: React.PropTypes.string.isRequired,
      question: React.PropTypes.string.isRequired
    }))
  }).isRequired
};

MessageContainer.defaultProps = {
};
