---
title: 散点图
---

# ScatterChart

## 基础用例

```jsx
import React from 'react';
import { ScatterChart, XAxis, YAxis, Scatter } from '@rsuite/charts';

const data1 = [
  [26, 7, 18],
  [53, 9, 35],
  [61, 18, 22],
  [62, 17, 22],
  [67, 5, 50],
];

const data2 = [
  [30, 11, 22],
  [37, 6, 18],
  [39, 5, 22],
  [42, 9, 35],
  [43, 17, 50],
];

const data3 = [
  [30, 10, 22],
  [31, 11, 18],
  [48, 8, 22],
  [59, 6, 35],
  [63, 16, 50],
];

const data4 = [
  [30, 5, 22],
  [49, 8, 35],
  [52, 15, 22],
  [59, 12, 18],
  [61, 5, 50],
];

export default () => (
  <ScatterChart>
    <XAxis name="曝光人群广告认知度" min={20} minInterval={10} />
    <YAxis name="目标人群达到率" transposeNameText axisLabel={(value) => `${value}%`} minInterval={5} />
    <Scatter name="组1" data={data1} symbolSize={(data) => data[2]} />
    <Scatter name="组2" data={data2} symbolSize={(data) => data[2]} />
    <Scatter name="组3" data={data3} symbolSize={(data) => data[2]} />
    <Scatter name="组4" data={data4} symbolSize={(data) => data[2]} />
  </ScatterChart>
);
```