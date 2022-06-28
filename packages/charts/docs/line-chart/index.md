---
title: 折线图
---

# LineChart

## 基础用例

```jsx
import React from 'react';
import { LineChart } from '@rsuite/charts';
import data from './basic.json';

export default () => <LineChart name="浏览量(PV)" data={data} />;
```

## 多条图线

```jsx
import React from 'react';
import { LineChart, Line, YAxis } from '@rsuite/charts';
import data from './multiple-lines.json';

export default () => (
  <LineChart data={data}>
    <YAxis minInterval={30000} axisLabel={(value) => `${value / 1000}K`} />
    <Line name="昨日浏览量(PV)" />
    <Line name="今日浏览量(PV)" />
  </LineChart>
);
```

## 多个 Y 轴

```jsx
import React from 'react';
import { LineChart, Line, YAxis } from '@rsuite/charts';
import data from './multiple-yaxis.json';

export default () => (
  <LineChart data={data}>
    <YAxis name="指标1" minInterval={30000} />
    <YAxis name="指标2" axisLabel={(value) => value.toFixed(2)} />
    <Line name="点击" yAxisIndex={0} />
    <Line name="花费" yAxisIndex={1} />
  </LineChart>
);
```

## 图线阴影

```jsx
import React from 'react';
import { LineChart, Line, YAxis } from '@rsuite/charts';
import data from './multiple-lines.json';

export default () => (
  <LineChart data={data}>
    <Line name="品牌销量指数" area />
    <Line name="品类销量指数" area />
  </LineChart>
);
```
