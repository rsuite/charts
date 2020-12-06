import React from 'react';
import CodeView from 'react-code-view';
import { BarChart, Bars, Line, YAxis } from '../..';

const data = [];
for (let i = 1; i <= 31; i++) {
  data.push([
    `2018-8-${i}`,
    Math.round(Math.random() * 2000000),
    Math.round(Math.random() * 2000000) + 1000000
  ]);
}

function LineAndBarsShowcase() {
  return (
    <CodeView
      classPrefix="rs-"
      buttonClassName="rs-btn-subtle rs-btn-icon-circle"
      dependencies={{
        data,
        BarChart,
        YAxis,
        Bars,
        Line
      }}
    >
      {require('../md/BarsWithLine.md')}
    </CodeView>
  );
}

export default LineAndBarsShowcase;
