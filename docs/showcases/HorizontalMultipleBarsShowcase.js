import React from 'react';
import CodeView from 'react-code-view';
import { BarChart, Bars, XAxis } from '../..';

const data = [
  ['<15岁', 1, 2],
  ['16-25岁', 16, 18],
  ['26-35岁', 29, 30],
  ['36-45岁', 23, 20],
  ['46-55岁', 4, 3],
  ['>55岁', 4, 3],
  ['未知', 8, 10]
];

function HorizontalMultipleBarsShowcase() {
  return (
    <CodeView
      classPrefix="rs-"
      buttonClassName="rs-btn-subtle rs-btn-icon-circle"
      dependencies={{
        data,
        BarChart,
        XAxis,
        Bars
      }}
    >
      {require('../md/HorizontalBars.md')}
    </CodeView>
  );
}

export default HorizontalMultipleBarsShowcase;
