import React from 'react';
import PieChart from '@/charts/PieChart';
import CodeView from 'react-code-view';

const data = [
  ['有汽车', 40],
  ['无汽车', 60],
];

function DonutChartShowcase() {
  return (
    <CodeView
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
