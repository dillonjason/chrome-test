import React, {Component} from 'react';
import './style.css';

import {Card} from '../../components/Card';
import {Chat} from '../../components/Chat';

export class Main extends Component {
  render() {
    return(
      <div>
        <h1 className="header">Chromeciérge</h1>
        <p className="currentMessage">Check out what's going on!</p>
        <hr className="header-split" />
        <div className="discovery-section">
          <Card maxWidth={true}>
            Full Width
          </Card>
        </div>
        <Chat/>
      </div>
    );
  }
}
