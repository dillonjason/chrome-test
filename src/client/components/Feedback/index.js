import React, {Component} from 'react';
import './style.css';

export class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      feedbackRecieved: false
    };
  }

  toggleFeedback() {
    this.setState({isOpen: !this.state.isOpen})
  }

  toggleFeedbackRecieved() {
    this.setState({feedbackRecieved: !this.state.feedbackRecieved})
  }

  render() {
    return(
      <div className='feedback'>
        <div className="show-feedback" onClick={this.toggleFeedback.bind(this)}>
          &middot;&middot;&middot;
        </div>
        {this.state.isOpen &&
        <div className="feedback-input">
          {!this.state.feedbackRecieved &&
          <div className='feedback-buttons'>
            <button type="button" onClick={this.toggleFeedbackRecieved.bind(this)}>
              This was helpful
            </button>
            <button type="button" onClick={this.toggleFeedbackRecieved.bind(this)}>
              Not what I wanted
            </button>
          </div>
          }
          {this.state.feedbackRecieved &&
          <div className="feedback-recieved">
            Thanks for the feedback. I will use it to improve!
          </div>
          }
        </div>
        }
      </div>
    );
  }
}

Feedback.propTypes = {
};

Feedback.defaultProps = {
};
