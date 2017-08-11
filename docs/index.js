
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Markdown } from 'markdownloader';

import ECharts from '../src';
import './style.less';
import './highlight.less';

import baseBarOptions from './data/bar-base';
import mapOptions from './data/map';
import chinaJson from './data/china.json';


const events = {
  click(params) {
    console.log(params);
  }
};

ECharts.registerMap('china', chinaJson);

class App extends Component {

  render() {
    let styles = Object.assign({
      width: '100%',
      height: '400px'
    }, this.props.style);

    return (
      <div className="doc-page">
        <div className="doc-container">

          <div style={styles}>
            <h1>RSuite ECharts</h1>
            <p>ECharts for React</p>
            <ECharts option={baseBarOptions} onEvents={events} />


            <h4>Map</h4>
            <ECharts option={mapOptions} onEvents={events} />

            <Markdown>
              {require('./README.md')}
            </Markdown>
          </div>
        </div>
      </div>
    );
  }
}


const rootElement = document.getElementById('app');

ReactDOM.render(<App />,
  rootElement
);
