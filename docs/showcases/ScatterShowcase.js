import React from 'react';
import CodeView from 'react-code-view';
import { ScatterChart, Scatter, YAxis, XAxis } from '../..';

const data1 = [[26, 7, 18], [53, 9, 35], [61, 18, 22], [62, 17, 22], [67, 5, 50]];

const data2 = [[30, 11, 22], [37, 6, 18], [39, 5, 22], [42, 9, 35], [43, 17, 50]];

const data3 = [[30, 10, 22], [31, 11, 18], [48, 8, 22], [59, 6, 35], [63, 16, 50]];

const data4 = [[30, 5, 22], [49, 8, 35], [52, 15, 22], [59, 12, 18], [61, 5, 50]];

function ScatterShowcase() {
  return (
    <CodeView
      classPrefix="rs-"
      buttonClassName="rs-btn-subtle rs-btn-icon-circle"
      dependencies={{
        ScatterChart,
        XAxis,
        YAxis,
        Scatter,
        data1,
        data2,
        data3,
        data4
      }}
    >
      {require('../md/ScatterChart.md')}
    </CodeView>
  );
}

export default ScatterShowcase;
