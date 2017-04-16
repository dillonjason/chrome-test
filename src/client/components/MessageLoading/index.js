import React, {Component} from 'react';
import './style.css';

import {Card} from '../Card'

export class MessageLoading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: false,
      firstInterval: null,
      second: false,
      secondInterval: null,
      third: false,
      thirdInterval: null
    }
  }

  componentDidMount() {
    window.setTimeout(() => this.startPulse(1), 0);
    window.setTimeout(() => this.startPulse(2), 100);
    window.setTimeout(() => this.startPulse(3), 200);
  }

  componentWillUnmount() {
    clearInterval(this.state.firstInterval);
    clearInterval(this.state.secondInterval);
    clearInterval(this.state.thirdInterval);
  }

  startPulse(which) {
    if (which === 1) {
      this.setState({
        firstInterval: setInterval(() => this.setState({first: !this.state.first}), 500)
      });
    }
    else if (which === 2) {
      this.setState({
        secondInterval: setInterval(() => this.setState({second: !this.state.second}), 500)
      });
    }
    else if (which === 3) {
      this.setState({
        thirdInterval: setInterval(() => this.setState({third: !this.state.third}), 500)
      });
    }
  }

  render() {
    return(
      <Card altStyle={true}>
        <div className="message-loading">
          <span className={`dot ${this.state.first ? 'big' : ''}`} ref={(c) => this.first = c}>&middot;</span>
          <span className={`dot ${this.state.second ? 'big' : ''}`} ref={(c) => this.second = c}>&middot;</span>
          <span className={`dot ${this.state.third ? 'big' : ''}`} ref={(c) => this.third = c}>&middot;</span>
        </div>
      </Card>
    );
  }
}

MessageLoading.propTypes = {
};

MessageLoading.defaultProps = {
};
