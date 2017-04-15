import React, {Component} from 'react';
import './style.css';

import {Card} from '../../components/Card';

export class Main extends Component {
  render() {
    return(
      <div>
        <h1 className="header">Chromeciérge</h1>
        <p className="currentMessage">Check out what's going on!</p>
        <hr className="header-split" />
        <Card>
          Something
        </Card>

        <Card maxWidth={true}>
          Full Width
        </Card>

        <Card altStyle={true}>
          Alt Style
        </Card>

        <Card right={true}>
          Right Tail
        </Card>
      </div>
    );
  }
}
