import React, {Component} from 'react';
import './style.css';

import {Card} from '../../components/Card';
import {Chat} from '../../components/Chat';
import {Visitors} from '../../components/Visitors';

const visitors = [
  {
    id: 1,
    name: 'Josh Compton',
    description: 'Some dev that is pretty sure he is awesome.'
  },
  {
    id: 2,
    name: 'Milan Mijatovic',
    description: 'Are you having fun using this app?  You should probably thank this guy.'
  },
  {
    id: 3,
    name: 'Davo Galavotti',
    description: 'He came up with what the Chromeciérge\'s face looks like!'
  },
  {
    id: 4,
    name: 'Margot Krouwer',
    description: 'Graph QL?! Wanna know more?  Look for this awesome gal.'
  }
];

export class Main extends Component {
  render() {
    return(
      <div>
        <h1 className="header">Chromeciérge</h1>
        <p className="currentMessage">Check out what's going on!</p>
        <hr className="header-split" />
        <div className="discovery-section">
          <Card maxWidth={true}>
            <Visitors visitors={visitors}/>
          </Card>
        </div>
        <Chat/>
      </div>
    );
  }
}
