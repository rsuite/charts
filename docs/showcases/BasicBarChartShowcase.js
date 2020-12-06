import React from 'react';
import CodeView from 'react-code-view';
import { BarChart, YAxis, Bars } from '../..';

const data = [
  ['1次', 4.8 * 1000000],
  ['2次', 1.2 * 1000000],
  ['3次', 0.8 * 1000000],
  ['4次', 0.5 * 1000000],
  ['5次', 0.4 * 1000000],
  ['6次', 0.35 * 1000000],
  ['7次', 0.3 * 1000000],
  ['8次', 0.2 * 1000000],
  ['9次', 0.15 * 1000000],
  ['10次', 0.1 * 1000000],
  ['10次+', 0.15 * 1000000]
];

function BasicBarChartShowcase() {
  const sum = data.reduce((acc, [category, value]) => acc + value, 0);
  return (
    <CodeView
      classPrefix="rs-"
      buttonClassName="rs-btn-subtle rs-btn-icon-circle"
      dependencies={{
        data,
        BarChart,
        YAxis,
        Bars,
        sum
      }}
    >
      {require('../md/BasicBarChart.md')}
    </CodeView>
  );
}

export default BasicBarChartShowcase;
