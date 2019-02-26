import React from 'react';
import BarChart from '@/charts/BarChart';
import YAxis from '@/components/YAxis';
import Bars from '@/series/Bars';
import CodeView from 'react-code-view';

const data = [
  ['2018-03', 0, 980 * 1000, 0, 0, 0, 0],
  ['2018-04', 800 * 1000, 780 * 1000, 0, 180 * 1000, 0, 0],
  ['2018-05', 750 * 1000, 730 * 1000, 0, 180 * 1000, 0, 0],
  ['2018-06', 730 * 1000, 680 * 1000, 80 * 1000, 180 * 1000, 270 * 1000, 180 * 1000],
  ['2018-07', 730 * 1000, 680 * 1000, 80 * 1000, 180 * 1000, 270 * 1000, 180 * 1000],
  ['2018-08', 730 * 1000, 680 * 1000, 80 * 1000, 180 * 1000, 270 * 1000, 180 * 1000]
];

function VerticalMultipleBarsShowcase() {
  return (
    <CodeView
      classPrefix="rs-"
      buttonClassName="rs-btn-subtle rs-btn-icon-circle"
      dependencies={{
        data,
        BarChart,
        YAxis,
        Bars
      }}
    >
      {require('../md/MultipleBars.md')}
    </CodeView>
  );
}

export default VerticalMultipleBarsShowcase;
