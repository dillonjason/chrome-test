import React, {Component} from 'react';
import moment from 'moment';
import './style.css';

import {Card} from '../Card';

export class MessageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tsInterval: null,
      tsMessage: ''
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
      <div className="message-container" key={this.props.message.id}>
        <Card
          altStyle={this.props.message.isResponse}
        >
          <p className="message-text">{this.props.message.text}</p>
        </Card>
        <span className="message-timestamp">{this.state.tsMessage}</span>
      </div>
    );
  }
}

MessageContainer.propTypes = {
  message: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    isResponse: React.PropTypes.bool,
    text: React.PropTypes.string.isRequired,
    timestamp: React.PropTypes.object.isRequired
  }).isRequired
};

MessageContainer.defaultProps = {
};
