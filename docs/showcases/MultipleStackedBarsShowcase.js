import React from 'react';
import BarChart from '@/charts/BarChart';
import Bars from '@/series/Bars';
import YAxis from '@/components/YAxis';
import CodeView from 'react-code-view';

const data = [
  ['18-24岁', 650, 650, 750, 100, 100, 150],
  ['25-29岁', 200, 200, 1000, 100, 100, 150],
  ['30-34岁', 650, 650, 1400, 300, 250, 400],
  ['35-39岁', 750, 750, 1400, 300, 250, 400],
  ['40-44岁', 650, 650, 1300, 100, 100, 150],
  ['45-49岁', 650, 650, 1300],
  ['50-54岁', 650, 650, 1250],
  ['55岁+', 400, 450, 900],
];

const colors = [
  '#2485C1',
  '#32A4D4',
  '#34C3FF',
  '#AB005B',
  '#EA3797',
  '#FF8FCB',
];

function MultipleStackedBarsShowcase() {

  return (
    <CodeView
      dependencies={{
        data,
        BarChart,
        YAxis,
        Bars
      }}
    >
      {require('../md/StackedBars.md')}
    </CodeView>
  );
}

export default MultipleStackedBarsShowcase;
