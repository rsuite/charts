import React from 'react';
import Line from '@/series/Line';
import YAxis from '@/components/YAxis';
import Bars from '@/series/Bars';
import BarChart from '@/charts/BarChart';
import CodeView from 'react-code-view';

const data = [];
for (let i = 1; i <= 31; i++) {
  data.push([`2018-8-${i}`, Math.round(Math.random() * 2000000), Math.round(Math.random() * 2000000) + 1000000]);
}

function LineAndBarsShowcase() {
  return (
    <CodeView
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
