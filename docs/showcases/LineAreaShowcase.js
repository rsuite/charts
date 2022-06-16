import React from 'react';
import CodeView from 'react-code-view';
import { LineChart, Line } from '../..';

const data = [
  ['00:00'],
  ['01:00'],
  ['02:00'],
  ['03:00'],
  ['04:00'],
  ['05:00'],
  ['06:00'],
  ['07:00'],
  ['08:00'],
  ['09:00'],
  ['10:00'],
  ['11:00'],
  ['12:00'],
  ['13:00'],
  ['14:00'],
  ['15:00'],
  ['16:00'],
  ['17:00'],
  ['18:00'],
  ['19:00'],
  ['20:00'],
  ['21:00'],
  ['22:00'],
  ['23:00'],
];

for (let i = 0; i < data.length; i++) {
  data[i].push(Math.round(Math.random() * 1500));
  data[i].push(Math.round(Math.random() * 1500));
}

function LineAreaShowcase() {
  return (
    <CodeView
      classPrefix="rs-"
      buttonClassName="rs-btn-subtle rs-btn-icon-circle"
      dependencies={{
        data,
        LineChart,
        Line,
      }}
    >
      {require('../md/LineArea.md')}
    </CodeView>
  );
}

export default LineAreaShowcase;
