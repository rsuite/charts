import React from 'react';
import CodeView from 'react-code-view';
import { PieChart } from '../..';

const data = [
  ['有汽车', 40],
  ['无汽车', 60],
];

function DonutChartShowcase() {
  return (
    <CodeView
      classPrefix="rs-"
      buttonClassName="rs-btn-subtle rs-btn-icon-circle"
      dependencies={{
        data,
        PieChart,
      }}
    >
      {require('../md/Donut.md')}
    </CodeView>
  );
}

export default DonutChartShowcase;
