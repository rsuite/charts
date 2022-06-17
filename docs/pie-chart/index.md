---
title: 饼图
---

# PieChart

## 基础用例

```jsx
import React from 'react';
import { PieChart } from '@rsuite/charts';
import data from './basic.json';

export default () => (
  <PieChart name="访问来源" data={data} legend={false} startAngle={210} />
);
```

## 环形饼图

```jsx
import React from 'react';
import { PieChart } from '@rsuite/charts';
import data from './donut.json';

const colors = ['#34c3ff', '#1464ac'];

export default () => (
  <PieChart name="汽车" data={data} donut color={colors} />
);
```
