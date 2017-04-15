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

    if (this.props.right) {
      optionalClasses += 'right';
    }

    return(
      <div className={`card ${optionalClasses}`}>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  right: React.PropTypes.bool,
  altStyle: React.PropTypes.bool,
  maxWidth: React.PropTypes.bool
};

Card.defaultProps = {
  right: false,
  altStyle: false,
  maxWidth: false
};
