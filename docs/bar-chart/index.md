---
title: 柱状图
---

# BarChart

## 基础用例

```jsx
import React from 'react';
import { BarChart } from '@rsuite/charts';
import data from './basic.json';

export default () => <BarChart name="客户数" data={data} />;
```

## 多组图柱

```jsx
import React from 'react';
import { BarChart, YAxis, Bars } from '@rsuite/charts';
import data from './multiple-bars.json';

export default () => (
  <BarChart data={data}>
    <YAxis axisLabel={(value) => `${value / 1000}K`} minInterval={500000} splitLine={false} />
    <Bars name="休眠客户" />
    <Bars name="新客" />
    <Bars name="非品牌用户" />
    <Bars name="老客" />
    <Bars name="流失至竞品" />
    <Bars name="来自竞品" />
  </BarChart>
);
```

## 水平图柱

```jsx
import React from 'react';
import { BarChart, XAxis, Bars } from '@rsuite/charts';
import data from './horizontal-bars.json';

export default () => (
  <BarChart horizontal height={400} data={data}>
    <XAxis axisLabel={(value) => `${value}K`} minInterval={15} />
    <Bars name="曝光用户" />
    <Bars name="购买用户" />
  </BarChart>
);
```

## 堆叠图柱

```jsx
import React from 'react';
import { BarChart, YAxis, Bars } from '@rsuite/charts';
import data from './stacked.json';

export default () => (
  <BarChart data={data}>
    <YAxis minInterval={1000} />
    <Bars name="男-互联网电视曝光量" color="#2485C1" stack="男" />
    <Bars name="男-移动曝光量" color="#32A4D4" stack="男" />
    <Bars name="男-电脑曝光量" color="#34C3FF" stack="男" />
    <Bars name="女-互联网电视曝光量" color="#AB005B" stack="女" />
    <Bars name="女-移动曝光量" color="#EA3797" stack="女" />
    <Bars name="女-电脑曝光量" color="#FF8FCB" stack="女" />
  </BarChart>
);
```

## 在柱状图中添加折线

```jsx
import React from 'react';
import { BarChart, YAxis, Bars, Line } from '@rsuite/charts';
import data from './with-line.json';

export default () => (
  <BarChart data={data}>
    <YAxis minInterval={1000000} axisLabel={(value) => `${value / 1000}K`} />
    <Bars name="触达用户数" barWidth={10} />
    <Line name="曝光量" />
  </BarChart>
);
```

## 在柱状图中添加散点

```jsx
import React from 'react';
import { BarChart, Bars, Scatter } from '@rsuite/charts';
import data from './with-scatter.json';

export default () => (
  <BarChart horizontal data={data}>
    <Bars name="本月曝光量" barWidth={10} />
    <Scatter name="购买前实际发生曝光量" />
  </BarChart>
);
```
