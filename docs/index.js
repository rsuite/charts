
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PageContainer } from 'rsuite-docs';
import { Markdown } from 'react-markdown-reader';
import CodeView from 'react-code-view';

import ECharts from '../src';
import './less/index.less';


import baseBarOptions from './data/bar-base';
import mapOptions from './data/map';
import chinaJson from './data/china.json';


class App extends Component {
  render() {

    return (
      <PageContainer
        githubURL="https://github.com/rsuite/rsuite-echarts"
        activeKey="ECharts"
      >

        <Markdown>
          {require('../README.md')}
        </Markdown>

        <h2>示例</h2>
        <CodeView
          dependencies={{
            baseBarOptions,
            ECharts
          }}
        >
          {require('./md/DefaultChart.md')}
        </CodeView>

        <CodeView
          dependencies={{
            mapOptions,
            chinaJson,
            ECharts
          }}
        >
          {require('./md/MapChart.md')}
        </CodeView>

        <Markdown>
          {require('./md/props.md')}
        </Markdown>

      </PageContainer>
    );
  }
}


const rootElement = document.getElementById('app');

ReactDOM.render(<App />,
  rootElement
);
