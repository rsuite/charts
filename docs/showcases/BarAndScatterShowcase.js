import React from 'react';
import CodeView from 'react-code-view';
import { BarChart, Bars, Scatter, YAxis } from '../..';

const data = [
  ['新客', 26, 10],
  ['流失至竞品', 25, 11],
  ['老客', 49, 11],
  ['来自竞品', 5, 5],
  ['非品牌客户', 78, 12]
];

function BarAndScatterShowcase() {
  return (
    <CodeView
      classPrefix="rs-"
      buttonClassName="rs-btn-subtle rs-btn-icon-circle"
      dependencies={{
        data,
        BarChart,
        YAxis,
        Bars,
        Scatter
      }}
    >
      {require('../md/BarsWithScatter.md')}
    </CodeView>
  );
}

export default BarAndScatterShowcase;
