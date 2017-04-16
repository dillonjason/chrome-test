import React, {Component} from 'react';
import './style.css';

export class Visitors extends Component {
  render() {
    return(
      <div className='visitors-component'>
        <h2 className="title">You have some visitors at LearnVest</h2>
        <ul className="list">
          {this.props.visitors.map(visitor => {
            return (
              <li key={visitor.id} className="peeps">
                <div className="name">{visitor.name}</div>
                {visitor.description && <div className="description">{visitor.description}</div>}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Visitors.propTypes = {
  visitors: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string
  })).isRequired
};

Visitors.defaultProps = {
};
