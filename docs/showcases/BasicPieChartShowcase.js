import React from 'react';
import CodeView from 'react-code-view';
import { PieChart } from '../..';

const data = [
  ['搜索引擎', 40],
  ['外部链接', 6],
  ['站内来源', 6],
  ['其他', 1],
  ['直接访问', 47],
];

function BasicPieChartShowcase() {
  return (
    <CodeView
      classPrefix="rs-"
      buttonClassName="rs-btn-subtle rs-btn-icon-circle"
      dependencies={{
        data,
        PieChart,
      }}
    >
      {require('../md/BasicPieChart.md')}
    </CodeView>
  );
}

export default BasicPieChartShowcase;
