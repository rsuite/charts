import React from 'react';
import CodeView from 'react-code-view';
import RadarChart from '@/charts/RadarChart';
import RadarLine from '@/series/RadarLine';

const data = [
  ['广告的内容清晰易懂', 100, 62, 53],
  ['广告的内容是可信的', 100, 75, 80],
  ['广告中的品牌符合我的生活方式和需要', 100, 44, 37],
  ['这个广告与众不同，很独特', 100, 39, 56],
  ['这个广告让我想与身边的人分享', 100, 44, 61]
];

function RadarShowcase() {
  return (
    <CodeView
      classPrefix="rs-"
      buttonClassName="rs-btn-subtle rs-btn-icon-circle"
      dependencies={{
        data,
        RadarChart,
        RadarLine
      }}
    >
      {require('../md/RadarChart.md')}
    </CodeView>
  );
}

export default RadarShowcase;
