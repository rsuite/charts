import React from 'react';
import Line from '@/series/Line';
import YAxis from '@/components/YAxis';
import Bars from '@/series/Bars';
import BarChart from '@/charts/BarChart';
import DataZoom from '@/components/DataZoom';
import CodeView from 'react-code-view';

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
        Line,
        DataZoom
      }}
    >
      {require('../md/BarsWithLine.md')}
    </CodeView>
  );
}

export default LineAndBarsShowcase;
