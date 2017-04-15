import React, {Component} from 'react';
import './style.css';

export class Card extends Component {
  render() {
    let optionalClasses = '';

    if (this.props.altStyle) {
      optionalClasses += ' alt';
    }

    if (this.props.maxWidth) {
      optionalClasses += ' full-width';
    }

    if (this.props.leftTail) {
      optionalClasses += ' left-tail';
    }
    else if (this.props.rightTail) {
      optionalClasses += 'right-tail';
    }

    return(
      <div className={`card ${optionalClasses}`}>
        {this.props.children}
      </div>
    );
  }
}

Card.propTypes = {
  leftTail: React.PropTypes.bool,
  rightTail: React.PropTypes.bool,
  altStyle: React.PropTypes.bool,
  maxWidth: React.PropTypes.bool
};

Card.defaultProps = {
  leftTail: false,
  rightTail: false,
  altStyle: false,
  maxWidth: false
};
