import React, {Component} from 'react';
import './style.css';

export class TabInfo extends Component {
  render() {
    return(
      <div className='tab-info'>
        <h2>Looks like your on LearnVest.com</h2>
        <p>
          Did you know that as a LearnVest Employee you have access to a free financial plan? you can find out more by
          checking out the <a href="https://www.google.com" _target="_blank">employee perk page</a> on Honey.
        </p>
      </div>
    );
  }
}
