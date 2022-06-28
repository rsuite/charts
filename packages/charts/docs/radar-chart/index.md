---
title: 雷达图
---

# RadarChart

## 基础用例

```jsx
import React from 'react';
import { RadarChart, RadarLine } from '@rsuite/charts';
import data from './basic.json';

export default () => (
  <RadarChart data={data}>
    <RadarLine name="本次活动" />
    <RadarLine name="NORM" />
  </RadarChart>
);
```
